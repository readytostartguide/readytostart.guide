// Netlify Function: Generate Location/Activity Guide
// This keeps your API keys secure on the server side

const fetch = require('node-fetch');

exports.handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    };
  }

  try {
    const { searchQuery, country, isActivity } = JSON.parse(event.body);

    // Get API key from environment variable (secure!)
    const GEMINI_API_KEY = process.env.GEMINI_API_KEY;
    
    if (!GEMINI_API_KEY) {
      console.error('GEMINI_API_KEY not configured');
      return {
        statusCode: 500,
        body: JSON.stringify({ 
          error: 'API key not configured',
          fallback: generateBasicGuide(searchQuery, country, isActivity)
        })
      };
    }

    // Call Gemini API
    const geminiResponse = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: createPrompt(searchQuery, country, isActivity)
            }]
          }],
          generationConfig: {
            temperature: 0.7,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 4096,
          }
        })
      }
    );

    if (!geminiResponse.ok) {
      throw new Error(`Gemini API error: ${geminiResponse.status}`);
    }

    const data = await geminiResponse.json();
    let content = data.candidates[0].content.parts[0].text;

    // Clean up response
    content = content.trim();
    if (content.startsWith('```json')) {
      content = content.replace(/^```json\s*/, '').replace(/\s*```$/, '');
    } else if (content.startsWith('```')) {
      content = content.replace(/^```\s*/, '').replace(/\s*```$/, '');
    }

    const guideData = JSON.parse(content);
    
    // Add metadata
    guideData.generated_at = new Date().toISOString();
    guideData.generated_by = 'ai-gemini-backend';
    guideData.has_custom_content = true;
    guideData.is_activity = isActivity;

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(guideData)
    };

  } catch (error) {
    console.error('Error generating guide:', error);
    
    // Return basic fallback guide
    const { searchQuery, country, isActivity } = JSON.parse(event.body);
    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(generateBasicGuide(searchQuery, country, isActivity))
    };
  }
};

// Create prompt based on type
function createPrompt(searchQuery, country, isActivity) {
  if (isActivity) {
    return `You are an expert guide specializing in helping complete beginners try new activities with confidence.

Create a comprehensive first-timer guide for: ${searchQuery}

CRITICAL FOCUS: Address fears about looking foolish, not knowing rules, lacking equipment, being judged, or doing something wrong.

Provide the following in valid JSON format (respond ONLY with JSON, no other text):

{
  "activity_name": "${searchQuery}",
  "display_name": "Full activity name",
  "is_activity": true,
  "quick_info": {
    "typical_duration": "How long a first session takes",
    "difficulty_level": "Beginner friendly / Easy / Moderate",
    "equipment_needed": "What you need",
    "typical_cost": "Cost or N/A"
  },
  "first_timer_tips": [
    {
      "title": "Reassuring title",
      "content": "Detailed, specific advice"
    }
  ],
  "timeline": [
    {
      "title": "Step like: Arrival and Warmup (10 min)",
      "content": "What happens in this phase"
    }
  ]
}

Return ONLY valid JSON.`;
  } else {
    return `You are an expert travel guide specializing in helping nervous first-time visitors overcome their fears.

Create a comprehensive first-timer guide for: ${searchQuery}, ${country}

CRITICAL FOCUS: Address specific fears - getting lost, parking, crowds, making mistakes, language barriers, safety.

Provide the following in valid JSON format (respond ONLY with JSON, no other text):

{
  "location_name": "${searchQuery}",
  "display_name": "Full location name",
  "country": "${country}",
  "is_activity": false,
  "quick_info": {
    "best_time": "When to visit to avoid crowds",
    "driving_time": "How to get there",
    "parking_fee": "Parking costs or N/A",
    "entry_fee": "Entry fee or Free"
  },
  "first_timer_tips": [
    {
      "title": "Fear-focused title",
      "content": "Detailed, reassuring explanation"
    }
  ],
  "timeline": [
    {
      "title": "Step name like: Arrival (10 min)",
      "content": "What to expect"
    }
  ]
}

Be SPECIFIC with facts, numbers, times, prices. Be REASSURING. Return ONLY valid JSON.`;
  }
}

