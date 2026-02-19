// AI Location Guide Generator
// Generates comprehensive first-timer guides for any location using Claude API

const aiGenerator = {
  // Claude API configuration
  apiEndpoint: 'https://api.anthropic.com/v1/messages',
  apiKey: '', // Will be set from environment or config
  model: 'claude-sonnet-4-5-20250929',
  
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

Provide the following in JSON format:

{
  "location_name": "${location}",
  "display_name": "Full location name",
  "country": "${country}",
  "quick_info": {
    "best_time": "When to visit to avoid crowds/issues",
    "driving_time": "Approximate time from city center or how to get there",
    "parking_fee": "Parking costs or 'N/A'",
    "entry_fee": "Entry fee or 'Free'"
  },
  "first_timer_tips": [
    {
      "title": "Fear-focused title (e.g., 'Don't panic about parking!')",
      "content": "Detailed, reassuring explanation with specific facts"
    }
    // Provide 5-6 tips that address real fears
  ],
  "timeline": [
    {
      "title": "Step name (e.g., 'Arrival & Parking (10 min)')",
      "content": "Detailed explanation of what to expect"
    }
    // Provide 4-6 steps covering the full visit
  ],
  "practical_details": {
    "address": "Full address if known, or approximate location",
    "coordinates": {"lat": 0.0, "lng": 0.0},
    "best_season": "When to visit",
    "typical_duration": "How long to spend here",
    "difficulty_level": "Easy/Moderate/Challenging",
    "family_friendly": true/false,
    "accessibility_notes": "Any accessibility considerations"
  }
}

IMPORTANT GUIDELINES:
1. Be SPECIFIC - Use actual facts, numbers, times, prices
2. Be REASSURING - Every tip should reduce anxiety
3. Be PRACTICAL - Include what to bring, what to wear, what to expect
4. Avoid generic advice - "It's beautiful" is useless. "Arrive before 10 AM to avoid tour groups" is helpful.
5. Address the emotional journey - acknowledge fears then provide solutions

Return ONLY the JSON, no other text.`;
  },
  
  // Call Claude API to generate guide
  async generateGuide(location, country = 'South Korea') {
    try {
      console.log(`🤖 Generating AI guide for: ${location}, ${country}`);
      
      const response = await fetch(this.apiEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': this.apiKey,
          'anthropic-version': '2023-06-01'
        },
        body: JSON.stringify({
          model: this.model,
          max_tokens: 4096,
          messages: [{
            role: 'user',
            content: this.createPrompt(location, country)
          }]
        })
      });
      
      if (!response.ok) {
        throw new Error(`API Error: ${response.status} ${response.statusText}`);
      }
      
      const data = await response.json();
      const content = data.content[0].text;
      
      // Parse JSON from Claude's response
      const guideData = JSON.parse(content);
      
      // Add metadata
      guideData.generated_at = new Date().toISOString();
      guideData.generated_by = 'ai';
      guideData.has_custom_content = true;
      guideData.location_id = this.generateLocationId(location);
      
      console.log(`✓ Generated guide for ${location}`);
      return guideData;
      
    } catch (error) {
      console.error('❌ Failed to generate guide:', error);
      throw error;
    }
  },
  
  // Generate consistent location ID
  generateLocationId(location) {
    return location
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/^-|-$/g, '');
  },
  
  // Fallback generator when API is not available
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
          content: "Arrive early to secure parking, especially on weekends. Look for attendants who can help guide you."
        },
        {
          title: "Check the weather",
          content: "Bring appropriate clothing for the weather. Layers are always a good idea in case temperatures change."
        },
        {
          title: "Bring cash and card",
          content: "Some vendors prefer cash, while major facilities accept cards. Have both options available."
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
          title: "Arrival & Parking (15-20 min)",
          content: "Look for clearly marked parking areas or follow signs. Parking attendants are usually available to help. Pay attention to payment methods - some lots use automated machines."
        },
        {
          title: "Getting Oriented (5-10 min)",
          content: "Take a moment to look around and identify key landmarks or information centers. Maps are usually available at main entrances."
        },
        {
          title: "Exploring (1-2 hours)",
          content: "Take your time to explore. Don't feel rushed - move at your own pace and enjoy the experience."
        },
        {
          title: "Departure (10 min)",
          content: "Remember where you parked. Allow extra time for finding your vehicle and paying for parking if needed."
        }
      ],
      
      practical_details: {
        address: `${location}, ${country}`,
        best_season: "Spring or Fall for comfortable weather",
        typical_duration: "1-3 hours",
        difficulty_level: "Easy to Moderate",
        family_friendly: true,
        accessibility_notes: "Check with location for specific accessibility information"
      },
      
      note: "This is an auto-generated basic guide. For more detailed information, search online or ask locals for recommendations."
    };
  },
  
  // Check if API key is configured
  isConfigured() {
    return this.apiKey && this.apiKey.length > 0;
  },
  
  // Configure API key
  configure(apiKey) {
    this.apiKey = apiKey;
    console.log('✓ AI Generator configured');
  }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = aiGenerator;
}
