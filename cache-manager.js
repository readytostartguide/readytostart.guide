// Cache Manager for Location Guides
// Stores AI-generated guides locally for instant retrieval and consistency

const cacheManager = {
  // Cache configuration
  cachePrefix: 'readytostart_guide_',
  cacheVersion: 'v1',
  maxCacheAge: 30 * 24 * 60 * 60 * 1000, // 30 days in milliseconds
  
  // Get cache key for a location
  getCacheKey(location, country = 'South Korea') {
    const normalized = `${location}_${country}`
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '_');
    return `${this.cachePrefix}${this.cacheVersion}_${normalized}`;
  },
  
  // Save guide to cache
  saveToCache(location, guideData, country = 'South Korea') {
    try {
      const cacheKey = this.getCacheKey(location, country);
      const cacheEntry = {
        data: guideData,
        cached_at: new Date().toISOString(),
        location: location,
        country: country,
        version: this.cacheVersion
      };
      
      localStorage.setItem(cacheKey, JSON.stringify(cacheEntry));
      console.log(`💾 Cached guide for: ${location}`);
      
      // Update cache index
      this.updateCacheIndex(cacheKey, location, country);
      
      return true;
    } catch (error) {
      console.error('❌ Failed to save to cache:', error);
      return false;
    }
  },
  
  // Get guide from cache
  getFromCache(location, country = 'South Korea') {
    try {
      const cacheKey = this.getCacheKey(location, country);
      const cached = localStorage.getItem(cacheKey);
      
      if (!cached) {
        console.log(`📭 No cache found for: ${location}`);
        return null;
      }
      
      const cacheEntry = JSON.parse(cached);
      
      // Check if cache is still valid
      const cachedTime = new Date(cacheEntry.cached_at).getTime();
      const now = new Date().getTime();
      const age = now - cachedTime;
      
      if (age > this.maxCacheAge) {
        console.log(`⏰ Cache expired for: ${location} (${Math.floor(age / (24*60*60*1000))} days old)`);
        this.removeFromCache(location, country);
        return null;
      }
      
      console.log(`✓ Cache hit for: ${location} (${Math.floor(age / (24*60*60*1000))} days old)`);
      return cacheEntry.data;
      
    } catch (error) {
      console.error('❌ Failed to read from cache:', error);
      return null;
    }
  },
  
  // Remove guide from cache
  removeFromCache(location, country = 'South Korea') {
    try {
      const cacheKey = this.getCacheKey(location, country);
      localStorage.removeItem(cacheKey);
      console.log(`🗑️ Removed cache for: ${location}`);
      
      // Update cache index
      this.removeFromCacheIndex(cacheKey);
      
      return true;
    } catch (error) {
      console.error('❌ Failed to remove from cache:', error);
      return false;
    }
  },
  
  // Clear all cached guides
  clearAllCache() {
    try {
      const keys = this.getAllCacheKeys();
      keys.forEach(key => localStorage.removeItem(key));
      localStorage.removeItem(this.getIndexKey());
      console.log(`🗑️ Cleared ${keys.length} cached guides`);
      return true;
    } catch (error) {
      console.error('❌ Failed to clear cache:', error);
      return false;
    }
  },
  
  // Update cache index (tracks all cached locations)
  updateCacheIndex(cacheKey, location, country) {
    try {
      const indexKey = this.getIndexKey();
      let index = JSON.parse(localStorage.getItem(indexKey) || '{}');
      
      index[cacheKey] = {
        location: location,
        country: country,
        cached_at: new Date().toISOString()
      };
      
      localStorage.setItem(indexKey, JSON.stringify(index));
    } catch (error) {
      console.error('Failed to update cache index:', error);
    }
  },
  
  // Remove from cache index
  removeFromCacheIndex(cacheKey) {
    try {
      const indexKey = this.getIndexKey();
      let index = JSON.parse(localStorage.getItem(indexKey) || '{}');
      delete index[cacheKey];
      localStorage.setItem(indexKey, JSON.stringify(index));
    } catch (error) {
      console.error('Failed to update cache index:', error);
    }
  },
  
  // Get cache index key
  getIndexKey() {
    return `${this.cachePrefix}index`;
  },
  
  // Get all cache keys
  getAllCacheKeys() {
    const keys = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key.startsWith(this.cachePrefix) && !key.endsWith('_index')) {
        keys.push(key);
      }
    }
    return keys;
  },
  
  // Get cache statistics
  getCacheStats() {
    const keys = this.getAllCacheKeys();
    let totalSize = 0;
    let oldestCache = null;
    let newestCache = null;
    
    keys.forEach(key => {
      const item = localStorage.getItem(key);
      if (item) {
        totalSize += item.length;
        const entry = JSON.parse(item);
        const cachedAt = new Date(entry.cached_at);
        
        if (!oldestCache || cachedAt < oldestCache) {
          oldestCache = cachedAt;
        }
        if (!newestCache || cachedAt > newestCache) {
          newestCache = cachedAt;
        }
      }
    });
    
    return {
      totalGuides: keys.length,
      totalSizeKB: (totalSize / 1024).toFixed(2),
      oldestCache: oldestCache ? oldestCache.toISOString() : null,
      newestCache: newestCache ? newestCache.toISOString() : null,
      maxAgedays: this.maxCacheAge / (24 * 60 * 60 * 1000)
    };
  },
  
  // Get list of all cached locations
  getAllCachedLocations() {
    const indexKey = this.getIndexKey();
    const index = JSON.parse(localStorage.getItem(indexKey) || '{}');
    return Object.values(index);
  },
  
  // Check if location is cached
  isCached(location, country = 'South Korea') {
    const cached = this.getFromCache(location, country);
    return cached !== null;
  },
  
  // Refresh cache for a location (mark as needing update)
  markForRefresh(location, country = 'South Korea') {
    const cached = this.getFromCache(location, country);
    if (cached) {
      cached.needs_refresh = true;
      this.saveToCache(location, cached, country);
      console.log(`🔄 Marked for refresh: ${location}`);
    }
  }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = cacheManager;
}