// Basic fallback guide
function generateBasicGuide(searchQuery, country, isActivity) {
  if (isActivity) {
    return {
      activity_name: searchQuery,
      display_name: searchQuery,
      is_activity: true,
      generated_by: 'fallback',
      has_custom_content: true,
      quick_info: {
        typical_duration: "1-2 hours for first session",
        difficulty_level: "Beginner friendly",
        equipment_needed: "Check with facility",
        typical_cost: "Varies by location"
      },
      first_timer_tips: [
        {
          title: "Everyone starts somewhere!",
          content: "Remember that every expert was once a beginner. Don't be afraid to ask questions or make mistakes - it's all part of the learning process."
        },
        {
          title: "Arrive early",
          content: "Give yourself extra time to find the location, park, and get oriented before your session starts. This reduces stress significantly."
        },
        {
          title: "Ask about equipment",
          content: "Many places provide equipment for first-timers or can recommend what to bring. Call ahead or check their website to avoid surprises."
        },
        {
          title: "Let them know you're new",
          content: "Instructors and staff appreciate knowing when someone is trying something for the first time. They can provide extra guidance and encouragement."
        },
        {
          title: "Focus on enjoyment, not perfection",
          content: "Your goal for the first time is simply to try it and see if you enjoy it. Don't worry about being good at it yet - that comes with practice!"
        }
      ],
      timeline: [
        {
          title: "Before You Go (1 day ahead)",
          content: "Research the location, check what to wear and bring, and mentally prepare yourself. It's normal to feel nervous!"
        },
        {
          title: "Arrival (15 min)",
          content: "Arrive early, find parking, locate the entrance, and introduce yourself to staff. Let them know it's your first time."
        },
        {
          title: "Getting Started (10-15 min)",
          content: "Staff will likely give you an orientation, show you around, and explain the basics. Don't hesitate to ask questions."
        },
        {
          title: "The Activity (30-60 min)",
          content: "Take it at your own pace. It's okay to take breaks, ask for help, or modify activities to your comfort level."
        }
      ]
    };
  } else {
    return {
      location_name: searchQuery,
      display_name: searchQuery,
      country: country || 'Unknown',
      is_activity: false,
      generated_by: 'fallback',
      has_custom_content: true,
      quick_info: {
        best_time: "Weekday mornings or early afternoons",
        driving_time: "Varies by location",
        parking_fee: "Check on arrival",
        entry_fee: "May vary"
      },
      first_timer_tips: [
        {
          title: "Plan ahead for parking",
          content: "Arrive early to secure parking, especially on weekends. Look for attendants who can help guide you."
        },
        {
          title: "Check the weather",
          content: "Bring appropriate clothing for the weather. Layers are always a good idea in case temperatures change."
        },
        {
          title: "Bring both cash and card",
          content: "Some vendors prefer cash, while major facilities accept cards. Having both options ensures you're prepared."
        },
        {
          title: "Visit on weekdays if possible",
          content: "Weekday visits typically have fewer crowds, making it easier to explore at your own pace."
        },
        {
          title: "Use translation apps if needed",
          content: "Download a translation app like Google Translate or Papago before your visit for easier communication."
        }
      ],
      timeline: [
        {
          title: "Arrival & Orientation (15-20 min)",
          content: "Look for clearly marked parking areas or follow signs. Take a moment to get your bearings and locate information centers."
        },
        {
          title: "Main Exploration (1-2 hours)",
          content: "Take your time to explore. Move at your own pace and don't feel rushed. Most locations have rest areas if you need a break."
        },
        {
          title: "Departure (10-15 min)",
          content: "Remember where you parked. Allow extra time for finding your vehicle and paying for parking if needed."
        }
      ]
    };
  }
}
