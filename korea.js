// Korea Travel Data - First-Timer Tips for Locations in South Korea
// Part of ReadyToStart.guide platform

const koreaLocations = {
  "N Seoul Tower": {
    location_id: "seoul-tower",
    display_name: "N Seoul Tower (Namsan Tower)",
    country: "South Korea",
    city: "Seoul",
    coordinates: { lat: 37.5512, lng: 126.9882 },
    has_custom_content: true,
    
    quick_info: {
      best_time: "Sunset (6-8 PM) for amazing views",
      driving_time: "15-30 min from central Seoul",
      parking_fee: "₩2,000-3,000 per hour",
      entry_fee: "₩16,000 (Observatory)"
    },
    
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

  "Gangnam": {
    location_id: "gangnam-district",
    display_name: "Gangnam District",
    country: "South Korea",
    city: "Seoul",
    coordinates: { lat: 37.4979, lng: 127.0276 },
    has_custom_content: true,
    
    quick_info: {
      best_time: "Evenings (6-10 PM) for nightlife, early afternoon for shopping",
      driving_time: "Varies by area - use subway instead!",
      parking_fee: "₩3,000-5,000 per hour (expensive!)",
      entry_fee: "Free (district)"
    },
    
    first_timer_tips: [
      {
        title: "Don't drive - parking is a nightmare",
        content: "Gangnam has Seoul's highest parking fees and limited spaces. Use Gangnam Station (Line 2) Exit 10 or 11 - you're right in the heart of everything."
      },
      {
        title: "It's HUGE - pick your area first",
        content: "Gangnam isn't one place. Apgujeong for luxury shopping, COEX for malls, Gangnam Station for nightlife, Cheongdam for celebrity spotting. Don't try to see it all in one day."
      },
      {
        title: "Weekday evenings are just as crowded as weekends",
        content: "Gangnam Station exits 10 and 11 are meeting points for half of Seoul. Friday and Saturday nights are nearly impossible to walk through."
      },
      {
        title: "English is more common here",
        content: "International businesses and expats make Gangnam one of the most English-friendly areas. Don't worry if your Korean is limited."
      },
      {
        title: "The Gangnam Style statue is tiny",
        content: "It's near exit 5 of Gangnam Station but it's literally just hands on the ground. Quick photo op, then move on. Don't make it your main destination."
      }
    ]
  },

  "Myeongdong": {
    location_id: "myeongdong-shopping",
    display_name: "Myeongdong Shopping Street",
    country: "South Korea",
    city: "Seoul",
    coordinates: { lat: 37.5636, lng: 126.9851 },
    has_custom_content: true,
    
    quick_info: {
      best_time: "4-7 PM (shops open, street food starts, not peak crowd yet)",
      driving_time: "Don't drive! Take subway",
      parking_fee: "₩4,000+ per hour (very expensive)",
      entry_fee: "Free (pedestrian zone)"
    },
    
    first_timer_tips: [
      {
        title: "Arrive at 4-5 PM for the sweet spot",
        content: "Stores open at 11 AM but street food vendors don't set up until 5 PM. Come at 4-5 PM: shops are open, food is starting, crowds haven't peaked yet."
      },
      {
        title: "Tuesday after holidays is EMPTY",
        content: "Everyone's back at work. Myeongdong is surprisingly quiet. Best shopping days are random weekday mornings or Tuesdays after Korean holidays."
      },
      {
        title: "Underground passages are heated in winter",
        content: "If it's freezing, duck into Myeongdong Underground Shopping Center. Same products, cheaper prices, and you won't lose feeling in your fingers."
      },
      {
        title: "Street food is 30-50% more expensive here",
        content: "It's good but overpriced. Budget ₩50,000-100,000 for shopping plus snacks. Focus on K-beauty products - that's where Myeongdong shines."
      },
      {
        title: "Shinsegae basement food court is the secret",
        content: "Real Korean food, reasonable prices, no street food chaos. Locals eat lunch there after morning shopping. It's like a museum of luxury food."
      },
      {
        title: "Friday and Saturday nights = gridlock",
        content: "After 8 PM on weekends, you can't walk. Literally shoulder-to-shoulder crowds. If you must go in evening, choose a weekday."
      }
    ]
  },

  "Hongdae": {
    location_id: "hongdae-area",
    display_name: "Hongdae (Hongik University Area)",
    country: "South Korea",
    city: "Seoul",
    coordinates: { lat: 37.5565, lng: 126.9239 },
    has_custom_content: true,
    
    quick_info: {
      best_time: "Evening (8 PM-midnight) for nightlife, afternoon for cafes",
      driving_time: "20-30 min from central Seoul",
      parking_fee: "₩2,000-3,000 per hour",
      entry_fee: "Free (neighborhood)"
    },
    
    first_timer_tips: [
      {
        title: "Hongdae is for YOUNG crowds",
        content: "University students, street performers, indie music, quirky cafes. If you're 30+, you might feel out of place at night. Come for the unique atmosphere anyway!"
      },
      {
        title: "The real Hongdae is in the back alleys",
        content: "Main streets are chain stores. Walk into the maze of side streets - that's where you find vintage shops, indie boutiques, themed cafes, and street art."
      },
      {
        title: "Free street performances every weekend",
        content: "Hongdae Playground (near exit 9) has live music, dance crews, and performers every Saturday and Sunday afternoon. Completely free entertainment."
      },
      {
        title: "Don't confuse Hongdae with Gangnam",
        content: "Gangnam is luxury and status. Hongdae is artsy and alternative. Completely different vibes. Choose based on your mood."
      },
      {
        title: "Best fried chicken is in the side streets",
        content: "Forget the famous chains. Small shops in back alleys serve better chicken at half the price. Follow the locals."
      }
    ]
  },

  "COEX Mall": {
    location_id: "coex-mall",
    display_name: "COEX Mall & Starfield Library",
    country: "South Korea",
    city: "Seoul",
    coordinates: { lat: 37.5115, lng: 127.0595 },
    has_custom_content: true,
    
    quick_info: {
      best_time: "Weekday afternoons (2-5 PM) to avoid weekend crowds",
      driving_time: "15-20 min from central Seoul",
      parking_fee: "First 2 hours free with purchase",
      entry_fee: "Free"
    },
    
    first_timer_tips: [
      {
        title: "The library is more crowded than you think",
        content: "Starfield Library is Instagram-famous. Weekends have lines just to take photos. Come on weekday mornings for actual browsing."
      },
      {
        title: "It's underground - bring a map or use Naver Map",
        content: "COEX is HUGE and completely underground. You WILL get lost. Download the COEX app or use Naver Map inside. Even locals get confused."
      },
      {
        title: "The aquarium is worth it if you have kids",
        content: "COEX Aquarium is one of Seoul's largest. Takes about 90 minutes. Buy tickets online (23% discount). Best visited Monday-Wednesday when it's quieter."
      },
      {
        title: "Food court vs. restaurants - big price difference",
        content: "Underground food court is budget-friendly (₩8,000-12,000). Street-level restaurants are 2-3x more expensive. Same food quality."
      },
      {
        title: "Connected to Bongeunsa Temple",
        content: "Walk 5 minutes from COEX to find a peaceful 1,200-year-old Buddhist temple. Perfect contrast to the mega-mall chaos."
      }
    ]
  },

  "Dongdaemun Design Plaza": {
    location_id: "ddp-plaza",
    display_name: "Dongdaemun Design Plaza (DDP)",
    country: "South Korea",
    city: "Seoul",
    coordinates: { lat: 37.5677, lng: 127.0086 },
    has_custom_content: true,
    
    quick_info: {
      best_time: "Evening (7-10 PM) when it's beautifully lit",
      driving_time: "15-20 min from central Seoul",
      parking_fee: "₩2,000 per hour",
      entry_fee: "Free (exhibitions vary)"
    },
    
    first_timer_tips: [
      {
        title: "It's more beautiful at night than during the day",
        content: "The LED rose garden and illuminated architecture are stunning after dark. Come at sunset (around 6-7 PM) to see both day and night views."
      },
      {
        title: "Dongdaemun Market ≠ DDP",
        content: "They're next to each other but different experiences. DDP is modern architecture and design. The markets are wholesale clothing chaos. Visit both!"
      },
      {
        title: "The building design is polarizing",
        content: "Zaha Hadid's spaceship-looking structure. Koreans either love it or hate it. No middle ground. It's definitely unique!"
      },
      {
        title: "Free exhibitions rotate monthly",
        content: "Check the DDP website for current exhibitions. Some are free, some cost ₩5,000-10,000. Design and fashion focused."
      },
      {
        title: "Wear comfortable shoes",
        content: "The interior has long ramps (no stairs). If you explore fully plus the surrounding markets, you'll walk 2-3 km easily."
      }
    ]
  },

  "Bukchon Hanok Village": {
    location_id: "bukchon-hanok",
    display_name: "Bukchon Hanok Village",
    country: "South Korea",
    city: "Seoul",
    coordinates: { lat: 37.5826, lng: 126.9839 },
    has_custom_content: true,
    
    quick_info: {
      best_time: "Early morning (8-10 AM) or weekday afternoons",
      driving_time: "Not recommended - narrow streets",
      parking_fee: "No parking in village - use nearby lots",
      entry_fee: "Free (outdoor village)"
    },
    
    first_timer_tips: [
      {
        title: "These are REAL HOMES - be respectful!",
        content: "Tourists forget this is a residential area. Keep noise down, don't peek in windows, stay on marked paths. Residents have been complaining about tourist behavior."
      },
      {
        title: "Visit before 10 AM to avoid tour groups",
        content: "After 10 AM, Chinese tour groups arrive in waves. Early morning is peaceful, perfect for photos, and you can actually hear the traditional architecture."
      },
      {
        title: "Hanbok rental shops are EVERYWHERE",
        content: "Renting traditional Korean clothing (₩15,000-30,000 for 2-4 hours) makes photos more fun. Book ahead on weekends or just walk in on weekdays."
      },
      {
        title: "The hills are NO JOKE",
        content: "Bukchon means 'north village' - it's built on a hillside. Wear comfortable walking shoes. If you rent hanbok, you'll be climbing hills in traditional shoes!"
      },
      {
        title: "Viewpoint 8 is overrated",
        content: "Everyone crowds here for 'THE photo.' Viewpoints 4 and 6 are less crowded with equally beautiful views. Explore beyond the main spots."
      }
    ]
  },

  "Insadong": {
    location_id: "insadong-street",
    display_name: "Insadong Traditional Street",
    country: "South Korea",
    city: "Seoul",
    coordinates: { lat: 37.5746, lng: 126.9857 },
    has_custom_content: true,
    
    quick_info: {
      best_time: "Weekday afternoons (2-5 PM) for browsing",
      driving_time: "20 min from central Seoul (but don't drive)",
      parking_fee: "₩3,000+ per hour",
      entry_fee: "Free (street)"
    },
    
    first_timer_tips: [
      {
        title: "Haggling is expected (but subtle)",
        content: "Unlike China or Southeast Asia, don't aggressively bargain. Ask politely 'Is there a discount for cash?' or 'If I buy two?' Most vendors will offer 10-15% off."
      },
      {
        title: "Ssamziegil is the hidden gem",
        content: "4-story spiral mall with indie artists, craft shops, and rooftop garden. Way more interesting than the main street. Don't miss it!"
      },
      {
        title: "Sunday is car-free - best day to visit",
        content: "Every Sunday 10 AM-10 PM, Insadong becomes pedestrian-only. Street performers, food stalls, relaxed atmosphere. Totally different vibe."
      },
      {
        title: "Traditional tea houses > Starbucks",
        content: "Skip the chains. Traditional tea houses on side streets serve proper Korean tea with hanok atmosphere. Osulloc Tea House is tourist-friendly but authentic."
      },
      {
        title: "Most 'antiques' are reproductions",
        content: "Real antiques are expensive and rare. The ceramics, calligraphy, and woodwork sold here are beautiful reproductions. Buy because you like them, not for investment."
      }
    ]
  },

  "Gyeongbokgung Palace": {
    location_id: "gyeongbokgung-palace",
    display_name: "Gyeongbokgung Palace",
    country: "South Korea",
    city: "Seoul",
    coordinates: { lat: 37.5796, lng: 126.9770 },
    has_custom_content: true,
    
    quick_info: {
      best_time: "Weekdays at 10 AM (after opening rush, before lunch crowds)",
      driving_time: "20-25 min from Gangnam",
      parking_fee: "₩2,000 per hour at nearby lots",
      entry_fee: "₩3,000 (FREE if wearing hanbok!)"
    },
    
    first_timer_tips: [
      {
        title: "Wear hanbok = free entry + skip lines!",
        content: "Rent hanbok nearby (₩15,000-25,000) and enter palace FREE. You also skip ticket lines. Rental shops are 5-10 min walk from palace entrance."
      },
      {
        title: "Changing of the Guard is at specific times",
        content: "Shows at 10 AM and 2 PM (closed Tuesdays). Arrive 10-15 min early for good viewing spot. It's 20 minutes of ceremony - traditional music, colorful costumes."
      },
      {
        title: "The palace is MASSIVE - budget 2-3 hours",
        content: "Don't rush. There are 300+ buildings (40+ restored). Pick up a map at entrance. Must-sees: Geunjeongjeon (throne hall), Gyeonghoeru (banquet pavilion), Hyangwonjeong (pond pavilion)."
      },
      {
        title: "English tours are free!",
        content: "Free English tours at 10 AM, 11 AM, 1:30 PM, and 3:30 PM. Meet at info center inside. Guides explain history and point out details you'd miss alone."
      },
      {
        title: "Come on weekdays if possible",
        content: "Weekends = sea of hanbok-wearing tourists. Weekdays are 50% less crowded. Cherry blossom season (early April) and fall colors (late October) are beautiful but packed."
      },
      {
        title: "National Palace Museum is included",
        content: "Inside palace grounds. Shows royal artifacts, explains palace history. Air-conditioned break from walking. Takes 30-45 minutes."
      }
    ]
  },

  "Changdeokgung Palace": {
    location_id: "changdeokgung-palace",
    display_name: "Changdeokgung Palace & Secret Garden",
    country: "South Korea",
    city: "Seoul",
    coordinates: { lat: 37.5794, lng: 126.9910 },
    has_custom_content: true,
    
    quick_info: {
      best_time: "Spring (April) or Fall (October) for garden beauty",
      driving_time: "25 min from Gangnam",
      parking_fee: "₩2,000-3,000 per hour nearby",
      entry_fee: "₩3,000 (palace) + ₩5,000 (Secret Garden)"
    },
    
    first_timer_tips: [
      {
        title: "Secret Garden requires a guided tour - book ahead!",
        content: "You CANNOT enter Secret Garden independently. Must join a tour (English tours at specific times). Reserve online at least 2-3 days ahead, especially for weekends."
      },
      {
        title: "This is the 'better' palace for nature lovers",
        content: "Gyeongbokgung is grander, but Changdeokgung has the beautiful Secret Garden (Huwon). If you can only see one palace and love nature, choose this one."
      },
      {
        title: "The tour is strictly timed",
        content: "Secret Garden tour is 90 minutes. Guide keeps moving. No wandering off or lingering. Wear comfortable shoes - lots of walking on uneven paths."
      },
      {
        title: "Fall foliage here is Instagram-famous",
        content: "Late October to early November. The maple trees and ginkgos in Secret Garden are spectacular. Book tour 1-2 weeks ahead during this time."
      },
      {
        title: "Combination tickets save money",
        content: "₩10,000 combo ticket covers 4 palaces (Gyeongbokgung, Changdeokgung, Changgyeonggung, Deoksugung) for 3 months. Worth it if seeing 2+ palaces."
      }
    ]
  },

  "Lotte World": {
    location_id: "lotte-world-adventure",
    display_name: "Lotte World Tower & Amusement Park",
    country: "South Korea",
    city: "Seoul",
    coordinates: { lat: 37.5111, lng: 127.0980 },
    has_custom_content: true,
    
    quick_info: {
      best_time: "Weekdays (crowds 50% less than weekends)",
      driving_time: "30-40 min from central Seoul",
      parking_fee: "₩3,000 first hour, then ₩1,000/30min",
      entry_fee: "₩59,000 (day pass) or ₩27,000 (Seoul Sky only)"
    },
    
    first_timer_tips: [
      {
        title: "Indoor + Outdoor sections - dress in layers",
        content: "Magic Island (outdoor) closes in bad weather. Indoor 'Adventure' section runs year-round. Summer/winter, bring layers for AC/heating transitions."
      },
      {
        title: "Buy tickets online - saves ₩10,000+",
        content: "Online tickets are cheaper AND you skip ticket lines. During peak season, ticket lines can be 30-60 minutes. Buy on Klook or official site."
      },
      {
        title: "Go on a Tuesday or Wednesday",
        content: "Weekends = 2-hour waits for popular rides. Tuesday/Wednesday = 20-30 min waits. School groups visit Fridays. Avoid Korean holidays at all costs."
      },
      {
        title: "Seoul Sky (observation deck) is separate",
        content: "It's in Lotte World Tower, not the amusement park. 123rd floor observation deck. Can visit without park ticket. Sunset is best time (book ahead)."
      },
      {
        title: "The parades are actually worth watching",
        content: "Unlike most Asian theme parks, Lotte's parades are high quality. Check schedule at entrance. Stake out viewing spot 15 min early."
      },
      {
        title: "Food inside is overpriced - eat before",
        content: "Meals are ₩12,000-18,000 inside. Eat at nearby Lotte World Mall food court first. Or bring snacks (allowed in bags)."
      }
    ]
  },

  "Itaewon": {
    location_id: "itaewon-district",
    display_name: "Itaewon International District",
    country: "South Korea",
    city: "Seoul",
    coordinates: { lat: 37.5346, lng: 126.9946 },
    has_custom_content: true,
    
    quick_info: {
      best_time: "Evening (7-11 PM) for dining and nightlife",
      driving_time: "20-25 min from Gangnam",
      parking_fee: "₩3,000-4,000 per hour",
      entry_fee: "Free (neighborhood)"
    },
    
    first_timer_tips: [
      {
        title: "Itaewon is Seoul's international hub",
        content: "Military base nearby created this multicultural area. English is widely spoken. International restaurants, import shops, diverse crowd. Great for homesick expats."
      },
      {
        title: "Main street vs. HBC - very different vibes",
        content: "Main Itaewon street = foreigner bars and kebab shops. Haebangchon (HBC) uphill = hipster cafes, indie shops, art spaces. Explore both."
      },
      {
        title: "Homo Hill is Seoul's LGBTQ+ friendly zone",
        content: "Side street off main area. LGBTQ bars and clubs. Korea isn't very LGBTQ-friendly overall, but this area is welcoming and safe."
      },
      {
        title: "Best international food in Seoul",
        content: "Authentic Mexican, Turkish, Indian, Italian, Middle Eastern. Not fusion - real deal. If you miss non-Korean food, come here."
      },
      {
        title: "Avoid Friday/Saturday nights if you dislike crowds",
        content: "Itaewon's main nightlife area gets packed with soldiers, expats, and tourists on weekends. Overwhelming if you want a chill dinner."
      }
    ]
  },

  "Han River Parks": {
    location_id: "han-river-parks",
    display_name: "Han River Parks (Yeouido/Banpo/Ttukseom)",
    country: "South Korea",
    city: "Seoul",
    coordinates: { lat: 37.5290, lng: 126.9368 },
    has_custom_content: true,
    
    quick_info: {
      best_time: "Late afternoon to evening (sunset picnics)",
      driving_time: "Varies by park - 20-40 min from central Seoul",
      parking_fee: "₩1,000-2,000 per hour",
      entry_fee: "Free"
    },
    
    first_timer_tips: [
      {
        title: "Order delivery TO the park!",
        content: "Koreans order fried chicken, pizza, or Korean food via delivery apps directly to the park. Just find your location on Kakao Map and order. Peak local experience!"
      },
      {
        title: "Banpo Bridge Rainbow Fountain is overrated",
        content: "It's pretty but super crowded. Shows at 8 PM and 9 PM April-October. Arrive 30 min early for decent viewing spot. Or just enjoy from distance."
      },
      {
        title: "Rent bikes at any park - bike paths connect them all",
        content: "₩3,000/hour bike rental. Bike paths go for 40+ km along the river. You can bike from one park to another. Perfect for sunny afternoons."
      },
      {
        title: "Each park has its own vibe",
        content: "Yeouido = office workers, busy. Banpo = families, fountain shows. Ttukseom = younger crowds, water sports. Hangang = quieter, locals."
      },
      {
        title: "Convenience stores inside parks",
        content: "Every major park has CU or GS25. Buy drinks, snacks, instant noodles. Many have seating areas. No need to carry everything from home."
      },
      {
        title: "Summer water activities book fast",
        content: "Kayaking, paddleboarding, banana boats available at some parks May-September. Reserve online - walk-ins often sold out on weekends."
      }
    ]
  },

  "Cheonggyecheon Stream": {
    location_id: "cheonggyecheon-stream",
    display_name: "Cheonggyecheon Stream",
    country: "South Korea",
    city: "Seoul",
    coordinates: { lat: 37.5696, lng: 126.9783 },
    has_custom_content: true,
    
    quick_info: {
      best_time: "Evening (6-9 PM) when it's lit up",
      driving_time: "Not applicable - city center stream",
      parking_fee: "Use nearby buildings ₩3,000+ per hour",
      entry_fee: "Free"
    },
    
    first_timer_tips: [
      {
        title: "It's a 11km walking path - pick your section!",
        content: "You don't walk the entire thing. Start at Cheonggye Plaza (near City Hall) and walk 1-2 km. That's the scenic part. Eastern sections are less interesting."
      },
      {
        title: "Cool escape on hot summer days",
        content: "Stream water and shade make it 5-10°C cooler than street level. Perfect lunch break spot for office workers. Bring a picnic!"
      },
      {
        title: "During lantern festivals, it's magical",
        content: "Seoul Lantern Festival (November) turns the stream into an art installation. Thousands of lanterns, free entry. One of Seoul's best festivals."
      },
      {
        title: "Early morning joggers love this path",
        content: "6-8 AM weekdays, see Seoul's fitness-obsessed office workers jogging before work. If you're a runner, join them!"
      },
      {
        title: "Connect it with palace and market visits",
        content: "Cheonggyecheon connects many attractions: Gyeongbokgung Palace (west end), Dongdaemun (east end), Insadong nearby. Use it to walk between sites."
      }
    ]
  },

  "Gwangjang Market": {
    location_id: "gwangjang-market",
    display_name: "Gwangjang Market",
    country: "South Korea",
    city: "Seoul",
    coordinates: { lat: 37.5701, lng: 127.0099 },
    has_custom_content: true,
    
    quick_info: {
      best_time: "Late afternoon to evening (5-8 PM) for food",
      driving_time: "20-25 min from Gangnam (but take subway)",
      parking_fee: "Very limited - don't drive here",
      entry_fee: "Free (market)"
    },
    
    first_timer_tips: [
      {
        title: "This is THE market for authentic Korean street food",
        content: "Not a tourist trap like some markets. Real locals eat here. Bindaetteok (mung bean pancakes), mayak gimbap (drug roll sushi), yukhoe (raw beef). The real deal."
      },
      {
        title: "Bring cash - most stalls don't take cards",
        content: "ATMs available at market entrances. Budget ₩20,000-30,000 per person for food tasting tour. Portions are small, so try multiple dishes."
      },
      {
        title: "Daytime vs. Evening - completely different",
        content: "Daytime = fabric and vintage clothing vendors. Evening = food stalls open up. Come after 4-5 PM if you're here for the food."
      },
      {
        title: "The ajummas will push food on you",
        content: "Older ladies running stalls are aggressive sellers. It's their style - not rude. Smile and say 'anniyo' (no) if not interested. Or try everything!"
      },
      {
        title: "Netflix made it famous - now it's crowded",
        content: "After appearing in Korean shows, tourist crowds increased. Still authentic, but now you'll hear English and Chinese everywhere. Weekday afternoons are quieter."
      },
      {
        title: "The vintage clothing section is a hidden treasure",
        content: "Upper floor has vintage hanbok, retro clothing, and fabric vendors. If you're into fashion, don't miss it. Bargaining expected here."
      }
    ]
  },

  "Noryangjin Fish Market": {
    location_id: "noryangjin-fish-market",
    display_name: "Noryangjin Fish Market",
    country: "South Korea",
    city: "Seoul",
    coordinates: { lat: 37.5089, lng: 126.9421 },
    has_custom_content: true,
    
    quick_info: {
      best_time: "Early morning (5-7 AM) for fish auction, or lunch time",
      driving_time: "25 min from central Seoul",
      parking_fee: "₩1,000 per hour (cheap!)",
      entry_fee: "Free (market)"
    },
    
    first_timer_tips: [
      {
        title: "Buy fish, take it upstairs to cook - that's how it works",
        content: "Buy live seafood on 1st floor, take it to 2nd floor restaurants to cook (₩5,000-10,000 cooking fee). They'll prepare it however you want - sashimi, grilled, stew."
      },
      {
        title: "Bring a local friend or learn key phrases",
        content: "Vendors speak minimal English. Know what you want or bring a Korean speaker. Prices aren't always posted - ask first to avoid surprises."
      },
      {
        title: "Don't go if you're squeamish",
        content: "Live octopus, eels, fish are everywhere. Gutting and cleaning happens in front of you. It's fresh but graphic. Not for everyone."
      },
      {
        title: "Early morning auction is for serious buyers",
        content: "4-6 AM auction is wholesale for restaurant owners. Tourists can watch from observation area. Fascinating but you're not buying at auction prices."
      },
      {
        title: "Budget more than you expect",
        content: "Live seafood isn't cheap. King crab can be ₩100,000+. Sashimi platters ₩50,000-80,000. Go with 3-4 people to share costs."
      },
      {
        title: "Skip the tourist traps outside",
        content: "Restaurants outside market charge 2-3x more. Buy inside, cook inside. That's the authentic experience."
      }
    ]
  },

  "Namdaemun Market": {
    location_id: "namdaemun-market",
    display_name: "Namdaemun Market",
    country: "South Korea",
    city: "Seoul",
    coordinates: { lat: 37.5601, lng: 126.9772 },
    has_custom_content: true,
    
    quick_info: {
      best_time: "Weekday mornings (9 AM-12 PM) before crowds",
      driving_time: "15-20 min from Gangnam",
      parking_fee: "₩2,000-3,000 per hour nearby",
      entry_fee: "Free (market)"
    },
    
    first_timer_tips: [
      {
        title: "Korea's oldest and largest market - easy to get lost",
        content: "10,000+ stalls spread over several blocks. Grab a map at info center or use Naver Map. Or just wander and embrace the chaos!"
      },
      {
        title: "This is wholesale - haggling is expected",
        content: "Prices aren't fixed. Always ask for a discount, especially if buying multiple items. Phrase: 'Kka-kka-joo-say-yo' (please give me a discount)."
      },
      {
        title: "Best for: ginseng, kitchenware, souvenirs, kids' clothes",
        content: "These are Namdaemun specialties. Ginseng vendors (try before buying), Korean kitchen utensils, affordable souvenirs, inexpensive kids' clothing."
      },
      {
        title: "Street food alley is near Gate 5",
        content: "Hotteok (sweet pancakes) are famous here. ₩1,000-2,000. Also kalguksu (knife-cut noodles) restaurants around the market. Locals' favorite lunch spots."
      },
      {
        title: "Watch your belongings in crowds",
        content: "Namdaemun is safe but crowded. Pickpockets exist (rare but possible). Keep bags zipped and in front of you during peak hours."
      }
    ]
  },

  "Olympic Park": {
    location_id: "olympic-park-seoul",
    display_name: "Olympic Park",
    country: "South Korea",
    city: "Seoul",
    coordinates: { lat: 37.5217, lng: 127.1233 },
    has_custom_content: true,
    
    quick_info: {
      best_time: "Spring (cherry blossoms) or Fall (cosmos fields)",
      driving_time: "35-40 min from central Seoul",
      parking_fee: "₩2,000 first hour, ₩500/30min after",
      entry_fee: "Free"
    },
    
    first_timer_tips: [
      {
        title: "Huge park - rent bikes or take free shuttle bus",
        content: "The park is 1.5 million square meters. Walking it all is exhausting. Rent bikes (₩3,000/hour) at main entrance or take free shuttle bus between main sites."
      },
      {
        title: "Cherry blossom season = PACKED",
        content: "Early April, the cherry blossom path is Instagram-famous. Arrives by 8 AM on weekends or you'll miss parking. Weekdays are manageable."
      },
      {
        title: "Free outdoor concerts in summer",
        content: "June-August, free evening concerts at Mongchontoseong Fortress area. K-pop, classical, indie bands. Bring picnic mats. Check schedule online."
      },
      {
        title: "It's built on 1988 Olympics site",
        content: "Still has Olympic facilities - velodrome, gymnastics arena, swimming pool. Some offer public access. The Peace Gate and Worldpeace Gate are photo spots."
      },
      {
        title: "Cosmos fields in September/October",
        content: "After cherry blossoms, cosmos flowers bloom in fall. Pink and white fields near Mongchontoseong. Less crowded than spring."
      }
    ]
  },

  "Seoul Sky Observatory": {
    location_id: "seoul-sky-tower",
    display_name: "Seoul Sky Observatory (Lotte World Tower)",
    country: "South Korea",
    city: "Seoul",
    coordinates: { lat: 37.5126, lng: 127.1026 },
    has_custom_content: true,
    
    quick_info: {
      best_time: "Sunset (book 1 hour before sunset time)",
      driving_time: "30-40 min from central Seoul",
      parking_fee: "₩3,000 first hour at Lotte World Mall",
      entry_fee: "₩27,000 (adults)"
    },
    
    first_timer_tips: [
      {
        title: "Book online for sunset - sells out weeks ahead",
        content: "Sunset tickets (5-7 PM depending on season) book up 2-3 weeks in advance. Book early or choose morning/afternoon instead."
      },
      {
        title: "Sky elevator is part of the experience",
        content: "Takes 60 seconds to reach 117th floor (500m). Glass walls show the city shrinking below. Ears will pop. Small kids might get scared."
      },
      {
        title: "3 levels to explore - don't rush",
        content: "118th floor (observation), 120th floor (sky bridge), 121-123rd floors (more views + cafe). Budget 90-120 minutes total."
      },
      {
        title: "The glass floor is scary but safe",
        content: "120th floor has glass floor sections. Looks down 500m to the ground. Take off shoes to walk on it. Safe but terrifying!"
      },
      {
        title: "Cafe on top is overpriced but worth one drink",
        content: "Coffee is ₩8,000-10,000 (double normal price) but you can linger. Buy one drink, sit for an hour watching the city. Best value for time."
      },
      {
        title: "Clear days book fast - check weather",
        content: "Pollution or clouds ruin the view. Check Seoul air quality index before booking. Clear days are more expensive and book faster."
      }
    ]
  },

  "Jogyesa Temple": {
    location_id: "jogyesa-temple",
    display_name: "Jogyesa Temple",
    country: "South Korea",
    city: "Seoul",
    coordinates: { lat: 37.5735, lng: 126.9830 },
    has_custom_content: true,
    
    quick_info: {
      best_time: "Early morning (6-8 AM) for chanting ceremony",
      driving_time: "20-25 min from Gangnam (walk from Insadong)",
      parking_fee: "No parking - use nearby lots ₩3,000+",
      entry_fee: "Free (donations welcome)"
    },
    
    first_timer_tips: [
      {
        title: "Korea's main Buddhist temple - right in the city center",
        content: "Unlike other temples on mountains, Jogyesa is in downtown Seoul. 5-minute walk from Insadong. Easy to visit during a city day."
      },
      {
        title: "Buddha's Birthday (May) is spectacular here",
        content: "Lantern Festival in May transforms the temple. Thousands of colorful lanterns. Special ceremonies. Free entry. Come in evening when lit up."
      },
      {
        title: "Free English temple stay information",
        content: "Want to try temple stay? Info center here provides details on temple stay programs nationwide. Staff speak English. Great starting point."
      },
      {
        title: "Respect the dress code and rules",
        content: "No shorts, no tank tops, no loud voices. Remove shoes before entering main hall. Turn off phone. Basic temple etiquette - they're welcoming but it's a place of worship."
      },
      {
        title: "The two ancient trees are over 500 years old",
        content: "White pine and locust tree in courtyard are natural monuments. Locals come to pray under them. Beautiful year-round."
      }
    ]
  },

  "DMZ Tour": {
    location_id: "dmz-tour-meeting",
    display_name: "DMZ Tour Departure (Seoul Meeting Points)",
    country: "South Korea",
    city: "Seoul",
    coordinates: { lat: 37.5665, lng: 126.9780 },
    has_custom_content: true,
    
    quick_info: {
      best_time: "Book 1-2 weeks ahead, any weekday",
      driving_time: "Tours pick up from central Seoul hotels",
      parking_fee: "N/A (bus tour)",
      entry_fee: "₩65,000-150,000 depending on tour"
    },
    
    first_timer_tips: [
      {
        title: "Bring your passport - absolutely required!",
        content: "No passport = no entry to DMZ. Not a copy - actual passport. They check at military checkpoints. Tour operators will tell you 3 times, people still forget."
      },
      {
        title: "JSA (Panmunjom) vs. DMZ tours are different",
        content: "JSA tours go to the actual border buildings (stand in North Korea!). Regular DMZ tours go to viewing points, tunnels. JSA is more restrictive but more intense."
      },
      {
        title: "Dress code is strict for JSA tours",
        content: "No jeans with holes, no shorts, no sandals, no revealing clothing, no shirts with logos/text. They will deny entry. Regular DMZ tours are more relaxed."
      },
      {
        title: "The '3rd Tunnel' is claustrophobic",
        content: "400m walk underground in a tunnel North Korea dug to invade. Low ceilings (many people hit their heads), humid, crowded. Skip if claustrophobic."
      },
      {
        title: "It's a full day - bring snacks and water",
        content: "8-10 hour tour. Lunch usually included but bring water and snacks. Long bus ride (1.5 hours each way). Bathrooms at each stop."
      },
      {
        title: "Photography restrictions are serious",
        content: "You CAN'T photograph in certain areas (military will tell you). At JSA, you can ONLY take photos in designated areas. Breaking rules = confiscated camera."
      }
    ]
  },

  "Namdaemun Gate": {
    location_id: "namdaemun-gate",
    display_name: "Namdaemun Gate (Sungnyemun)",
    country: "South Korea",
    city: "Seoul",
    coordinates: { lat: 37.5604, lng: 126.9756 },
    has_custom_content: true,
    
    quick_info: {
      best_time: "Evening when illuminated, or early morning",
      driving_time: "15-20 min from Gangnam",
      parking_fee: "Nearby lots ₩2,000-3,000 per hour",
      entry_fee: "Free"
    },
    
    first_timer_tips: [
      {
        title: "Korea's National Treasure No. 1",
        content: "Built in 1398, burned down by arsonist in 2008, rebuilt in 2013. Controversial reconstruction but historically significant. Quick photo stop."
      },
      {
        title: "It's in a traffic circle - not pedestrian friendly",
        content: "Cars circle around it constantly. Use underground passages to reach the gate safely. Don't try to cross traffic!"
      },
      {
        title: "Combine with nearby Namdaemun Market",
        content: "The gate is literally next to Namdaemun Market. 2-minute walk. Plan to visit both together. Gate viewing takes 10-15 minutes max."
      },
      {
        title: "Changing of the Guard ceremony on weekends",
        content: "Saturday and Sunday at 2 PM. Traditional costume ceremony, 20 minutes. Small crowd compared to palace ceremonies. Good for photos."
      },
      {
        title: "Better viewed from outside than inside",
        content: "You can climb up, but the view inside isn't special. The gate looks more impressive from outside. Save time for market instead."
      }
    ]
  }
};

// Function to get location data
function getKoreaLocation(locationName) {
  const normalizedSearch = locationName.toLowerCase().trim();
  
  for (const [key, value] of Object.entries(koreaLocations)) {
    if (key.toLowerCase().includes(normalizedSearch) || 
        normalizedSearch.includes(key.toLowerCase())) {
      return value;
    }
  }
  
  return null;
}

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { koreaLocations, getKoreaLocation };
}
