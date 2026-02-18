// Custom first-timer tips for locations you know well
// When a location is searched, the system checks here first
// If found, your custom tips are displayed. If not, auto-generated content is shown.

const customTips = {
  "N Seoul Tower": {
    location_id: "seoul-tower",
    display_name: "N Seoul Tower (Namsan Tower)",
    has_custom_content: true,
    
    // Quick facts
    quick_info: {
      best_time: "Sunset (6-8 PM) for amazing views",
      driving_time: "15-30 min from central Seoul",
      parking_fee: "₩2,000-3,000 per hour",
      entry_fee: "₩16,000 (Observatory)"
    },
    
    // Parking details
    parking: [
      {
        name: "Namsan Parking Lot 1 (Main)",
        price: "₩2,400/hour",
        description: "Closest to cable car station. 165 spaces. Gets full on weekends by 2 PM.",
        tip: "Arrive before 11 AM on weekends"
      },
      {
        name: "Namsan Parking Lot 2",
        price: "₩2,000/hour",
        description: "Larger lot, 5-minute walk uphill. Usually has space. 395 spaces available.",
        tip: "Better for weekends"
      },
      {
        name: "Alternative: Myeongdong Parking",
        price: "₩3,000/hour",
        description: "Park in Myeongdong, take cable car up (₩11,000 round trip). More scenic!",
        tip: "Best for first-timers"
      }
    ],
    
    // First-timer tips (the gold!)
    first_timer_tips: [
      {
        title: "Don't panic about the winding road!",
        content: "The road up Namsan is curvy with tight turns, but it's well-marked and wide enough. Drive slowly (30-40 km/h) and you'll be fine. Locals drive it daily."
      },
      {
        title: "The parking lot looks full? It's not.",
        content: "Cars cycle through quickly. Wait 5-10 minutes and spots open up. Attendants will guide you."
      },
      {
        title: "Bring a light jacket!",
        content: "It's 3-5°C cooler at the top, even in summer. The observation deck can be windy."
      },
      {
        title: "Sunset is magical but crowded.",
        content: "If you want photos without crowds, go at 4 PM (still good light) or after 9 PM (night city lights)."
      },
      {
        title: "The 'locks of love' fence is before the tower.",
        content: "You'll see it on your walk from parking. Bring a lock if you want to participate!"
      },
      {
        title: "Observation deck tickets sold on-site.",
        content: "No need to buy online. Lines move fast except on weekends 6-8 PM."
      }
    ],
    
    // What to expect timeline
    timeline: [
      {
        title: "Arrival & Parking (10 min)",
        content: "You'll see signs for 'N Seoul Tower Parking' as you ascend. Follow them to Lot 1 or 2. Parking attendants wear orange vests and will direct you. Pay at automated machines before leaving (cash or card)."
      },
      {
        title: "Walk to Tower Base (5-10 min)",
        content: "From parking, it's a gentle uphill walk on a paved path. You'll pass souvenir shops and the famous 'Locks Terrace.' The tower looms above you - it's impressive!"
      },
      {
        title: "Ticket Purchase (5 min)",
        content: "Buy tickets at the ground floor. Staff speak basic English. Point to 'Observatory' on the board. Credit cards accepted. You'll get a timed entry ticket."
      },
      {
        title: "Elevator to Observatory (2 min)",
        content: "High-speed elevator! Your ears might pop slightly. It's enclosed so no scary views on the way up. Groups of 20-30 people per trip."
      },
      {
        title: "Observation Deck (30-60 min)",
        content: "360° views of Seoul. Indoor and outdoor sections. Binoculars available (₩500). Café on this floor. Take your time - it's what you came for!"
      },
      {
        title: "Optional: Digital Observatory",
        content: "One floor up. Interactive screens, photo spots, small gift shop. Fun but not essential if you're short on time."
      }
    ],
    
    // Driving directions from popular areas
    directions: [
      {
        from: "Gangnam",
        time: "~20 minutes",
        route: "Take Olympic Expressway → Exit at Hannam Bridge → Follow Namsan signs"
      },
      {
        from: "Hongdae",
        time: "~25 minutes",
        route: "Take Airport Railroad → Transfer at Seoul Station → Namsan Tunnel"
      },
      {
        from: "Myeongdong",
        time: "~10 minutes",
        route: "Walk or take cable car (recommended!) - very close"
      },
      {
        from: "Itaewon",
        time: "~15 minutes",
        route: "Head north on Itaewon-ro → Follow Namsan signs → Parking lot 2"
      }
    ]
  },
  
  // Template for adding more locations
  // Copy this structure and fill in your experiences!
  /*
  "Location Name": {
    location_id: "unique-id",
    display_name: "Display Name",
    has_custom_content: true,
    
    quick_info: {
      best_time: "",
      driving_time: "",
      parking_fee: "",
      entry_fee: ""
    },
    
    parking: [
      {
        name: "",
        price: "",
        description: "",
        tip: ""
      }
    ],
    
    first_timer_tips: [
      {
        title: "",
        content: ""
      }
    ],
    
    timeline: [
      {
        title: "",
        content: ""
      }
    ],
    
    directions: [
      {
        from: "",
        time: "",
        route: ""
      }
    ]
  }
  */
};

// Function to get custom tips for a location
function getCustomTips(locationName) {
  // Normalize the location name (case-insensitive matching)
  const normalizedSearch = locationName.toLowerCase().trim();
  
  for (const [key, value] of Object.entries(customTips)) {
    if (key.toLowerCase().includes(normalizedSearch) || 
        normalizedSearch.includes(key.toLowerCase())) {
      return value;
    }
  }
  
  return null; // No custom tips found
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { customTips, getCustomTips };
}
