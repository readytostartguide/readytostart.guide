// Country Data Loader
// Intelligently detects which country data to load based on search query

const countryLoader = {
  // Available country data files
  availableCountries: {
    'korea': {
      name: 'South Korea',
      script: 'korea.js',
      keywords: ['korea', 'seoul', 'busan', 'jeju', 'korean', 'gangnam', 'myeongdong', 'dmz', 'hanok'],
      cities: ['seoul', 'busan', 'incheon', 'daegu', 'daejeon', 'gwangju', 'ulsan', 'jeju']
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
    
    // Default to Korea for now (since it's the only one available)
    return 'korea';
  },
  
  // Load the appropriate country data file
  async loadCountryData(countryCode) {
    const countryInfo = this.availableCountries[countryCode];
    
    if (!countryInfo) {
      console.error(`Country code '${countryCode}' not found`);
      return null;
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
    // Call the appropriate country's getter function
    switch(countryCode) {
      case 'korea':
        return typeof getKoreaLocation === 'function' ? getKoreaLocation(searchQuery) : null;
      // Future countries:
      // case 'japan':
      //   return typeof getJapanLocation === 'function' ? getJapanLocation(searchQuery) : null;
      // case 'thailand':
      //   return typeof getThailandLocation === 'function' ? getThailandLocation(searchQuery) : null;
      default:
        return null;
    }
  },
  
  // Main function to get tips for any location
  async getTipsForLocation(searchQuery) {
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
