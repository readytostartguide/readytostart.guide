// Country Data Loader
// Intelligently detects which country data to load based on search query

const countryLoader = {
  // Available country data files
  availableCountries: {
    'korea': {
      name: 'South Korea',
      script: 'korea.js',
      keywords: ['korea', 'seoul', 'busan', 'jeju', 'korean', 'gangnam', 'myeongdong', 'dmz', 'hanok'],
      cities: ['seoul', 'busan', 'incheon', 'daegu', 'daejeon', 'gwangju', 'ulsan', 'jeju'],
      // Location aliases and common misspellings
      aliases: {
        'namsan tower': 'N Seoul Tower',
        'namsan': 'N Seoul Tower',
        'seoul tower': 'N Seoul Tower',
        'n tower': 'N Seoul Tower',
        
        'gangam': 'Gangnam',
        'kangnam': 'Gangnam',
        'gangnam station': 'Gangnam',
        
        'myongdong': 'Myeongdong',
        'myeong dong': 'Myeongdong',
        'myungdong': 'Myeongdong',
        
        'hongdae': 'Hongdae',
        'hongik': 'Hongdae',
        'hongik university': 'Hongdae',
        
        'coex': 'COEX Mall',
        'starfield': 'COEX Mall',
        'starfield library': 'COEX Mall',
        
        'ddp': 'Dongdaemun Design Plaza',
        'dongdaemun plaza': 'Dongdaemun Design Plaza',
        'design plaza': 'Dongdaemun Design Plaza',
        
        'bukchon': 'Bukchon Hanok Village',
        'hanok village': 'Bukchon Hanok Village',
        'bukchon village': 'Bukchon Hanok Village',
        
        'insadong': 'Insadong',
        'insa dong': 'Insadong',
        
        'gyeongbok': 'Gyeongbokgung Palace',
        'gyeongbokgung': 'Gyeongbokgung Palace',
        'gyeongbok palace': 'Gyeongbokgung Palace',
        'main palace': 'Gyeongbokgung Palace',
        
        'changdeok': 'Changdeokgung Palace',
        'changdeokgung': 'Changdeokgung Palace',
        'secret garden': 'Changdeokgung Palace',
        
        'lotte world': 'Lotte World',
        'lotte tower': 'Seoul Sky Observatory',
        'seoul sky': 'Seoul Sky Observatory',
        'sky tower': 'Seoul Sky Observatory',
        
        'itaewon': 'Itaewon',
        'itawon': 'Itaewon',
        
        'han river': 'Han River Parks',
        'hangang': 'Han River Parks',
        'yeouido': 'Han River Parks',
        'banpo': 'Han River Parks',
        
        'cheonggyecheon': 'Cheonggyecheon Stream',
        'cheonggye': 'Cheonggyecheon Stream',
        'stream': 'Cheonggyecheon Stream',
        
        'gwangjang': 'Gwangjang Market',
        'gwangjang market': 'Gwangjang Market',
        
        'noryangjin': 'Noryangjin Fish Market',
        'fish market': 'Noryangjin Fish Market',
        
        'namdaemun': 'Namdaemun Market',
        'namdaemun market': 'Namdaemun Market',
        'namdaemun gate': 'Namdaemun Gate',
        
        'olympic park': 'Olympic Park',
        'olympic': 'Olympic Park',
        
        'jogyesa': 'Jogyesa Temple',
        'jogye temple': 'Jogyesa Temple',
        'temple': 'Jogyesa Temple',
        
        'dmz': 'DMZ Tour',
        'dmz tour': 'DMZ Tour',
        'panmunjom': 'DMZ Tour',
        'jsa': 'DMZ Tour'
      }
    },
    
    // Japan
    'japan': {
      name: 'Japan',
      script: 'japan.js',
      keywords: ['japan', 'tokyo', 'kyoto', 'osaka', 'japanese', 'fuji', 'shibuya', 'shinjuku', 'fushimi', 'inari'],
      cities: ['tokyo', 'kyoto', 'osaka', 'hiroshima', 'fukuoka', 'sapporo', 'nara', 'yokohama'],
      aliases: {
        'tokyo tower': 'Tokyo Tower',
        'mount fuji': 'Mount Fuji',
        'mt fuji': 'Mount Fuji',
        'fuji san': 'Mount Fuji',
        'fujisan': 'Mount Fuji',
        'fushimi inari': 'Fushimi Inari Shrine',
        'inari shrine': 'Fushimi Inari Shrine',
        'torii gates': 'Fushimi Inari Shrine',
        'thousand gates': 'Fushimi Inari Shrine'
      }
    },
    
    // Global fallback for any location worldwide
    'global': {
      name: 'Worldwide',
      script: null, // No static file needed, AI generates everything
      keywords: [], // Matches anything
      cities: []
    }
    // Future countries will be added here:
    // 'japan': {
    //   name: 'Japan',
    //   script: 'japan.js',
    //   keywords: ['japan', 'tokyo', 'osaka', 'kyoto', 'japanese', 'shibuya', 'shinjuku'],
    //   cities: ['tokyo', 'osaka', 'kyoto', 'hiroshima', 'fukuoka', 'sapporo']
    // },
    // 'thailand': {
    //   name: 'Thailand',
    //   script: 'thailand.js',
    //   keywords: ['thailand', 'bangkok', 'phuket', 'chiangmai', 'thai', 'patong'],
    //   cities: ['bangkok', 'phuket', 'chiang mai', 'pattaya', 'krabi']
    // }
  },
  
  // Detect if search is for an activity/experience vs a physical location
  isActivity(searchQuery) {
    const q = searchQuery.toLowerCase();
    
    // Activity keywords
    const activityKeywords = [
      'first', 'how to', 'learn', 'try', 'begin',
      'pickleball', 'yoga', 'gym', 'climb', 'swimming', 'golf', 'martial arts',
      'conference', 'networking', 'interview', 'meeting',
      'temple visit', 'mosque visit', 'ceremony', 'homestay', 'family',
      'karaoke', 'spa', 'jjimjilbang', 'bbq', 'sushi', 'chopsticks',
      'game', 'class', 'lesson', 'session', 'etiquette'
    ];
    
    // Check if query contains activity keywords
    for (const keyword of activityKeywords) {
      if (q.includes(keyword)) {
        // But exclude if it's clearly a place name
        if (q.includes('tower') || q.includes('palace') || q.includes('museum') || 
            q.includes('market') || q.includes('beach') || q.includes('park')) {
          return false; // It's a place, not an activity
        }
        return true; // It's an activity
      }
    }
    
    return false; // Default to place
  },
  
  // Detect which country the search query is about
  detectCountry(searchQuery) {
    const normalizedQuery = searchQuery.toLowerCase().trim();
    
    // Check each country's keywords
    for (const [countryCode, countryData] of Object.entries(this.availableCountries)) {
      // Check if query contains any keywords
      for (const keyword of countryData.keywords) {
        if (normalizedQuery.includes(keyword)) {
          return countryCode;
        }
      }
      
      // Check if query contains any city names
      for (const city of countryData.cities) {
        if (normalizedQuery.includes(city)) {
          return countryCode;
        }
      }
    }
    
    // Default to 'global' for worldwide locations (AI will detect country automatically)
    return 'global';
  },
  
  // Load the appropriate country data file
  async loadCountryData(countryCode) {
    const countryInfo = this.availableCountries[countryCode];
    
    if (!countryInfo) {
      console.error(`Country code '${countryCode}' not found`);
      return null;
    }
    
    // Global has no script file - it's AI-only
    if (!countryInfo.script || countryCode === 'global') {
      console.log(`✓ ${countryInfo.name} mode - AI generation only`);
      return Promise.resolve(countryInfo);
    }
    
    return new Promise((resolve, reject) => {
      const script = document.createElement('script');
      script.src = countryInfo.script;
      script.onload = () => {
        console.log(`✓ Loaded data for ${countryInfo.name}`);
        resolve(countryInfo);
      };
      script.onerror = () => {
        console.error(`✗ Failed to load ${countryInfo.script}`);
        reject(new Error(`Failed to load country data: ${countryCode}`));
      };
      document.head.appendChild(script);
    });
  },
  
  // Get location data from the loaded country
  getLocationData(searchQuery, countryCode) {
    const normalized = searchQuery.trim();
    
    // Try to get data directly from the country's locations object
    switch(countryCode) {
      case 'korea':
        if (typeof koreaLocations !== 'undefined' && koreaLocations[normalized]) {
          return koreaLocations[normalized];
        }
        // Fallback to old function if it exists
        return typeof getKoreaLocation === 'function' ? getKoreaLocation(normalized) : null;
        
      case 'japan':
        if (typeof japanLocations !== 'undefined' && japanLocations[normalized]) {
          return japanLocations[normalized];
        }
        return null;
        
      case 'global':
        // Check if it's an activity from sports.js
        if (typeof sportsActivities !== 'undefined' && sportsActivities[normalized]) {
          return sportsActivities[normalized];
        }
        return null;
        
      default:
        return null;
    }
  },
  
  // Helper: Calculate string similarity (Levenshtein distance simplified)
  calculateSimilarity(str1, str2) {
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    
    // Exact match
    if (str1 === str2) return 1.0;
    
    // Contains match
    if (str1.includes(str2) || str2.includes(str1)) return 0.8;
    
    // Simple character overlap
    const chars1 = new Set(str1.split(''));
    const chars2 = new Set(str2.split(''));
    const intersection = new Set([...chars1].filter(x => chars2.has(x)));
    const union = new Set([...chars1, ...chars2]);
    
    return intersection.size / union.size;
  },
  
  // Resolve aliases and handle typos
  resolveLocationName(searchQuery, countryCode) {
    const country = this.availableCountries[countryCode];
    if (!country) return searchQuery;
    
    const normalized = searchQuery.toLowerCase().trim();
    
    // Check aliases first (exact matches to common names)
    if (country.aliases) {
      for (const [alias, realName] of Object.entries(country.aliases)) {
        if (normalized === alias.toLowerCase() || 
            normalized.includes(alias.toLowerCase()) ||
            alias.toLowerCase().includes(normalized)) {
          return realName;
        }
      }
    }
    
    // Fuzzy matching against known locations (if data is loaded)
    if (countryCode === 'korea' && typeof koreaLocations !== 'undefined') {
      let bestMatch = null;
      let bestScore = 0.6; // Minimum similarity threshold
      
      for (const locationName of Object.keys(koreaLocations)) {
        const similarity = this.calculateSimilarity(normalized, locationName);
        if (similarity > bestScore) {
          bestScore = similarity;
          bestMatch = locationName;
        }
      }
      
      if (bestMatch) {
        return bestMatch;
      }
    }
    
    return searchQuery; // Return original if no match found
  },
  
  // Main function to get tips for any location with AI fallback
  async getTipsForLocation(searchQuery) {
    try {
      // Detect if this is an activity or a place
      const isActivity = this.isActivity(searchQuery);
      console.log(`Type: ${isActivity ? 'Activity' : 'Place'} - "${searchQuery}"`);
      
      // Detect which country
      const countryCode = this.detectCountry(searchQuery);
      console.log(`Detected country: ${countryCode} for query: "${searchQuery}"`);
      
      // Load country data if not already loaded
      await this.loadCountryData(countryCode);
      
      // Resolve aliases and handle typos
      const resolvedName = this.resolveLocationName(searchQuery, countryCode);
      console.log(`Resolved "${searchQuery}" to "${resolvedName}"`);
      
      // Step 1: Check manual/pre-written guides first (highest quality)
      const locationData = this.getLocationData(resolvedName, countryCode);
      
      if (locationData && locationData.has_custom_content) {
        console.log(`✓ Found pre-written guide for: ${resolvedName}`);
        return {
          found: true,
          source: 'manual',
          isActivity: isActivity,
          country: this.availableCountries[countryCode].name,
          countryCode: countryCode,
          originalQuery: searchQuery,
          resolvedName: resolvedName,
          data: locationData
        };
      }
      
      // Step 2: Check cache for AI-generated guides
      if (typeof cacheManager !== 'undefined') {
        const cachedGuide = cacheManager.getFromCache(resolvedName, this.availableCountries[countryCode].name);
        if (cachedGuide) {
          console.log(`✓ Found cached AI guide for: ${resolvedName}`);
          return {
            found: true,
            source: 'cached',
            isActivity: isActivity,
            country: this.availableCountries[countryCode].name,
            countryCode: countryCode,
            originalQuery: searchQuery,
            resolvedName: resolvedName,
            data: cachedGuide
          };
        }
      }
      
      // Step 3: Generate with AI if available
      if (typeof aiGenerator !== 'undefined' && aiGenerator.isConfigured()) {
        console.log(`🤖 Generating AI guide for: ${resolvedName}`);
        try {
          const aiGuide = await aiGenerator.generateGuide(resolvedName, this.availableCountries[countryCode].name, isActivity);
          
          // Cache the generated guide
          if (typeof cacheManager !== 'undefined') {
            cacheManager.saveToCache(resolvedName, aiGuide, this.availableCountries[countryCode].name);
          }
          
          return {
            found: true,
            source: 'ai-generated',
            isActivity: isActivity,
            country: this.availableCountries[countryCode].name,
            countryCode: countryCode,
            originalQuery: searchQuery,
            resolvedName: resolvedName,
            data: aiGuide
          };
        } catch (error) {
          console.error('AI generation failed:', error);
          // Fall through to basic guide
        }
      }
      
      // Step 4: Generate basic fallback guide
      if (typeof aiGenerator !== 'undefined') {
        console.log(`📝 Generating basic guide for: ${resolvedName}`);
        const basicGuide = aiGenerator.generateBasicGuide(resolvedName, this.availableCountries[countryCode].name, isActivity);
        
        // Cache the basic guide
        if (typeof cacheManager !== 'undefined') {
          cacheManager.saveToCache(resolvedName, basicGuide, this.availableCountries[countryCode].name);
        }
        
        return {
          found: true,
          source: 'basic',
          isActivity: isActivity,
          country: this.availableCountries[countryCode].name,
          countryCode: countryCode,
          originalQuery: searchQuery,
          resolvedName: resolvedName,
          data: basicGuide
        };
      }
      
      // Step 5: Nothing worked - return not found with suggestions
      const suggestions = this.findSimilarLocations(searchQuery, countryCode);
      
      return {
        found: false,
        isActivity: isActivity,
        country: this.availableCountries[countryCode].name,
        countryCode: countryCode,
        originalQuery: searchQuery,
        resolvedName: resolvedName,
        suggestions: suggestions,
        data: null
      };
      
    } catch (error) {
      console.error('Error loading location data:', error);
      return {
        found: false,
        error: error.message
      };
    }
  },
  
  // Find similar locations for suggestions
  findSimilarLocations(searchQuery, countryCode) {
    if (countryCode === 'korea' && typeof koreaLocations !== 'undefined') {
      const normalized = searchQuery.toLowerCase();
      const suggestions = [];
      
      for (const locationName of Object.keys(koreaLocations)) {
        const similarity = this.calculateSimilarity(normalized, locationName);
        if (similarity > 0.4) { // Lower threshold for suggestions
          suggestions.push({
            name: locationName,
            similarity: similarity
          });
        }
      }
      
      // Sort by similarity and return top 3
      return suggestions
        .sort((a, b) => b.similarity - a.similarity)
        .slice(0, 3)
        .map(s => s.name);
    }
    
    return [];
  },
  
  // Main function to get tips for any location (OLD VERSION - replaced above)
  async getTipsForLocation_OLD(searchQuery) {
    try {
      // Detect which country
      const countryCode = this.detectCountry(searchQuery);
      console.log(`Detected country: ${countryCode} for query: "${searchQuery}"`);
      
      // Load country data if not already loaded
      await this.loadCountryData(countryCode);
      
      // Get location data
      const locationData = this.getLocationData(searchQuery, countryCode);
      
      if (locationData && locationData.has_custom_content) {
        return {
          found: true,
          country: this.availableCountries[countryCode].name,
          countryCode: countryCode,
          data: locationData
        };
      } else {
        return {
          found: false,
          country: this.availableCountries[countryCode].name,
          countryCode: countryCode,
          data: null
        };
      }
    } catch (error) {
      console.error('Error loading location data:', error);
      return {
        found: false,
        error: error.message
      };
    }
  },
  
  // Get list of all available countries
  getAvailableCountries() {
    return Object.entries(this.availableCountries).map(([code, data]) => ({
      code: code,
      name: data.name
    }));
  },
  
  // Get statistics about loaded data
  getStats(countryCode) {
    if (countryCode === 'korea' && typeof koreaLocations !== 'undefined') {
      return {
        country: 'South Korea',
        totalLocations: Object.keys(koreaLocations).length,
        locations: Object.keys(koreaLocations)
      };
    }
    // Add stats for other countries as they're added
    return null;
  }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = countryLoader;
}
