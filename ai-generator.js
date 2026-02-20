// AI Location Guide Generator - Google Gemini Version
// Generates comprehensive first-timer guides for any location using FREE Google Gemini API

const aiGenerator = {
  // Google Gemini API configuration
  apiEndpoint: 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent',
  apiKey: 'AIzaSyDMUho0tMSILopzRk9CLiWSOPlZ82Ysk2g', // Add your Gemini API key here
  
  // Auto-detect country from location name
  detectCountryFromLocation(location) {
    const loc = location.toLowerCase();
    
    // Asia
    if (loc.includes('tokyo') || loc.includes('osaka') || loc.includes('kyoto') || loc.includes('japan')) return 'Japan';
    if (loc.includes('seoul') || loc.includes('busan') || loc.includes('jeju') || loc.includes('korea')) return 'South Korea';
    if (loc.includes('bangkok') || loc.includes('phuket') || loc.includes('chiang mai') || loc.includes('thailand')) return 'Thailand';
    if (loc.includes('beijing') || loc.includes('shanghai') || loc.includes('hong kong') || loc.includes('china')) return 'China';
    if (loc.includes('singapore')) return 'Singapore';
    if (loc.includes('hanoi') || loc.includes('ho chi minh') || loc.includes('vietnam')) return 'Vietnam';
    if (loc.includes('bali') || loc.includes('jakarta') || loc.includes('indonesia')) return 'Indonesia';
    if (loc.includes('manila') || loc.includes('philippines')) return 'Philippines';
    if (loc.includes('kuala lumpur') || loc.includes('malaysia')) return 'Malaysia';
    if (loc.includes('taiwan') || loc.includes('taipei')) return 'Taiwan';
    if (loc.includes('mumbai') || loc.includes('delhi') || loc.includes('india')) return 'India';
    
    // Europe
    if (loc.includes('paris') || loc.includes('france')) return 'France';
    if (loc.includes('london') || loc.includes('england') || loc.includes('uk')) return 'United Kingdom';
    if (loc.includes('rome') || loc.includes('venice') || loc.includes('italy')) return 'Italy';
    if (loc.includes('barcelona') || loc.includes('madrid') || loc.includes('spain')) return 'Spain';
    if (loc.includes('berlin') || loc.includes('munich') || loc.includes('germany')) return 'Germany';
    if (loc.includes('amsterdam') || loc.includes('netherlands')) return 'Netherlands';
    if (loc.includes('switzerland') || loc.includes('zurich')) return 'Switzerland';
    if (loc.includes('greece') || loc.includes('athens')) return 'Greece';
    
    // Americas
    if (loc.includes('new york') || loc.includes('los angeles') || loc.includes('san francisco') || 
        loc.includes('miami') || loc.includes('chicago') || loc.includes('usa') || loc.includes('united states')) return 'United States';
    if (loc.includes('toronto') || loc.includes('vancouver') || loc.includes('montreal') || loc.includes('canada')) return 'Canada';
    if (loc.includes('mexico city') || loc.includes('cancun') || loc.includes('mexico')) return 'Mexico';
    if (loc.includes('rio') || loc.includes('sao paulo') || loc.includes('brazil')) return 'Brazil';
    if (loc.includes('buenos aires') || loc.includes('argentina')) return 'Argentina';
    
    // Oceania
    if (loc.includes('sydney') || loc.includes('melbourne') || loc.includes('australia')) return 'Australia';
    if (loc.includes('auckland') || loc.includes('new zealand')) return 'New Zealand';
    
    // Middle East & Africa
    if (loc.includes('dubai') || loc.includes('abu dhabi') || loc.includes('uae')) return 'United Arab Emirates';
    if (loc.includes('istanbul') || loc.includes('turkey')) return 'Turkey';
    if (loc.includes('cairo') || loc.includes('egypt')) return 'Egypt';
    if (loc.includes('cape town') || loc.includes('south africa')) return 'South Africa';
    
    // Default - let AI figure it out from context
    return 'Unknown (will be detected from context)';
  },
  
  // Smart prompt template optimized for first-timer guides
  createPrompt(location, country = 'South Korea') {
    return `You are an expert travel guide specializing in helping nervous first-time visitors overcome their fears and feel confident.

Create a comprehensive first-timer guide for: ${location}, ${country}

CRITICAL FOCUS: Address specific fears and anxieties that first-timers have. Every tip should reassure and build confidence.

Common first-timer fears to address:
- Fear of getting lost or not finding parking
- Fear of crowds being overwhelming
- Fear of not knowing what to expect
- Fear of making embarrassing mistakes
- Fear of language barriers
- Fear of safety/security
- Fear of wasting time or money

Provide the following in valid JSON format (respond ONLY with JSON, no other text):

{
  "location_name": "${location}",
  "display_name": "Full location name",
  "country": "${country}",
  "quick_info": {
    "best_time": "When to visit to avoid crowds/issues",
    "driving_time": "Approximate time from city center or how to get there",
    "parking_fee": "Parking costs or N/A",
    "entry_fee": "Entry fee or Free"
  },
  "first_timer_tips": [
    {
      "title": "Fear-focused title like: Don't panic about parking!",
      "content": "Detailed, reassuring explanation with specific facts"
    },
    {
      "title": "Another fear-focused tip",
      "content": "More reassuring details"
    }
  ],
  "timeline": [
    {
      "title": "Step name like: Arrival and Parking (10 min)",
      "content": "Detailed explanation of what to expect"
    }
  ],
  "practical_details": {
    "address": "Full address if known, or approximate location",
    "best_season": "When to visit",
    "typical_duration": "How long to spend here",
    "difficulty_level": "Easy, Moderate, or Challenging",
    "family_friendly": true,
    "accessibility_notes": "Any accessibility considerations"
  }
}

IMPORTANT GUIDELINES:
1. Be SPECIFIC - Use actual facts, numbers, times, prices
2. Be REASSURING - Every tip should reduce anxiety
3. Be PRACTICAL - Include what to bring, what to wear, what to expect
4. Avoid generic advice - "It's beautiful" is useless. "Arrive before 10 AM to avoid tour groups" is helpful.
5. Address the emotional journey - acknowledge fears then provide solutions

Return ONLY valid JSON, nothing else.`;
  },
  
  // Call Google Gemini API to generate guide
  async generateGuide(location, country = null) {
    try {
      // Auto-detect country from location if not provided
      if (!country || country === 'Worldwide') {
        country = this.detectCountryFromLocation(location);
      }
      
      console.log(`🤖 Generating Gemini AI guide for: ${location}, ${country}`);
      
      if (!this.apiKey) {
        console.log('⚠️ No Gemini API key configured, using fallback');
        return this.generateBasicGuide(location, country);
      }
      
      const url = `${this.apiEndpoint}?key=${this.apiKey}`;
      
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: this.createPrompt(location, country)
            }]
          }],
          generationConfig: {
            temperature: 0.7,
            topK: 40,
            topP: 0.95,
            maxOutputTokens: 4096,
          }
        })
      });
      
      console.log(`Gemini API response status: ${response.status}`);
      
      if (!response.ok) {
        const errorText = await response.text();
        console.error(`❌ Gemini API Error: ${response.status}`, errorText);
        console.error(`API URL used: ${url}`);
        console.error(`Check: 1) API key is correct, 2) API is enabled, 3) No restrictions blocking the request`);
        throw new Error(`Gemini API Error: ${response.status} - ${errorText}`);
      }
      
      const data = await response.json();
      
      // Extract text from Gemini response
      if (!data.candidates || !data.candidates[0] || !data.candidates[0].content) {
        console.error('❌ Invalid Gemini response structure:', data);
        throw new Error('Invalid Gemini response');
      }
      
      const content = data.candidates[0].content.parts[0].text;
      console.log('Raw Gemini response:', content);
      
      // Parse JSON from Gemini's response
      // Remove markdown code blocks if present
      let jsonText = content.trim();
      if (jsonText.startsWith('```json')) {
        jsonText = jsonText.replace(/^```json\s*/, '').replace(/\s*```$/, '');
      } else if (jsonText.startsWith('```')) {
        jsonText = jsonText.replace(/^```\s*/, '').replace(/\s*```$/, '');
      }
      
      const guideData = JSON.parse(jsonText);
      
      // Add metadata
      guideData.generated_at = new Date().toISOString();
      guideData.generated_by = 'ai-gemini';
      guideData.has_custom_content = true;
      guideData.location_id = this.generateLocationId(location);
      
      console.log(`✓ Generated Gemini guide for ${location}`);
      return guideData;
      
    } catch (error) {
      console.error('❌ Failed to generate Gemini guide:', error);
      console.log('📝 Falling back to basic guide');
      return this.generateBasicGuide(location, country);
    }
  },
  
  // Generate consistent location ID
  generateLocationId(location) {
    return location
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');
  },
  
  // Fallback generator when API is not available or fails
  generateBasicGuide(location, country = 'South Korea') {
    console.log(`📝 Generating basic guide for: ${location}`);
    
    return {
      location_id: this.generateLocationId(location),
      location_name: location,
      display_name: location,
      country: country,
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
          content: "Arrive early to secure parking, especially on weekends. Look for attendants who can help guide you to available spots."
        },
        {
          title: "Check the weather before you go",
          content: "Bring appropriate clothing for the weather. Layers are always a good idea in case temperatures change throughout the day."
        },
        {
          title: "Bring both cash and card",
          content: "Some vendors prefer cash, while major facilities accept cards. Having both options ensures you're prepared for any situation."
        },
        {
          title: "Visit on weekdays if possible",
          content: "Weekday visits typically have fewer crowds, making it easier to explore at your own pace and find parking more easily."
        },
        {
          title: "Use translation apps if needed",
          content: "Download a translation app like Google Translate or Papago before your visit for easier communication with locals."
        }
      ],
      
      timeline: [
        {
          title: "Arrival & Orientation (15-20 min)",
          content: "Look for clearly marked parking areas or follow signs. Parking attendants are usually available to help. Take a moment to get your bearings and locate information centers or maps."
        },
        {
          title: "Main Exploration (1-2 hours)",
          content: "Take your time to explore the area. Don't feel rushed - move at your own pace and enjoy the experience. Most locations have rest areas if you need a break."
        },
        {
          title: "Departure (10-15 min)",
          content: "Remember where you parked. Allow extra time for finding your vehicle and paying for parking if needed. Check you haven't left anything behind."
        }
      ],
      
      practical_details: {
        address: `${location}, ${country}`,
        best_season: "Spring or Fall for comfortable weather",
        typical_duration: "1-3 hours",
        difficulty_level: "Easy to Moderate",
        family_friendly: true,
        accessibility_notes: "Contact location directly for specific accessibility information"
      }
    };
  },
  
  // Check if API key is configured
  isConfigured() {
    return this.apiKey && this.apiKey.length > 0;
  },
  
  // Configure API key
  configure(apiKey) {
    this.apiKey = apiKey;
    console.log('✓ Gemini AI Generator configured');
  }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = aiGenerator;
}
