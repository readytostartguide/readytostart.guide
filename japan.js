// Japan Travel Data - First-Timer Tips for Locations in Japan
// Part of ReadyToStart.guide platform

const japanLocations = {
  "Tokyo Tower": {
    location_id: "tokyo-tower",
    location_name: "Tokyo Tower",
    display_name: "Tokyo Tower",
    country: "Japan",
    city: "Tokyo",
    coordinates: { lat: 35.6586, lng: 139.7454 },
    has_custom_content: true,
    generated_by: "manual",
    
    quick_info: {
      best_time: "Weekday mornings (9-11 AM) or after 8 PM for night views",
      driving_time: "15 min from Tokyo Station, but subway recommended",
      parking_fee: "¥600/hour at nearby lots (¥3,000-4,000 for day)",
      entry_fee: "Main Deck ¥1,200, Top Deck ¥3,000"
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
        content: "Exit Akabanebashi Station and follow red tower signs. Buy tickets at ground floor machines (have English option). Lines move fast - even 20 people ahead means only 10 minutes. Bag check is quick and friendly."
      },
      {
        title: "Main Deck Exploration (30-40 min)",
        content: "Elevator takes 45 seconds to Main Deck (150m up). Walk the full circle for 360° views - takes about 15 minutes. Look for Mount Fuji to the west on clear days. Photo spots are marked. Glass floor section is optional if you're nervous."
      },
      {
        title: "Top Deck Experience (30 min) - Optional",
        content: "If you booked Top Deck, guide takes you up in groups of 20 every 15 minutes. Brief intro in English, then free time to explore 250m level. AR tablets provided. Less crowded and more intimate than Main Deck."
      },
      {
        title: "Shopping & Exit (15-20 min)",
        content: "Gift shop has unique Tokyo Tower merch not sold elsewhere. Bathroom break before leaving recommended. Exit through Foottown for food options. Subway station is same direction you came from."
      }
    ]
  },

  "Mount Fuji": {
    location_id: "mount-fuji",
    location_name: "Mount Fuji",
    display_name: "Mount Fuji (Fuji-san)",
    country: "Japan",
    city: "Yamanashi/Shizuoka",
    coordinates: { lat: 35.3606, lng: 138.7274 },
    has_custom_content: true,
    generated_by: "manual",
    
    quick_info: {
      best_time: "July-August for climbing, May or October for viewing (clearer skies)",
      driving_time: "2 hours from Tokyo to Fuji Five Lakes area",
      parking_fee: "¥1,000 at 5th Station during climbing season, free off-season",
      entry_fee: "¥2,000 climbing fee (voluntary but encouraged), viewing areas free"
    },
    
    first_timer_tips: [
      {
        title: "You don't have to climb it to experience it!",
        content: "Many first-timers feel pressured to climb but viewing from Kawaguchiko Lake, Chureito Pagoda, or Hakone is spectacular and stress-free. Save climbing for a return trip when you're prepared. Viewing is just as memorable and way less exhausting."
      },
      {
        title: "The mountain hides behind clouds 70% of the time",
        content: "Early morning (6-9 AM) gives you the best chance of clear views. If you see nothing, don't be disappointed - it's completely normal! Check live cameras at fujigoko.or.jp before making the trip. Winter months (December-February) have the clearest views."
      },
      {
        title: "If you DO climb: Start at night, not during the day",
        content: "Most climbers start 8-10 PM to reach summit for sunrise (4-5 AM). Climbing in hot daytime sun is brutal and dangerous. Headlamp required. Book mountain huts 2 months ahead (¥7,000-10,000 with meals). No hut booking = don't attempt the climb."
      },
      {
        title: "Altitude sickness is REAL even for fit people",
        content: "5th Station is already at 2,300m altitude. Take it slow, drink tons of water (2-3 liters during climb), avoid alcohol the day before. Symptoms: headache, nausea, dizziness. If they don't improve when resting, descend immediately. Portable oxygen sold at stations (¥1,000)."
      },
      {
        title: "Kawaguchiko is the best base for first-timers",
        content: "Stay here for easy access to viewing spots, 5th Station bus (40 min, ¥2,300 round trip), and English-speaking hotels. More tourist-friendly than Gotemba or Fujinomiya sides. Book hotels early - they fill up 3 months ahead for peak season (July-August)."
      },
      {
        title: "Bring layers even in summer - it's freezing at the top",
        content: "5th Station: 10-15°C. Summit: 5-10°C even in August, below freezing at night. Pack windproof jacket, gloves, warm hat. Renting full gear at 5th Station costs ¥10,000+. Better to buy cheap fleece in Tokyo beforehand (Uniqlo has great options)."
      }
    ],
    
    timeline: [
      {
        title: "Planning & Booking (2-3 months before)",
        content: "Decide: climb or view only? Official climbing season is July 1 - September 10 only. Book mountain huts immediately if climbing (they sell out!). Reserve Kawaguchiko hotel. Check fuji-climb.com for current conditions, trail closures, and regulations."
      },
      {
        title: "Getting There (2-3 hours from Tokyo)",
        content: "Train to Kawaguchiko Station (¥4,000, 2 hours) or highway bus from Shinjuku (¥2,800, 2.5 hours). From Kawaguchiko, local bus to 5th Station (reservation required in peak season). Car rental available but parking extremely limited at 5th Station."
      },
      {
        title: "5th Station Visit (1-2 hours if not climbing)",
        content: "Shops, restaurants, observation deck, photo opportunities. Try Fuji-shaped melon bread. Walk short nature trail for different viewing angles. This is as high as most people go and the views are already fantastic. Acclimatize here 1-2 hours before climbing if continuing up."
      },
      {
        title: "Viewing Spots Around Lake (Half to full day)",
        content: "Rent bicycle (¥500/hour) or use Omni Bus red/green line (¥1,500 day pass). Stop at Chureito Pagoda (iconic 5-story pagoda shot), Oshino Hakkai (crystal clear spring ponds), Arakurayama Sengen Park. Each spot needs 30-60 minutes. Bring packed lunch."
      }
    ]
  },

  "Fushimi Inari Shrine": {
    location_id: "fushimi-inari-shrine",
    location_name: "Fushimi Inari Shrine",
    display_name: "Fushimi Inari Shrine",
    country: "Japan",
    city: "Kyoto",
    coordinates: { lat: 34.9671, lng: 135.7727 },
    has_custom_content: true,
    generated_by: "manual",
    
    quick_info: {
      best_time: "Before 8 AM or after 6 PM to avoid crowds, sunrise is magical",
      driving_time: "20 min from Kyoto Station, but train is much easier",
      parking_fee: "¥500-1,000 at nearby private lots, but very limited spaces",
      entry_fee: "Free! (donations welcome at collection boxes)"
    },
    
    first_timer_tips: [
      {
        title: "You DON'T have to hike all the way to the top!",
        content: "The famous torii gate tunnel photos happen in the first 10-15 minutes of walking. Full summit hike is 2-3 hours round trip and pretty exhausting. First section to Yotsutsuji intersection (30-40 min uphill) gives you 80% of the experience plus Kyoto city views. Don't feel pressured to complete the full circuit."
      },
      {
        title: "Go EARLY morning - seriously, this makes or breaks your experience!",
        content: "Shrine gates are open 24/7. Arrive by 7 AM (or even 6 AM in summer) for nearly empty paths and incredible photos without crowds. By 10 AM it's shoulder-to-shoulder tourists and photos become impossible. Early morning is also much cooler in humid summer months. Pack breakfast to eat at a scenic viewpoint."
      },
      {
        title: "Take the JR train, NOT the subway - it's way easier",
        content: "JR Nara Line from Kyoto Station to Inari Station - only 5 minutes, ¥150. Exit the station and the shrine entrance is literally right there across the street - you can't miss the huge torii gate. Subway requires transfers and 10+ minutes more walking. JR Pass works here if you have one."
      },
      {
        title: "Wear GOOD walking shoes - not sandals or fashion sneakers",
        content: "The entire path is uneven stone steps, often steep with no handrails. Summer humidity makes everything slippery. Many tourists turn back early with blisters or twisted ankles from wearing poor footwear. This is a legitimate mountain hike disguised as a tourist site. Trail-style shoes or good sneakers are essential."
      },
      {
        title: "The torii tunnels get progressively smaller and quieter as you climb",
        content: "Most tourists stop after the first dense section of gates. Keep going past the first rest area/junction and you'll have torii gates almost to yourself - the mystical atmosphere increases dramatically. Each level up has different sized gates and unique viewpoints of Kyoto below."
      },
      {
        title: "Bring water and snacks - very limited options after you start climbing",
        content: "Small rest stops at two points sell drinks/snacks but selection is very limited and prices are tourist-level high (¥200+ for water). Bring at least one 500ml water bottle per person. Summer heat and humidity is intense - consider bringing two bottles. No trash cans anywhere (carry all rubbish back down)."
      }
    ],
    
    timeline: [
      {
        title: "Arrival & Lower Shrine Area (15-20 min)",
        content: "JR Inari Station exit leads directly to the main entrance torii gate. Main shrine buildings are immediately on your left - explore these first before starting the hike. Purification fountain ritual (optional but respectful): rinse left hand, right hand, pour water into cupped hand to rinse mouth, rinse left hand again. Watch locals if unsure."
      },
      {
        title: "Famous Torii Gates Section (20-30 min)",
        content: "The iconic dense orange torii tunnel starts right after the main shrine complex. Gates are placed every meter creating that incredible enclosed effect. 90% of tourist photos happen in this section. Move to the side to let faster walkers pass. You'll see small donation gates - you can sponsor your own torii starting at ¥400,000!"
      },
      {
        title: "Climb to First Major Viewpoint (30-40 min uphill)",
        content: "Path splits into two routes - both lead to same place, but right-side route usually has fewer people. Continuous stone steps with some steep sections. Yotsutsuji intersection has a rest area with vending machines, small shrine, and fantastic Kyoto city views. This is the ideal turn-around point for most first-timers - feel accomplished here!"
      },
      {
        title: "Summit Attempt (additional 60-90 min each way) - Optional",
        content: "Only continue if you're comfortable hiking and have plenty of time. Path gets very quiet and peaceful, but gates become more spaced out. Summit itself is somewhat anticlimactic (small shrine, limited views due to surrounding trees). The journey and atmosphere are the reward, not the destination. You can turn back at any point."
      },
      {
        title: "Descent & Neighborhood Exploration (30-45 min down, plus time for area)",
        content: "Coming down is faster but harder on knees - stone steps can be slippery so take your time. Explore small side shrines you might have passed on the way up. Try amazake (sweet rice drink, ¥500) at the tea house near the bottom. Walk into the residential neighborhood for authentic local restaurants away from the tourist zone."
      }
    ]
  }
};

// Make available globally
if (typeof window !== 'undefined') {
  window.japanLocations = japanLocations;
}
