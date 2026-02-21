// International Places - First-Timer Guides
// Hand-crafted guides for popular worldwide destinations

const internationalPlaces = {
  "Tokyo Tower": {
    location_id: "tokyo-tower",
    location_name: "Tokyo Tower",
    display_name: "Tokyo Tower, Japan",
    country: "Japan",
    has_custom_content: true,
    generated_by: "manual",
    
    coordinates: {
      lat: 35.6586,
      lng: 139.7454
    },
    
    quick_info: {
      best_time: "Weekday mornings (9-11 AM) or after 8 PM for night views",
      driving_time: "15 min from Tokyo Station, but subway recommended",
      parking_fee: "¥600/hour at nearby lots (¥3,000-4,000 for day)",
      entry_fee: "Main Deck ¥1,200, Top Deck ¥3,000 (book online for discount)"
    },
    
    first_timer_tips: [
      {
        title: "Don't panic about the subway - it's easier than you think!",
        content: "Take the Oedo Line to Akabanebashi Station (Exit 1) - it's only a 5-minute walk and signs are in English. The subway is clean, safe, and locals are helpful if you look lost. Download Google Maps offline before you go."
      },
      {
        title: "Book Top Deck tickets online 2-3 days ahead",
        content: "Top Deck tours sell out fast, especially on weekends. Book at tokyo-tower.co.jp for ¥500 discount. Main Deck is walk-up friendly but can have 30-60 min waits after 5 PM on clear days."
      },
      {
        title: "Visit at sunset for the best of both worlds",
        content: "Arrive at 4:30 PM to see Tokyo in daylight, then stay for the night view transformation around 6 PM. The city lights up gradually and it's magical. Budget 90 minutes total visit time."
      },
      {
        title: "The tower looks taller in person - don't worry about heights!",
        content: "If you're nervous about heights, the Main Deck has solid walls (not just glass) and feels very secure. Start there before deciding on Top Deck. Many anxious visitors feel completely fine once inside."
      },
      {
        title: "Bring a light jacket even in summer",
        content: "Observatory can be 5-10°C cooler than ground level due to air conditioning and altitude. Evening visits especially can feel chilly. Lockers available if you're carrying bags (¥300)."
      },
      {
        title: "Food court in the basement is tourist-friendly with pictures",
        content: "Foottown building has affordable restaurants with picture menus - perfect for first-timers nervous about ordering in Japanese. Expect ¥800-1,500 per person. English-speaking staff available."
      }
    ],
    
    timeline: [
      {
        title: "Arrival & Entry (15-20 min)",
        content: "Exit Akabanebashi Station and follow red tower signs. Buy tickets at ground floor (machines have English). Lines move fast - even 20 people ahead means only 10 minutes. Bag check is quick and friendly."
      },
      {
        title: "Main Deck Exploration (30-40 min)",
        content: "Elevator takes 45 seconds to Main Deck (150m up). Walk the full circle for 360° views - takes about 15 minutes. Look for Mount Fuji to the west on clear days. Photo spots are marked. Glass floor section is optional."
      },
      {
        title: "Top Deck Experience (30 min) - Optional",
        content: "If you booked Top Deck, guide takes you up in groups of 20 every 15 minutes. Brief intro in English, then free time to explore 250m level. AR tablets provided. Less crowded and more intimate than Main Deck."
      },
      {
        title: "Shopping & Exit (15-20 min)",
        content: "Gift shop has unique Tokyo Tower merch not sold elsewhere. Bathroom break before leaving recommended. Exit through Foottown for food options. Subway station is same direction you came from."
      }
    ],
    
    practical_details: {
      address: "4-2-8 Shibakoen, Minato City, Tokyo 105-0011",
      best_season: "October-November (clear autumn skies) or March-April (cherry blossoms visible)",
      typical_duration: "1.5-2 hours for Main Deck, add 45 min if doing Top Deck",
      difficulty_level: "Easy - fully accessible, elevators throughout",
      family_friendly: true,
      accessibility_notes: "Wheelchair accessible. Elevator to all floors. Accessible restrooms on each level."
    }
  },

  "Mount Fuji": {
    location_id: "mount-fuji",
    location_name: "Mount Fuji",
    display_name: "Mount Fuji, Japan", 
    country: "Japan",
    has_custom_content: true,
    generated_by: "manual",
    
    coordinates: {
      lat: 35.3606,
      lng: 138.7274
    },
    
    quick_info: {
      best_time: "July-August for climbing, May or October for viewing (clearer skies)",
      driving_time: "2 hours from Tokyo to Fuji Five Lakes area",
      parking_fee: "¥1,000 at 5th Station during climbing season, free off-season",
      entry_fee: "¥2,000 climbing fee (voluntary but encouraged), viewing areas free"
    },
    
    first_timer_tips: [
      {
        title: "You don't have to climb it to experience it!",
        content: "Many first-timers feel pressured to climb but viewing from Kawaguchiko Lake, Chureito Pagoda, or Hakone is spectacular and stress-free. Save climbing for a return trip when you're prepared. Viewing is just as memorable."
      },
      {
        title: "The mountain hides behind clouds 70% of the time",
        content: "Early morning (6-9 AM) gives you the best chance of clear views. If you see nothing, don't be disappointed - it's normal! Check live cameras at fujigoko.or.jp before making the trip. Winter has clearest views."
      },
      {
        title: "If you DO climb: Start at night, not during the day",
        content: "Most climbers start 8-10 PM to reach summit for sunrise (4-5 AM). Climbing in hot daytime sun is brutal. Headlamp required. Book mountain huts 2 months ahead (¥7,000-10,000 with meals). No hut = no climb advice."
      },
      {
        title: "Altitude sickness is REAL even for fit people",
        content: "5th Station is already at 2,300m. Take it slow, drink tons of water, avoid alcohol the day before. Symptoms: headache, nausea, dizziness. If they don't improve when resting, descend immediately. Portable oxygen sold at stations."
      },
      {
        title: "Kawaguchiko is the best base for first-timers",
        content: "Stay here for easy access to views, 5th Station bus (40 min, ¥2,300), and English-speaking hotels. More tourist-friendly than Gotemba or Fujinomiya sides. Book early - hotels fill 3 months ahead for peak season."
      },
      {
        title: "Bring layers even in summer - it's freezing at the top",
        content: "5th Station: 10-15°C. Summit: 5-10°C even in August, below freezing at night. Pack windproof jacket, gloves, warm hat. Renting gear at 5th Station costs ¥10,000+ for full set. Buy cheap fleece in Tokyo if needed."
      }
    ],
    
    timeline: [
      {
        title: "Planning & Booking (2-3 months before)",
        content: "Decide: climb or view? Climbing season July 1-Sep 10 only. Book mountain huts immediately if climbing. Reserve Kawaguchiko hotel. Check fuji-climb.com for current conditions and regulations."
      },
      {
        title: "Getting There (2-3 hours from Tokyo)",
        content: "Train to Kawaguchiko Station (¥4,000, 2 hours) or bus from Shinjuku (¥2,800, 2.5 hours). From Kawaguchiko, local bus to 5th Station (reserve required in peak season). Car rental available but parking very limited."
      },
      {
        title: "5th Station Visit (1-2 hours if not climbing)",
        content: "Shops, restaurants, photo ops. Try Fuji-shaped bread. Walk short trail for different angles. This is as high as most people go and the views are fantastic. Acclimatize here before climbing if you're continuing up."
      },
      {
        title: "Viewing Spots Around Lake (Half to full day)",
        content: "Rent bicycle (¥500/hr) or use Omni Bus (¥1,500 day pass). Stop at Chureito Pagoda (iconic shot with cherry blossoms or fall colors), Oshino Hakkai (clear ponds), Arakurayama Sengen Park. Each spot 30-60 min."
      }
    ],
    
    practical_details: {
      address: "Fuji Five Lakes area, Yamanashi Prefecture (Kawaguchiko is main hub)",
      best_season: "May for cherry blossoms, July-Aug for climbing, Oct for fall colors, Dec-Feb for snow views",
      typical_duration: "Full day trip from Tokyo or 2-3 day stay in area",
      difficulty_level: "Easy for viewing, Challenging for climbing (8-10 hours up, 3-5 down)",
      family_friendly: true,
      accessibility_notes: "Viewing spots mostly accessible. 5th Station has wheelchair access. Climbing not accessible."
    }
  },

  "Fushimi Inari Shrine": {
    location_id: "fushimi-inari-shrine",
    location_name: "Fushimi Inari Shrine",
    display_name: "Fushimi Inari Shrine, Kyoto",
    country: "Japan",
    has_custom_content: true,
    generated_by: "manual",
    
    coordinates: {
      lat: 34.9671,
      lng: 135.7727
    },
    
    quick_info: {
      best_time: "Before 8 AM or after 6 PM to avoid crowds, sunrise is magical",
      driving_time: "20 min from Kyoto Station, but train is much easier",
      parking_fee: "¥500-1,000 nearby lots, but very limited",
      entry_fee: "Free! (donations welcome)"
    },
    
    first_timer_tips: [
      {
        title: "You DON'T have to hike all the way to the top!",
        content: "The famous torii gate tunnel photos happen in the first 10-15 minutes. Full summit hike is 2-3 hours round trip and exhausting. First section to Yotsutsuji intersection (30-40 min up) gives you 80% of the experience with Kyoto views. Don't feel pressured to do it all."
      },
      {
        title: "Go EARLY morning - seriously, this matters!",
        content: "Gates are open 24/7. Arrive by 7 AM (or even 6 AM) for nearly empty paths and incredible photos. By 10 AM it's shoulder-to-shoulder crowds and photos become impossible. Early morning also cooler in summer. Pack breakfast to eat at a viewpoint."
      },
      {
        title: "Take the JR train, NOT the subway - it's way easier",
        content: "JR Nara Line from Kyoto Station to Inari Station - only 5 minutes, ¥150. Exit station and shrine is right there - you can't miss it. Subway requires transfer and more walking. JR Pass works here if you have one."
      },
      {
        title: "Wear GOOD walking shoes - not sandals or fashion sneakers",
        content: "The path is stone steps, often uneven and steep. Humidity makes everything slippery. Many people turn back with blisters or twisted ankles from poor shoes. This is a mountain hike disguised as a tourist site. Trail-like shoes ideal."
      },
      {
        title: "The tunnels get progressively smaller and quieter as you climb",
        content: "Most tourists stop after the first few gates. Keep going past the first junction and you'll have gates almost to yourself. The mystical atmosphere increases the higher you go. Each level has different gate sizes and views."
      },
      {
        title: "Bring water and snacks - vending machines only at the bottom",
        content: "Small shops at two rest points but selection limited and prices high. One 500ml water bottle minimum per person. Summer heat is intense - consider 2 bottles. No trash cans (take rubbish with you)."
      }
    ],
    
    timeline: [
      {
        title: "Arrival & Lower Shrine (15-20 min)",
        content: "JR Inari Station exit leads directly to entrance. Main shrine buildings immediately on your left - explore these first. Purification fountain ritual: rinse left hand, right hand, pour water into hand to rinse mouth, rinse left hand again. Optional but respectful."
      },
      {
        title: "First Torii Gates Section (20-30 min)",
        content: "Famous dense torii tunnel starts after main shrine. Orange gates every meter create incredible effect. Tourist photos mostly happen here. Move to the side to let others pass. Small donation gates let you sponsor your own torii (¥400,000-1,000,000!)."
      },
      {
        title: "Climb to First Viewpoint (30-40 min up)",
        content: "Path splits - both routes lead same place, right side usually less crowded. Stone steps, no handrails in places. Yotsutsuji intersection has rest area and Kyoto city views. This is good turn-around point for most first-timers. Feel accomplished here!"
      },
      {
        title: "Summit Attempt (additional 60-90 min) - Optional",
        content: "Only do this if you're comfortable hiking and have time. Path gets very quiet, gates more spaced out. Summit is anticlimactic (small shrine, limited views due to trees). The journey is the reward, not the destination. Can turn back anytime."
      },
      {
        title: "Descent & Exploration (30-45 min down)",
        content: "Coming down is faster but harder on knees. Stone steps are slippery - go slow. Explore side shrines you passed coming up. Try amazake (sweet rice drink) at bottom tea house. Visit neighborhood for authentic lunch away from tourist zone."
      }
    ],
    
    practical_details: {
      address: "68 Fukakusa Yabunouchicho, Fushimi Ward, Kyoto, 612-0882",
      best_season: "Spring (March-April) or Fall (November) for pleasant temps, winter for fewer crowds",
      typical_duration: "2-3 hours including hike to first viewpoint and exploration",
      difficulty_level: "Moderate - continuous stone steps, humid in summer, slippery when wet",
      family_friendly: true,
      accessibility_notes: "First section accessible. Beyond that, many steps make wheelchairs impossible. Strollers very difficult."
    }
  }
};

// Export for use
if (typeof module !== 'undefined' && module.exports) {
  module.exports = internationalPlaces;
}
