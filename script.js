// --- GLOBAL VARS ---
let mapChart;

// --- TRANSLATION DICTIONARY ---
const translations = {
    app_subtitle: { en: "Learn. Prepare. Survive.", hi: "जानें। तैयारी करें। जीवित रहें।", bn: "শিখুন। প্রস্তুতি নিন। বেঁচে থাকুন।" },
    dashboard_link: { en: "Dashboard", hi: "डैशबोर्ड", bn: "ড্যাশবোর্ড" },
    map_link: { en: "Revise Through Map", hi: "मानचित्र से सीखें", bn: "মানচিত্রের মাধ্যমে শিখুন" },
    donate_now: { en: "Donate Now", hi: "अभी दान करें", bn: "এখন দান করুন" },
    donate: { en: "Donate", hi: "দান करें", bn: "দান করুন" },
    your_progress: { en: "YOUR PROGRESS", hi: "आपकी प्रगति", bn: "আপনার অগ্রগতি" },
    your_profile: { en: "Your Profile", hi: "आपकी प्रोफाइल", bn: "আপনার প্রোফাইল" },
    points_label: { en: "Points", hi: "अंक", bn: "পয়েন্ট" },
    badges_label: { en: "Badges", hi: "बैज", bn: "ব্যাজ" },
    state_ut_directory: { en: "State & UT Directory", hi: "राज्य और केंद्र शासित प्रदेश निर्देशिका", bn: "রাজ্য এবং কেন্দ্রশাসিত অঞ্চল ডিরেক্টরি" },
    menu_header: { en: "Menu", hi: "मेनू", bn: "মেনু" },
    dashboard_link_sidebar: { en: "Dashboard", hi: "डैशबोर्ड", bn: "ড্যাশবোর্ড" },
    start_drill: { en: "Start a Drill", hi: "एक ड्रिल शुरू करें", bn: "একটি ড্রিল শুরু করুন" },
    my_family_plan: { en: "My Family Plan", hi: "मेरा परिवार योजना", bn: "আমার পারিবারিক পরিকল্পনা" },
    my_emergency_kit: { en: "My Emergency Kit", hi: "मेरी आपातकालीन किट", bn: "আমার জরুরি কিট" },
    support_relief: { en: "Support Relief Efforts", hi: "राहत प्रयासों का समर्थन करें", bn: "ত্রাণ প্রচেষ্টাকে সমর্থন করুন" },
    historical_disasters: { en: "Famous Historical Disasters", hi: "प्रसिद्ध ऐतिहासिक आपदाएं", bn: "বিখ্যাত ঐতিহাসিক দুর্যোগ" },
    first_aid: { en: "First Aid Essentials", hi: "प्राथमिक चिकित्सा अनिवार्य", bn: "প্রাথমিক চিকিৎসার প্রয়োজনীয়তা" },
    what_to_pack: { en: "What to Pack", hi: "क्या पैक करें", bn: "কী প্যাক করবেন" },
    basic_medicines: { en: "Basic Medicines to Carry", hi: "साथ रखने योग्य बुनियादी दवाएं", bn: "বহন করার জন্য প্রাথমিক ওষুধ" },
    my_certificates: { en: "Certificates", hi: "प्रमाण पत्र", bn: "সার্টিফিকেট" },
    help_center: { en: "Help Center", hi: "सहायता केंद्र", bn: "সহায়তা কেন্দ্র" },
    contact_us: { en: "Contact Us", hi: "हमसे संपर्क करें", bn: "যোগাযোগ করুন" },
    login_logout: { en: "Login / Logout", hi: "लॉगिन / लॉगआउट", bn: "লগইন / লগআউট" },
    dashboard_title_main: { en: "Your Learning Modules", hi: "आपके सीखने के मॉड्यूल", bn: "আপনার শেখার মডিউল" },
    dashboard_title_user: { en: "'s Learning Modules", hi: " के सीखने के मॉड्यूल", bn: "-এর শেখার মডিউল" },
    dashboard_subtitle_main: { en: "Complete each module to become a certified Disaster Ready expert. Start by reading an article, then complete the drill to unlock the final quiz.", hi: "प्रमाणित विशेषज्ञ बनने के लिए प्रत्येक मॉड्यूल को पूरा करें। एक लेख पढ़कर शुरू करें, फिर अंतिम प्रश्नोत्तरी अनलॉक करने के लिए ड्रिल पूरी करें।", bn: "প্রত্যয়িত বিশেষজ্ঞ হতে প্রতিটি মডিউল সম্পূর্ণ করুন। একটি নিবন্ধ পড়ার মাধ্যমে শুরু করুন, তারপর চূড়ান্ত কুইজ আনলক করতে ড্রিলটি সম্পূর্ণ করুন।" },
    footer_about: { en: "Empowering citizens with the knowledge to prepare for, survive, and recover from disasters.", hi: "नागरिकों को आपदाओं की तैयारी, उनसे बचने और उनसे उबरने के ज्ञान से सशक्त बनाना।", bn: "নাগরিকদের দুর্যোগের জন্য প্রস্তুতি, বেঁচে থাকা এবং পুনরুদ্ধার করার জ্ঞান দিয়ে ক্ষমতায়ন করা।" },
    footer_quick_links: { en: "Quick Links", hi: "त्वरित लिंक्स", bn: "দ্রুত লিঙ্ক" },
    footer_resources: { en: "Official Resources", hi: "आधिकारिक संसाधन", bn: "অফিসিয়াল রিসোর্স" },
    footer_get_involved: { en: "Get Involved", hi: "शामिल हों", bn: "জড়িত হন" },
    donate_relief: { en: "Donate for Relief", hi: "राहत के लिए दान करें", bn: "ত্রাণের জন্য দান করুন" },
    module_subtitle: { en: "Learn, practice, and test.", hi: "जानें, अभ्यास करें और परीक्षण करें।", bn: "শিখুন, অনুশীলন করুন এবং পরীক্ষা করুন।" },
    read_article_step: { en: "Read Article", hi: "लेख पढ़ें", bn: "নিবন্ধ পড়ুন" },
    read_case_study_step: { en: "Read Case Study", hi: "केस स्टडी पढ़ें", bn: "কেস স্টাডি পড়ুন" },
    complete_drill_step: { en: "Complete Drill", hi: "ड्रिल पूरी करें", bn: "ড্রিল সম্পূর্ণ করুন" },
    take_quiz_step: { en: "Take Quiz", hi: "प्रश्नोत्तरी लें", bn: "কুইজ দিন" },
    earthquakes_title: { en: "Earthquake Readiness", hi: "भूकंप की तैयारी", bn: "ভূমিকম্প প্রস্তুতি" },
    floods_title: { en: "Flood Safety", hi: "बाढ़ सुरक्षा", bn: "বন্যা সুরক্ষা" },
    cyclones_title: { en: "Cyclone Preparedness", hi: "चक्रवात की तैयारी", bn: "ঘূর্ণিঝড় প্রস্তুতি" },
    landslides_title: { en: "Landslide Safety", hi: "भूस्खलन सुरक्षा", bn: "ভূমিধস সুরক্ষা" },
    tsunamis_title: { en: "Tsunami Awareness", hi: "सुनामी जागरूकता", bn: "সুনামি সচেতনতা" },
    droughts_title: { en: "Drought Resilience", hi: "सूखा लचीलापन", bn: "খরা স্থিতিস্থাপকতা" },
    heatwaves_title: { en: "Heatwave Protection", hi: "हीटवेव से बचाव", bn: "তাপপ্রবাহ সুরক্ষা" },
<<<<<<< HEAD
    case_study_title: { en: "Case Study Analysis", hi: "केस स्टडी", bn: "কেস স্টাডি বিশ্লেষণ" },
=======
    case_study_title: { en: "Case Study Analysis", hi: "केस স্টাডি বিশ্লেষণ", bn: "কেস স্টাডি বিশ্লেষণ" },
>>>>>>> 0728f0a2113bd324c3e4de52d9045b01bfeba077
};

// --- DATA OBJECTS ---
const mockAlerts = {
  "Uttarakhand": { level: "Red", disasterType: "Flash Floods", message: "Flash Flood Warning for Dehradun and surrounding districts. Move to higher ground immediately.", time: "11 Sep 2025, 12:30 AM" },
  "Gujarat": { level: "Red", disasterType: "Earthquakes", message: "High-intensity earthquake reported near Bhuj. Take cover immediately.", time: "11 Sep 2025, 01:15 AM" },
  "Maharashtra": { level: "Orange", message: "Heavy rainfall advisory for Mumbai. Expect urban flooding.", time: "11 Sep 2025, 12:15 AM" },
  "Default": { level: "Green", message: "No active alerts in your selected region.", time: "" }
};
const stateDisasters = { "Andaman and Nicobar Islands":{primaryHazards:["Earthquakes","Tsunamis"],details:{"Earthquakes":"These islands are located in a very high-risk seismic zone (Zone V) due to their proximity to the active Andaman-Sumatra trench.","Tsunamis":"The same undersea tectonic activity that causes earthquakes makes the islands extremely vulnerable to tsunamis."}}, "Andhra Pradesh":{primaryHazards:["Cyclones","Floods","Droughts"],details:{"Cyclones":"With a long coastline on the Bay of Bengal, the state is frequently hit by tropical cyclones.","Floods":"Heavy rainfall from cyclones and the monsoon season often leads to severe flooding.","Droughts":"The Rayalaseema region, in particular, is arid and experiences frequent droughts."}}, "Arunachal Pradesh":{primaryHazards:["Earthquakes","Landslides"],details:{"Earthquakes":"The state is in Seismic Zone V, the highest-risk category.","Landslides":"The steep terrain, fragile geology, and intense monsoon rains make landslides a common and dangerous phenomenon."}}, "Assam":{primaryHazards:["Floods","Earthquakes"],details:{"Floods":"Assam experiences devastating annual floods caused by the mighty Brahmaputra River.","Earthquakes":"Like other northeastern states, Assam is in Seismic Zone V and has a history of powerful earthquakes."}}, "Bihar":{primaryHazards:["Floods","Droughts"],details:{"Floods":"North Bihar is India's most flood-prone region, primarily due to rivers like the Kosi and Gandak.","Droughts":"Conversely, South Bihar often faces drought conditions."}}, "Chandigarh":{primaryHazards:["Urban Flooding"],details:{"Urban Flooding":"As a well-planned city, intense rainfall during monsoons can overwhelm the drainage systems."}}, "Chhattisgarh":{primaryHazards:["Droughts","Lightning"],details:{"Droughts":"Several districts in Chhattisgarh are prone to drought due to irregular rainfall.","Lightning":"The state has a high incidence of lightning strikes, resulting in a significant number of fatalities each year."}}, "Dadra and Nagar Haveli and Daman and Diu":{primaryHazards:["Cyclones"],details:{"Cyclones":"Located on the west coast, this union territory can be affected by cyclones forming in the Arabian Sea."}}, "National Capital Territory of Delhi":{primaryHazards:["Earthquakes","Heatwaves","Urban Flooding"],details:{"Earthquakes":"Delhi falls in Seismic Zone IV, indicating a high risk of earthquakes.","Heatwaves":"The city experiences extreme heatwaves during the summer months.","Urban Flooding":"During the monsoon, short bursts of intense rain often lead to severe waterlogging."}}, "Goa":{primaryHazards:["Coastal Erosion","Floods"],details:{"Coastal Erosion":"The state's famous beaches are threatened by coastal erosion.","Floods":"Heavy monsoon rains can cause flooding in low-lying areas."}}, "Gujarat":{primaryHazards:["Earthquakes","Cyclones","Droughts"],details:{"Earthquakes":"The Kutch region is in Seismic Zone V and has a history of devastating earthquakes (2001 Bhuj).","Cyclones":"Its long coastline makes it vulnerable to cyclones from the Arabian Sea.","Droughts":"Regions like Kutch and Saurashtra are arid and frequently experience severe drought conditions."}}, "Haryana":{primaryHazards:["Floods","Hailstorms"],details:{"Floods":"Flooding can occur in parts of the state due to overflowing of the Yamuna river.","Hailstorms":"The state's agriculture is often damaged by hailstorms."}}, "Himachal Pradesh":{primaryHazards:["Landslides","Flash Floods","Earthquakes"],details:{"Landslides":"The state's mountainous terrain makes it extremely susceptible to landslides.","Flash Floods":"Cloudbursts are a common occurrence, leading to sudden and destructive flash floods.","Earthquakes":"Being part of the Himalayan range, Himachal Pradesh is in a high-risk seismic zone."}}, "Jammu and Kashmir":{primaryHazards:["Earthquakes","Floods","Avalanches"],details:{"Earthquakes":"The region is situated in a highly active seismic zone (Zone V).","Floods":"The Kashmir Valley is prone to flooding from the Jhelum river (2014 floods).","Avalanches":"In the high-altitude, snow-bound areas, avalanches are a major and frequent threat."}}, "Jharkhand":{primaryHazards:["Droughts","Lightning"],details:{"Droughts":"The state's plateau region is prone to drought due to erratic rainfall.","Lightning":"Jharkhand has one of the highest rates of lightning-related deaths in the country."}}, "Karnataka":{primaryHazards:["Droughts","Floods"],details:{"Droughts":"The interior northern parts of the state form a large, arid zone that is chronically affected by drought.","Floods":"Coastal Karnataka and areas along the Krishna river basin are prone to severe flooding."}}, "Kerala":{primaryHazards:["Floods","Landslides"],details:{"Floods":"Kerala is highly vulnerable to flooding due to intense monsoon rainfall (2018 floods).","Landslides":"The hilly terrain of the Western Ghats is prone to landslides."}}, "Ladakh":{primaryHazards:["Flash Floods","Cloudbursts"],details:{"Flash Floods":"Despite being a cold desert, Ladakh is susceptible to sudden flash floods caused by cloudbursts.","Cloudbursts":"Localized, extreme rainfall events known as cloudbursts can trigger flash floods."}}, "Lakshadweep":{primaryHazards:["Cyclones","Coastal Erosion"],details:{"Cyclones":"These low-lying coral islands are vulnerable to the impact of cyclones.","Coastal Erosion":"Rising sea levels pose a significant and existential threat to the islands."}}, "Madhya Pradesh":{primaryHazards:["Floods","Droughts"],details:{"Floods":"Regions along the Narmada and Chambal rivers are prone to flooding.","Droughts":"The Bundelkhand region frequently experience drought conditions."}}, "Maharashtra":{primaryHazards:["Floods","Droughts","Earthquakes"],details:{"Floods":"Urban flooding is a major issue in Mumbai during monsoons.","Droughts":"The Marathwada region is notorious for its severe and recurring droughts.","Earthquakes":"The Koyna region is known for reservoir-induced seismicity (Latur 1993)."}}, "Manipur":{primaryHazards:["Earthquakes","Landslides"],details:{"Earthquakes":"Located in Seismic Zone V, Manipur is at very high risk of earthquakes.","Landslides":"The state's hilly terrain makes it susceptible to landslides during the heavy monsoon rains."}}, "Meghalaya":{primaryHazards:["Floods","Landslides"],details:{"Floods":"Known for receiving some of the highest rainfall in the world, the state is prone to flash floods.","Landslides":"The heavy rainfall and hilly terrain combine to make landslides a frequent hazard."}}, "Mizoram":{primaryHazards:["Landslides","Earthquakes"],details:{"Landslides":"The state's steep slopes and fragile soil, combined with heavy rainfall, make landslides a very common problem.","Earthquakes":"Mizoram is in a high-risk seismic zone."}}, "Nagaland":{primaryHazards:["Earthquakes","Landslides"],details:{"Earthquakes":"Falling in Seismic Zone V, Nagaland has a high vulnerability to earthquakes.","Landslides":"The hilly topography and heavy rains lead to a high incidence of landslides."}}, "Odisha":{primaryHazards:["Cyclones","Floods"],details:{"Cyclones":"With its long coastline, Odisha is one of the most cyclone-prone states in India.","Floods":"The state's major rivers, including the Mahanadi, often cause severe flooding."}}, "Puducherry":{primaryHazards:["Cyclones","Tsunamis"],details:{"Cyclones":"Its coastal location makes it vulnerable to cyclones from the Bay of Bengal.","Tsunamis":"The union territory was affected by the 2004 Indian Ocean tsunami."}}, "Punjab":{primaryHazards:["Floods"],details:{"Floods":"Punjab is primarily prone to flooding along the Sutlej, Ravi, and Beas rivers during heavy monsoon rainfall."}}, "Rajasthan":{primaryHazards:["Droughts","Heatwaves"],details:{"Droughts":"Being the largest desert state, Rajasthan is chronically prone to severe droughts.","Heatwaves":"The state experiences extreme heatwaves during summer."}}, "Sikkim":{primaryHazards:["Earthquakes","Landslides","Flash Floods"],details:{"Earthquakes":"Sikkim is located in the highly active seismic zone of the Himalayas.","Landslides":"The state's steep, mountainous terrain makes it extremely prone to landslides.","Flash Floods":"Flash floods from glacial lake outbursts (GLOFs) are a unique and dangerous threat."}}, "Tamil Nadu":{primaryHazards:["Cyclones","Floods","Droughts"],details:{"Cyclones":"The state is frequently affected by cyclones forming in the Bay of Bengal.","Floods":"Heavy rainfall leads to flooding in coastal areas and major cities like Chennai.","Droughts":"Many districts in the state are also prone to drought due to the failure of monsoons."}}, "Telangana":{primaryHazards:["Droughts","Floods"],details:{"Droughts":"Parts of the state are prone to drought conditions due to erratic rainfall.","Floods":"Urban flooding has become a major issue in Hyderabad during heavy rains."}}, "Tripura":{primaryHazards:["Earthquakes","Floods"],details:{"Earthquakes":"The state is located in Seismic Zone V and is highly vulnerable to earthquakes.","Floods":"Tripura experiences floods during the monsoon season due to its network of rivers."}}, "Uttar Pradesh":{primaryHazards:["Floods","Droughts"],details:{"Floods":"Eastern Uttar Pradesh is highly susceptible to flooding from rivers like the Ghaghara and Rapti.","Droughts":"The Bundelkhand region of Uttar Pradesh is chronically drought-prone."}}, "Uttarakhand":{primaryHazards:["Earthquakes","Landslides","Flash Floods"],details:{"Earthquakes":"Situated in the Himalayan seismic belt (Zones IV and V), Uttarakhand is highly prone to earthquakes.","Landslides":"The steep, unstable slopes frequently trigger devastating landslides.","Flash Floods":"Cloudbursts and glacial lake outbursts (GLOFs) can lead to violent flash floods (2013 Kedarnath disaster)."}}, "West Bengal":{primaryHazards:["Floods","Cyclones"],details:{"Floods":"The Gangetic plains of South Bengal are prone to extensive flooding.","Cyclones":"The Sundarbans and coastal areas are highly vulnerable to cyclones."}}, };
const drillExercises = { "Avalanches": { title: "Avalanche Drill: React Quickly!", exercises: [ "If caught in an avalanche, try to get off the slab or grab onto a tree.", "If you are swept away, try to stay on the surface by using a swimming motion.", "As the snow slows, create an air pocket in front of your face using your hands.", "Stay calm to conserve air. If you don't know which way is up, spit and see which way the saliva falls.", "In a safe area, practice using avalanche transceivers, probes, and shovels.", "Always check the avalanche forecast before entering backcountry areas." ], videoUrl: "https://www.youtube.com/embed/phG_2wQc9M" }, "Cloudbursts": { title: "Cloudburst Drill: Move to High Ground Immediately!", exercises: [ "Be aware of your surroundings, especially if you are in hilly or mountainous areas during heavy rain.", "A sudden rise in water level or a roaring sound upstream are signs of a flash flood caused by a cloudburst.", "Do not wait for instructions. Immediately move to higher ground.", "Avoid river valleys and low-lying areas.", "Do not try to cross flowing streams or waterlogged areas.", "Stay informed through weather alerts." ], videoUrl: "https://www.youtube.com/embed/x6sKIP-9w3A" }, "Coastal Erosion": { title: "Coastal Erosion Awareness Drill", exercises: [ "Identify and be aware of designated coastal hazard zones in your area.", "Follow all posted warnings and stay away from cliff edges or unstable shorelines.", "Participate in community efforts for coastal protection like planting mangroves or dune restoration.", "During storms, evacuate coastal areas as instructed by authorities.", "Report significant erosion or new cracks in coastal land to local authorities.", "Understand the long-term evacuation plans for your coastal community." ], videoUrl: "https://www.youtube.com/embed/b6aN9k2J6V8" }, "Cyclones": { title: "Cyclone Drill: Shelter in Place!", exercises: [ "Move to a pre-identified safe room or the strongest part of the building (an internal hallway, bathroom, or closet on the lowest floor).", "Stay away from windows, glass doors, and skylights.", "Lie on the floor under a sturdy object like a heavy desk or table and cover your head with your hands.", "Listen to the radio for the latest information and instructions.", "Do not go outside until authorities declare it is safe.", "If instructed to evacuate before the cyclone hits, follow the designated routes promptly." ], videoUrl: "https://www.youtube.com/embed/pP9-2_y6z5w" }, "Droughts": { title: "Drought Preparedness Drill: Conserve Water", exercises: [ "Practice fixing leaky taps and pipes in the school and at home.", "Simulate a day of using minimal water. Use a bucket for bathing instead of a shower.", "Discuss and identify alternative sources of water that could be used in an emergency.", "Practice reusing water (e.g., water from washing vegetables for watering plants).", "Learn about rainwater harvesting techniques.", "Participate in water conservation awareness campaigns." ], videoUrl: "https://www.youtube.com/embed/so3bbmN4-3E" }, "Earthquakes": { title: "Earthquake Drill: Drop, Cover, and Hold On!", exercises: [ "<strong>DROP</strong> to the ground before the shaking can knock you down.", "Take <strong>COVER</strong> by getting under a sturdy desk or table. Cover your head and neck with your arms.", "<strong>HOLD ON</strong> to your shelter until the shaking stops.", "After shaking stops, count to 60, then evacuate calmly to a pre-designated open assembly point, away from buildings and power lines.", "Do not use elevators. Use the stairs.", "Check for injuries and help others if you are able." ], videoUrl: "https://www.youtube.com/embed/GSDmqLQmMN0" }, "Flash Floods": { title: "Flash Flood Drill: Act Immediately!", exercises: [ "If a flash flood warning is issued or you see signs (roaring water), move to higher ground at once.", "Do not wait for instructions to move.", "Abandon vehicles and move to higher ground if caught in a rapidly rising water situation.", "Never walk, swim, or drive through floodwaters.", "Stay away from culverts, streams, and storm drains.", "Listen to weather radios for updates." ], videoUrl: "https://www.youtube.com/embed/x6sKIP-9w3A" }, "Floods": { title: "Flood Drill: Get to Higher Ground!", exercises: [ "Listen to official warnings. If told to evacuate, do so immediately.", "Move to a higher floor or rooftop if your building is flooding but you cannot evacuate.", "Do not walk, swim, or drive through flood waters. Six inches of moving water can knock you down.", "Stay away from downed power lines and electrical wires.", "Identify safe evacuation routes to higher ground in your school's plan.", "Have an emergency kit ready." ], videoUrl: "https://www.youtube.com/embed/eAE-ry_h-2k" }, "Hailstorms": { title: "Hailstorm Drill: Take Cover Indoors", exercises: [ "Immediately seek shelter indoors in a sturdy building.", "Stay away from windows, skylights, and glass doors.", "If you are in a vehicle, pull over to a safe place and cover your head with your arms. Lie face down on the vehicle floor if possible.", "Do not leave your shelter until the hail has completely stopped.", "Bring pets indoors.", "Protect plants or outdoor furniture if you have advance warning." ], videoUrl: "https://www.youtube.com/embed/qV4b-5o_1hE" }, "Heatwaves": { title: "Heatwave Drill: Stay Cool, Stay Hydrated", exercises: [ "Practice moving to the coolest part of the building.", "Drink plenty of water, even if you don't feel thirsty. Simulate water breaks.", "Wear lightweight, light-colored, and loose-fitting clothing.", "Identify signs of heat exhaustion and heatstroke (dizziness, nausea, rapid pulse) and know how to respond.", "Avoid strenuous activities during the hottest part of the day.", "Learn how to make Oral Rehydration Solution (ORS) at home." ], videoUrl: "https://www.youtube.com/embed/j_8-3q2Wado" }, "Landslides": { title: "Landslide Drill: Evacuate and Alert!", exercises: [ "If in a high-risk area, evacuate immediately to a safer location on higher ground.", "Listen for unusual sounds like trees cracking or boulders knocking together.", "Move away from the path of a landslide as quickly as possible.", "Curl into a tight ball and protect your head if escape is not possible.", "Report signs of land movement (cracks, tilted trees) to authorities.", "Stay away from the slide area after the event." ], videoUrl: "https://www.youtube.com/embed/J1P48_wJ7i8" }, "Lightning": { title: "Lightning Drill: When Thunder Roars, Go Indoors!", exercises: [ "If you hear thunder, immediately stop all outdoor activities and get inside a sturdy building.", "Avoid open areas, isolated trees, and tall objects.", "If indoors, avoid contact with electrical equipment and plumbing.", "Wait at least 30 minutes after the last clap of thunder before resuming outdoor activities.", "If caught outside with no shelter, crouch down in a ball-like position. Do not lie flat.", "Do not shelter in sheds, pavilions, or under isolated trees." ], videoUrl: "https://www.youtube.com/embed/yIog1D22e6k" }, "Tsunamis": { title: "Tsunami Drill: Go to High Ground, Stay There!", exercises: [ "If you feel a strong earthquake near the coast, do not wait for an official warning.", "Immediately move as far inland and as high up as possible. This is your first and most important action.", "Follow designated evacuation routes.", "If you cannot move inland, go to the highest floor of a sturdy, multi-story building.", "Stay in your safe location until officials announce it is safe to return.", "A tsunami is a series of waves. Do not return after the first wave." ], videoUrl: "https://www.youtube.com/embed/7924S782CjY" }, "Urban Flooding": { title: "Urban Flooding Drill: Don't Drown, Turn Around!", exercises: [ "Avoid walking or driving through waterlogged streets. The water may be deeper than it appears and can hide dangers.", "Stay away from storm drains, ditches, and culverts.", "If your building begins to flood, move to a higher floor. Avoid basements.", "Turn off electricity at the main switch if your building is flooding.", "Be aware of the risk of electrocution from submerged power lines or electrical outlets.", "Listen to local authorities for instructions and updates." ], videoUrl: "https://www.youtube.com/embed/P-tqK3NCS94" } };
const quizData = {
    'Earthquakes':[{q:"First action in an earthquake?",a:"Drop, Cover, and Hold On",o:["Run outside","Stand in a doorway"]},{q:"After shaking stops?",a:"Evacuate calmly to an open area",o:["Use the elevator","Light a match"]}],
    'Floods':[{q:"How much moving water can knock you down?",a:"6 inches",o:["2 feet","1 foot"]},{q:"Car in rising water?",a:"Abandon the vehicle immediately",o:["Drive through it quickly","Wait for help"]}],
    'Cyclones':[{q:"Safest place during a cyclone?",a:"An interior room, no windows",o:["Near a window","Basement"]},{q:"What to secure before a cyclone?",a:"Loose objects outside",o:["Open all windows","Ignore warnings"]}],
    'Landslides':[{q:"What is a common sign of an impending landslide?",a:"Cracks appearing in the ground",o:["Sudden clear skies","A drop in wind speed"]},{q:"If you can't evacuate from a landslide's path, what should you do?",a:"Curl into a tight ball and protect your head",o:["Stand tall and wave for help","Run towards the slide"]}],
    'Tsunamis':[{q:"What should you do immediately after feeling a strong earthquake near the coast?",a:"Move to high ground immediately",o:["Wait for an official warning","Go to the beach to watch"]},{q:"Is the first wave of a tsunami always the biggest?",a:"No, subsequent waves can be larger",o:["Yes, the first wave is always the most dangerous","Tsunamis are only one wave"]}],
    'Droughts':[{q:"What is the most effective way to conserve water during a drought?",a:"Fixing all leaks in your home",o:["Watering your lawn daily","Washing your car weekly"]},{q:"What is a good practice for outdoor water use during a drought?",a:"Using a broom to clean driveways",o:["Using a hose to clean driveways","Ignoring outdoor cleaning"]}],
    'Heatwaves':[{q:"What are the symptoms of heatstroke?",a:"High body temperature and confusion",o:["Shivering and cold skin","A slow pulse"]},{q:"What should you drink to stay hydrated during a heatwave?",a:"Water",o:["Coffee or soda","Sugary sports drinks"]}]
};
const learningModules = {
    'Earthquakes':{titleKey:'earthquakes_title', icon:'🌍',points:50},
    'Floods':{titleKey:'floods_title', icon:'💧',points:50},
    'Cyclones':{titleKey:'cyclones_title', icon:'🌀',points:50},
    'Landslides':{titleKey:'landslides_title', icon:'⛰️',points:50},
    'Tsunamis':{titleKey:'tsunamis_title', icon:'🌊',points:50},
    'Droughts':{titleKey:'droughts_title', icon:'🏜️',points:50},
    'Heatwaves':{titleKey:'heatwaves_title', icon:'☀️',points:50},
    'CaseStudy':{titleKey:'case_study_title', icon:'📘',points:50}
};
const historicalDisasters = { "2025 - Punjab Floods": "Heavy monsoon rains caused massive floods in Punjab. 30–46 people died and 3.5 lakh were affected. Over 1,200 villages submerged; huge crop and property loss.", "2025 - Dharali Flash Flood (Uttarakhand)": "Glacial debris collapsed in Dharali village, Uttarakhand. 4–5 deaths and ~70 people went missing. 20–50 homes and hotels destroyed; 1,273 rescued by Army & NDRF.", "2023 - Turkey–Syria Earthquake": "Date: 6 February 2023. Magnitude: 7.8 + 7.5 aftershocks. Impact: 59,000+ deaths, lakhon ghar tabah, modern history ke deadliest quakes me se ek.", "2020 - COVID-19 Pandemic (Global)": "Start: December 2019 (China), 2020 me global spread. Impact: Millions of deaths worldwide, lockdowns, economic collapse. Reason: Virus outbreak (SARS-CoV-2).", "2020 - Beirut Explosion (Lebanon)": "Date: 4 August 2020. Impact: 200+ deaths, 7,000 injured, massive port explosion due to ammonium nitrate storage. Reason: Man-made industrial disaster.", "2018 - Sulawesi Earthquake and Tsunami (Indonesia)": "Date: 28 September 2018. Magnitude: 7.5 earthquake + tsunami. Impact: 4,300+ deaths, thousands missing, city of Palu worst affected.", "2017 - Hurricane Harvey (USA)": "Date: August 2017. Impact: Texas me record-breaking rainfall, 125 billion USD ka damage, 100+ deaths. Reason: Category 4 hurricane with massive flooding.", "2015 - Nepal Earthquake": "Date: 25 April 2015. Magnitude: 7.8. Impact: More than 9,000 deaths, lakhs injured, Kathmandu ke cultural heritage sites ko bahut nuksan. Reason: Major tectonic activity in Himalayan region.", "2015 - South Indian Floods": "During November-December 2015, heavy rainfall led to severe flooding in South India, particularly Tamil Nadu. Chennai was among the worst-affected cities, experiencing its heaviest rainfall in a century.", "2013 - Uttarakhand Floods": "In June 2013, a multi-day cloudburst centered over Uttarakhand caused devastating floods and landslides. It led to the death and disappearance of thousands of people, especially pilgrims in the Kedarnath valley.", "2004 - Indian Ocean Tsunami": "On December 26, 2004, a massive undersea earthquake triggered a devastating tsunami that killed over 230,000 people across 14 countries. Coastal areas of Tamil Nadu, Andaman & Nicobar, and Kerala were severely impacted in India.", "2001 - Gujarat Earthquake": "On January 26, 2001, a massive earthquake of magnitude 7.7 struck Gujarat, primarily affecting the Kutch district. It killed over 20,000 people, injured more than 160,000, and caused widespread destruction.", "1999 - Odisha Super Cyclone": "On October 29, 1999, a super cyclonic storm with wind speeds reaching 260 km/h hit the coast of Odisha. It caused immense destruction, claiming over 10,000 lives and rendering millions homeless.", "1984 - Bhopal Gas Tragedy": "On December 3, 1984, a pesticide plant in Bhopal leaked over 40 tons of methyl isocyanate gas. This event is considered the world's worst industrial disaster, with thousands dying immediately and many more from gas-related illnesses years later." };
const preparednessInfo = { "First Aid": { title: "First Aid Essentials", content: [ "Assorted adhesive bandages", "Sterile gauze pads", "Adhesive tape", "Antiseptic wipes", "Antibiotic ointment", "Pain relievers (e.g., Ibuprofen)", "Antihistamines for allergic reactions", "Tweezers and scissors", "Emergency blanket", "Instant cold packs" ] }, "Emergency Kit": { title: "Emergency Kit: What to Pack", content: [ "Water (1 gallon per person, per day for 3 days)", "Non-perishable food (3-day supply)", "Battery-powered or hand-crank radio", "Flashlight and extra batteries", "First aid kit", "Whistle to signal for help", "Dust mask to filter contaminated air", "Moist towelettes, garbage bags for sanitation", "Local maps", "Important documents (copies)" ] } };
const basicMedicines = { "Paracetamol (Acetaminophen)": "Used for relieving mild to moderate pain from headaches, muscle aches, and menstrual periods, and to reduce fever.", "Ibuprofen": "A nonsteroidal anti-inflammatory drug (NSAID) used for treating pain, fever, and inflammation.", "Antihistamines (e.g., Cetirizine)": "Used to relieve symptoms of allergies, such as runny nose, sneezing, and itching.", "Antiseptic Wipes": "Used to clean minor cuts, scrapes, and wounds to prevent infection before applying a bandage.", "Antibiotic Ointment": "A topical cream applied to minor wounds to help prevent infection and promote healing.", "Oral Rehydration Salts (ORS)": "Crucial for treating dehydration caused by diarrhea, vomiting, or excessive sweating." };
const allDisastersForDrill = [...new Set(Object.values(stateDisasters).flatMap(s => s.primaryHazards))].sort();
const indianLanguages = ["English", "Hindi (हिन्दी)", "Bengali (বাংলা)", "Marathi (मराठी)", "Telugu (తెలుగు)", "Tamil (தமிழ்)", "Gujarati (ગુજરાતી)", "Urdu (اردو)", "Kannada (ಕನ್ನಡ)", "Odia (ଓଡ଼ିଆ)", "Punjabi (ਪੰਜਾਬੀ)", "Malayalam (മലയാളം)"];

// --- USER PROGRESS STATE ---
let userProgress = { 
    name: '', 
    selectedState: '', 
    points: 0, 
    badges: [], 
    readArticles: [], 
    completedDrills: [], 
    completedQuizzes: [],
    revisedTopics: [],
    plan: { contacts: '', meetingPoint: '', notes: '' },
    kitProfile: { adults: 0, children: 0, pets: false, medical: false, checkedItems: [] }
};
let currentLanguage = 'en';

// --- STATE MANAGEMENT ---
function saveUserProgress() { localStorage.setItem('disasterReadyUserProgress', JSON.stringify(userProgress)); }
function loadUserProgress() {
    const saved = localStorage.getItem('disasterReadyUserProgress');
    if (saved) userProgress = JSON.parse(saved);
    // Ensure new properties exist if loading old data
    if (!userProgress.plan) userProgress.plan = { contacts: '', meetingPoint: '', notes: '' };
    if (!userProgress.name) userProgress.name = '';
    if (!userProgress.selectedState) userProgress.selectedState = '';
    if (!userProgress.kitProfile) userProgress.kitProfile = { adults: 0, children: 0, pets: false, medical: false, checkedItems: [] };
    if (!userProgress.badges) userProgress.badges = [];
    if (!userProgress.revisedTopics) userProgress.revisedTopics = [];
    
    updateSidebarUI();
    updateDashboardTitle();
    updateAlertButton();
}

// --- APP INITIALIZATION ---
document.addEventListener('DOMContentLoaded', () => {
    loadUserProgress();
    const savedLang = localStorage.getItem('disasterReadyLanguage') || 'en';
    selectLanguage(savedLang, false);
    setupEventListeners();
    initMap();
    updateSidebarTime();
    setInterval(updateSidebarTime, 60000);
});

// --- SETUP & EVENT LISTENERS ---
function setupEventListeners() {
    // Modal listeners
    document.querySelector('.close-button').addEventListener('click', hideModal);
    document.getElementById('infoModal').addEventListener('click', (e) => { if (e.target.id === 'infoModal') hideModal(); });
    
    // Sidebar listeners
    const sidebar = document.getElementById('sidebar'), hamburger = document.getElementById('hamburger-btn');
    hamburger.addEventListener('click', () => { sidebar.classList.add('visible'); document.body.classList.add('sidebar-is-open'); });
    document.getElementById('sidebar-close-btn').addEventListener('click', () => { sidebar.classList.remove('visible'); document.body.classList.remove('sidebar-is-open'); });
    document.addEventListener('click', (e) => {
        if (sidebar.classList.contains('visible') && !sidebar.contains(e.target) && !hamburger.contains(e.target)) {
            sidebar.classList.remove('visible'); document.body.classList.remove('sidebar-is-open');
        }
    });
    
    // Header nav and language listeners
    document.querySelectorAll('.header-nav a').forEach(link => link.addEventListener('click', (e) => switchView(e.target.dataset.view)));
    document.querySelectorAll('.language-btn-shared').forEach(button => button.addEventListener('click', showLanguageModal));

    // Theme Toggle Listeners
    const themeToggleDesktop = document.getElementById('theme-toggle-desktop');
    const themeToggleMobile = document.getElementById('theme-toggle-mobile');
    const savedTheme = localStorage.getItem('theme') || 'dark';

    function applyTheme(theme) {
        const isLight = theme === 'light';
        document.body.classList.toggle('light-mode', isLight);
        themeToggleDesktop.checked = isLight;
        themeToggleMobile.checked = isLight;
        updateMapTheme();
    }

    function handleThemeChange(e) {
        const newTheme = e.target.checked ? 'light' : 'dark';
        localStorage.setItem('theme', newTheme);
        applyTheme(newTheme);
    }

    applyTheme(savedTheme);
    themeToggleDesktop.addEventListener('change', handleThemeChange);
    themeToggleMobile.addEventListener('change', handleThemeChange);
    
    document.getElementById('user-name-input').addEventListener('change', (e) => {
        userProgress.name = e.target.value;
        saveUserProgress();
        updateDashboardTitle();
    });
    document.getElementById('state-ut-list').addEventListener('click', (e) => {
        if (e.target.tagName === 'LI') {
            const stateName = e.target.textContent;
            userProgress.selectedState = stateName;
            saveUserProgress();
            alert(`Your location has been set to ${stateName}.`);
            renderDashboard();
            updateAlertButton();
        }
    });

    // Auth Modal Listeners
    const loginBtn = document.querySelector('.sidebar-footer .login-btn');
    loginBtn.href = "#"; // Prevent default navigation
    loginBtn.addEventListener('click', (e) => {
        e.preventDefault();
        showAuthModal();
    });

    const signUpBtn = document.getElementById('signUp');
    const signInBtn = document.getElementById('signIn');
    const authContainer = document.getElementById('authContainer');

    if (signUpBtn && signInBtn && authContainer) {
        signUpBtn.addEventListener('click', () => authContainer.classList.add("right-panel-active"));
        signInBtn.addEventListener('click', () => authContainer.classList.remove("right-panel-active"));
    }

    document.getElementById('closeAuthModal').addEventListener('click', hideAuthModal);
    document.getElementById('authModal').addEventListener('click', (e) => { if (e.target.id === 'authModal') hideAuthModal(); });
}

// --- TRANSLATION LOGIC ---
function applyTranslations(lang) {
    document.querySelectorAll('[data-translate]').forEach(el => {
        const key = el.dataset.translate;
        if (key === 'dashboard_title_main' || key === 'dashboard_title_user') return;
        if (translations[key] && translations[key][lang]) {
            el.innerHTML = translations[key][lang];
        } else if (translations[key]) {
            el.innerHTML = translations[key]['en'];
        }
    });
    updateDashboardTitle();
}

function selectLanguage(lang, showAlert = true) {
    const langMap = { "English": "en", "Hindi (हिन्दी)": "hi", "Bengali (বাংলা)": "bn", "Marathi (मराठी)": "mr", "Telugu (తెలుగు)": "te", "Tamil (தமிழ்)": "ta", "Gujarati (ગુજરાતી)": "gu", "Urdu (اردو)": "ur", "Kannada (ಕನ್ನಡ)": "kn", "Odia (ଓଡ଼ିଆ)": "or", "Punjabi (ਪੰਜਾਬੀ)": "pa", "Malayalam (മലയാളം)": "ml"};
    const langKey = langMap[lang] || lang;
    
    currentLanguage = langKey;
    localStorage.setItem('disasterReadyLanguage', langKey);
    applyTranslations(langKey);
    renderDashboard(); 

    if (showAlert) {
        const userFriendlyLangName = Object.keys(langMap).find(key => langMap[key] === langKey) || lang;
        alert(`Language set to ${userFriendlyLangName}.`);
        hideModal();
    }
}

// --- UI & VIEW MANAGEMENT ---
function switchView(viewToShow) {
    document.querySelectorAll('.view-container').forEach(view => view.style.display = 'none');
    document.getElementById(viewToShow).style.display = 'block';
    document.querySelectorAll('.header-nav a').forEach(link => link.classList.toggle('active', link.dataset.view === viewToShow));
    document.body.style.overflow = viewToShow === 'map-view' ? 'hidden' : 'auto';
    if (viewToShow === 'map-view') {
        updateMapVisualProgress();
    }
    const sidebar = document.getElementById('sidebar');
    if (sidebar.classList.contains('visible')) {
        sidebar.classList.remove('visible');
        document.body.classList.remove('sidebar-is-open');
    }
}

function updateSidebarUI() {
    document.getElementById('points-display').textContent = userProgress.points;
    const badgesContainer = document.getElementById('badges-display');
    if (badgesContainer) {
        badgesContainer.innerHTML = '';
        badgesContainer.classList.remove('expanded');
        const badges = userProgress.badges;
        if (badges.length > 0) {
            const latest = badges[badges.length - 1];
            const secondLatest = badges.length > 1 ? badges[badges.length - 2] : null;
            badges.forEach(badgeTopic => {
                const moduleInfo = learningModules[badgeTopic];
                if (moduleInfo) {
                    const span = document.createElement('span');
                    span.className = 'badge-icon';
                    if (badgeTopic === latest) span.classList.add('latest');
                    if (badges.length > 2 && badgeTopic !== latest && badgeTopic !== secondLatest) span.classList.add('hidden');
                    span.textContent = moduleInfo.icon;
                    span.title = translations[moduleInfo.titleKey] ? (translations[moduleInfo.titleKey][currentLanguage] || translations[moduleInfo.titleKey]['en']) : badgeTopic;
                    badgesContainer.appendChild(span);
                }
            });
            if (badges.length > 2) {
                const arrow = document.createElement('button');
                arrow.className = 'badge-expand-btn';
                arrow.innerHTML = '&#9662;'; // Down arrow
                arrow.onclick = (e) => {
                    e.stopPropagation();
                    badgesContainer.classList.toggle('expanded');
                    arrow.classList.toggle('rotated');
                };
                badgesContainer.appendChild(arrow);
            }
        }
    }
    document.getElementById('user-name-input').value = userProgress.name || '';
}

function updateDashboardTitle() {
    const titleEl = document.getElementById('dashboard-main-title');
    if (userProgress.name) {
        const suffix = translations.dashboard_title_user[currentLanguage] || translations.dashboard_title_user.en;
        titleEl.textContent = userProgress.name + suffix;
    } else {
        titleEl.textContent = translations.dashboard_title_main[currentLanguage] || translations.dashboard_title_main.en;
    }
}

function updateSidebarTime() {
    document.getElementById('sidebar-time').textContent = new Date().toLocaleTimeString('en-IN', { hour: 'numeric', minute: '2-digit', timeZone: 'Asia/Kolkata' });
}

// --- DASHBOARD RENDERING ---
function renderDashboard() {
    const container = document.getElementById('learning-path-container');
    if (!container) return;
    container.innerHTML = '';

    const recommendedHazards = userProgress.selectedState ? (stateDisasters[userProgress.selectedState]?.primaryHazards || []) : [];

    for (const topic in learningModules) {
        const module = learningModules[topic];
        const isArticleRead = userProgress.readArticles.includes('module_' + topic);
        const isDrillDone = userProgress.completedDrills.includes('module_' + topic);
        const isQuizDone = userProgress.completedQuizzes.includes('module_' + topic);
        
        const isDrillRequired = topic !== 'CaseStudy';
        let isModuleCompleted = isArticleRead && isQuizDone && (!isDrillRequired || isDrillDone);
        if (topic === 'CaseStudy' && isArticleRead) {
            isModuleCompleted = true; // CaseStudy is complete after reading
        }

        const moduleTitle = translations[module.titleKey] ? (translations[module.titleKey][currentLanguage] || translations[module.titleKey]['en']) : topic;
        const isRecommended = recommendedHazards.includes(topic);

        const card = document.createElement('div');
        card.className = 'module-card';
        if (isModuleCompleted) {
            card.classList.add('module-completed');
        }
        
        let stepsHTML = '';
        const readStepName = isDrillRequired ? 'read_article_step' : 'read_case_study_step';
        stepsHTML += `<li><button class="step-button" data-action="read" data-topic="${topic}" ${isArticleRead ? 'disabled' : ''}><span class="step-status">${isArticleRead ?'✅':'⭕'}</span><span class="step-name" data-translate="${readStepName}"></span></button></li>`;
        if (isDrillRequired) {
            stepsHTML += `<li><button class="step-button" data-action="drill" data-topic="${topic}" ${!isArticleRead || isDrillDone ? 'disabled' : ''}><span class="step-status">${isDrillDone ? '✅' : (isArticleRead ? '⭕' : '🔒')}</span><span class="step-name" data-translate="complete_drill_step"></span></button></li>`;
        }
        const isQuizUnlocked = isArticleRead && (!isDrillRequired || isDrillDone);
        stepsHTML += `<li><button class="step-button" data-action="quiz" data-topic="${topic}" ${!isQuizUnlocked || isQuizDone ? 'disabled' : ''}><span class="step-status">${isQuizDone ? '✅' : (isQuizUnlocked ? '⭕' : '🔒')}</span><span class="step-name" data-translate="take_quiz_step"></span></button></li>`;

        card.innerHTML = `<div class="module-header"><span class="module-icon">${module.icon}</span><div class="module-title"><h3>${moduleTitle}</h3><p data-translate="module_subtitle"></p></div>${isRecommended ? '<div class="recommendation-tag">Recommended</div>' : ''}</div><ul class="module-steps">${stepsHTML}</ul>`;
        container.appendChild(card);
    }

    container.querySelectorAll('button[data-action]').forEach(button => button.addEventListener('click', handleActionClick));
    applyTranslations(currentLanguage);
    checkCertificateEligibility();
}

function handleActionClick(event) {
    const { action, topic } = event.currentTarget.dataset;
    if (action === 'read') showArticle(topic);
    if (action === 'drill') showDrill(topic);
    if (action === 'quiz') startQuiz(topic);
}

// --- MODAL MANAGEMENT ---
const modal = document.getElementById('infoModal');
const authModal = document.getElementById('authModal');
const modalBody = modal.querySelector('.modal-body');

function showModal(title, subtitle, contentHTML) {
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalSubtitle').textContent = subtitle;
    modalBody.innerHTML = contentHTML;
    modal.style.display = 'flex';
    setTimeout(() => { modal.style.opacity = 1; }, 10);
}
function hideModal() { 
    modal.style.opacity = 0;
    setTimeout(() => {
        modal.style.display = 'none'; 
        modalBody.innerHTML = ''; 
        if (document.getElementById('dashboard-view').style.display !== 'none') {
            renderDashboard();
            updateSidebarUI();
        }
    }, 300);
}
function showAuthModal() {
    authModal.style.display = 'flex';
    setTimeout(() => { authModal.style.opacity = 1; }, 10);
}
function hideAuthModal() {
    const authContainer = document.getElementById('authContainer');
    authModal.style.opacity = 0;
    setTimeout(() => {
        authModal.style.display = 'none'; 
        if (authContainer) {
            authContainer.classList.remove("right-panel-active");
        }
    }, 300);
}

// --- DASHBOARD & SIDEBAR ACTION HANDLERS ---
function updateAlertButton() {
    const state = userProgress.selectedState || "Default";
    const alertData = mockAlerts[state] || mockAlerts["Default"];
    const alertBtn = document.getElementById('live-alert-btn');
    alertBtn.classList.remove('status-red', 'status-orange');
    if (alertData.level === 'Red') {
        alertBtn.classList.add('status-red');
    } else if (alertData.level === 'Orange') {
        alertBtn.classList.add('status-orange');
    }
}

function showAlertsModal() {
    const state = userProgress.selectedState || "Default";
    const alertData = mockAlerts[state] || mockAlerts["Default"];

    let modalContent = `
        <div style="padding: 15px; border-radius: 8px; background-color: ${alertData.level === 'Red' ? 'rgba(239, 68, 68, 0.1)' : 'var(--tertiary-bg)'}; border-left: 5px solid ${alertData.level === 'Red' ? 'var(--accent-red)' : (alertData.level === 'Orange' ? '#F97316' : 'var(--accent-blue)')};">
            <h3 style="margin: 0 0 10px 0;">${alertData.message}</h3>
            <p style="margin: 0; font-size: 0.9em; color: var(--text-secondary);">${alertData.time}</p>
        </div>
    `;

    if (alertData.level === 'Red' && alertData.disasterType && drillExercises[alertData.disasterType]) {
        modalContent += `
            <div style="text-align: center; margin-top: 25px; border-top: 1px solid var(--border-color); padding-top: 20px;">
                <p style="margin-bottom: 15px;">A critical alert is active. Refresh your memory now.</p>
                <button class="start-drill-button" onclick="startRelevantDrill('${alertData.disasterType}')">
                    Practice the ${alertData.disasterType} Drill
                </button>
            </div>
        `;
    }
    showModal(`Live Alert: ${userProgress.selectedState || "India"}`, `Status: ${alertData.level}`, modalContent);
}
<<<<<<< HEAD
function confirmSOSCall(event) {
    // Prevent the link from firing immediately
    event.preventDefault();
    
    // Ask the user for confirmation
    const isConfirmed = confirm("Are you sure you want to call the National Emergency Helpline (112)? Use only in a real emergency.");
    
    // If they confirm, proceed with the call
    if (isConfirmed) {
        window.location.href = "tel:112";
    }
}
=======
>>>>>>> 0728f0a2113bd324c3e4de52d9045b01bfeba077

function startRelevantDrill(disasterName) {
    hideModal();
    setTimeout(() => { showDrillDetails(disasterName); }, 300);
}

function showArticle(topic) {
    const articleText = Object.values(stateDisasters).find(s => s.details[topic])?.details[topic] || "Case study content coming soon.";
    const content = `<p style="line-height: 1.6;">${articleText}</p><p id="article-timer" style="color: var(--text-secondary); text-align: center; margin-top: 20px; font-style: italic;"></p>`;
    showModal(`About ${topic}`, 'Read the following to prepare.', content);
    let countdown = 10;
    const timerEl = document.getElementById('article-timer');
    timerEl.textContent = `Marked as read in ${countdown}s...`;
    const interval = setInterval(() => {
        countdown--;
        timerEl.textContent = `Marked as read in ${countdown}s...`;
        if (countdown <= 0) {
            clearInterval(interval);
            timerEl.textContent = '✅ Marked as Read!';
            if (!userProgress.readArticles.includes('module_' + topic)) { 
                userProgress.readArticles.push('module_' + topic);
                // BADGE FIX: Award badge for CaseStudy here, as it has no drill/quiz
                if (topic === 'CaseStudy' && !userProgress.badges.includes(topic)) {
                    userProgress.badges.push(topic);
                    updateMapVisualProgress();
                }
                saveUserProgress(); 
            }
        }
    }, 1000);
}

let audioContext;
try { audioContext = new (window.AudioContext || window.webkitAudioContext)(); } 
catch (e) { console.error("Web Audio API is not supported in this browser."); }

function playLoudSound() {
    if (!audioContext) return;
    if (audioContext.state === 'suspended') { audioContext.resume(); }
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(900, audioContext.currentTime);
    gainNode.gain.setValueAtTime(1, audioContext.currentTime);
    oscillator.start();
    oscillator.stop(audioContext.currentTime + 1.5);
}

function startDrillSimulation(disasterName) {
    playLoudSound();
    alert(`DRILL STARTED: ${disasterName.toUpperCase()}! Follow safety procedures now!`);
}

function showDrillModal(event) {
    if (event) event.preventDefault();
    const content = `<div id="drill-selection-view"><div class="drill-selection-grid">${allDisastersForDrill.map(disaster => `<div class="drill-item" onclick="showDrillDetails('${disaster}')">${disaster}</div>`).join('')}</div></div>`;
    showModal('Select a Drill to Start', '', content);
}

function showDrillDetails(disasterName) {
    const drillData = drillExercises[disasterName];
    if (!drillData) return;
    const content = `<button class="back-button-drill" onclick="showDrillModal(event)">&larr; Back to Drill Selection</button><div class="drill-video-container"><iframe src="${drillData.videoUrl}?autoplay=1&mute=1&loop=1&playlist=${drillData.videoUrl.split('/').pop()}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div><h3>Key Exercises:</h3><ol class="drill-exercises-list">${drillData.exercises.map(ex => `<li>${ex}</li>`).join('')}</ol><button class="start-drill-button" onclick="startDrillSimulation('${disasterName}')">START DRILL</button>`;
    showModal(drillData.title, '', content);
}

function showDrill(topic) {
    const drillData = drillExercises[topic];
    if (!drillData) { alert(`Drill for ${topic} coming soon!`); return; }
    const content = `<div style="position: relative; width: 100%; padding-bottom: 56.25%; margin-bottom: 20px;"><iframe src="${drillData.videoUrl}" style="position: absolute; top:0; left:0; width:100%; height:100%;" frameborder="0" allowfullscreen></iframe></div><h3>Key Exercises:</h3><ol style="padding-left: 20px;">${drillData.exercises.map(ex => `<li>${ex}</li>`).join('')}</ol><button class="generic-button" onclick="completeDrill('${topic}')">Mark as Complete</button>`;
    showModal(drillData.title, 'Watch the video and review the exercises.', content);
}

function completeDrill(topic) {
    if (!userProgress.completedDrills.includes('module_' + topic)) { 
        userProgress.completedDrills.push('module_' + topic); 
        saveUserProgress();
    }
    alert('Great job! Drill marked as complete.');
    hideModal();
}
function showHistoricalDisastersModal(event) {
    if (event) event.preventDefault();
    let accordionHTML = '<div class="accordion-list">';
    for (const disasterName in historicalDisasters) {
        accordionHTML += `<div class="accordion-item"><div class="accordion-header"><span>${disasterName}</span><span class="arrow-icon">&#9654;</span></div><div class="accordion-content"><p>${historicalDisasters[disasterName]}</p></div></div>`;
    }
    accordionHTML += '</div>';
    showModal('Famous Historical Disasters', 'Learning from the past to protect the future.', accordionHTML);
    
    modal.querySelectorAll('.accordion-item').forEach(item => {
        item.querySelector('.accordion-header').addEventListener('click', () => {
            const currentlyActive = modal.querySelector('.accordion-item.active');
            if (currentlyActive && currentlyActive !== item) currentlyActive.classList.remove('active');
            item.classList.toggle('active');
        });
    });
}

function showPreparednessModal(type, event) {
    if (event) event.preventDefault();
    const info = preparednessInfo[type];
    if (!info) return;
    let contentHTML = '<ul class="preparedness-list">';
    info.content.forEach(item => { contentHTML += `<li>${item}</li>`; });
    contentHTML += '</ul>';
    showModal(info.title, '', contentHTML);
}

function showBasicMedicinesModal(event) {
    if (event) event.preventDefault();
    let accordionHTML = `<div class="disclaimer-box"><strong>Important:</strong> The information below is for general guidance. Always consult a doctor or pharmacist before taking any medication.</div><div class="accordion-list">`;
    for (const medName in basicMedicines) {
        accordionHTML += `<div class="accordion-item"><div class="accordion-header"><span>${medName}</span><span class="arrow-icon">&#9654;</span></div><div class="accordion-content"><p>${basicMedicines[medName]}</p></div></div>`;
    }
    accordionHTML += '</div>';
    showModal("Basic Medicines to Carry", "", accordionHTML);

    modal.querySelectorAll('.accordion-item').forEach(item => {
        item.querySelector('.accordion-header').addEventListener('click', () => {
            const currentlyActive = modal.querySelector('.accordion-item.active');
            if (currentlyActive && currentlyActive !== item) currentlyActive.classList.remove('active');
            item.classList.toggle('active');
        });
    });
}

function showFundraisingModal(event) {
    if (event) event.preventDefault();
    const content = `<p style="margin-bottom: 20px;">Your contribution can make a significant difference in providing relief to those affected by disasters. Please consider donating to these official, trusted organizations.</p><div class="donation-links-container"><a href="https://pmnrf.gov.in/en/" target="_blank" rel="noopener noreferrer" class="donation-link-card"><h4>Prime Minister's National Relief Fund (PMNRF)</h4><p>A trusted national fund for providing immediate relief to families of victims of natural calamities.</p><span class="donation-link-cta">Visit Website &rarr;</span></a><a href="https://www.ndrf.gov.in/" target="_blank" rel="noopener noreferrer" class="donation-link-card"><h4>National Disaster Response Force (NDRF)</h4><p>Contribute to support the operational efforts of the primary rescue force in India.</p><span class="donation-link-cta">Visit Website &rarr;</span></a></div><p style="font-size: 0.8em; color: var(--text-secondary); text-align: center; margin-top: 25px;"><i>Please note: Disaster Ready India does not collect any funds directly. All links lead to official government portals.</i></p>`;
    showModal('Support Disaster Relief', 'Every contribution helps save lives.', content);
}

function showLanguageModal() {
    let gridHtml = '<div class="language-grid">';
    indianLanguages.forEach(lang => {
        gridHtml += `<button class="language-option" onclick="selectLanguage('${lang}')">${lang}</button>`;
    });
    gridHtml += '</div>';
    showModal('Select Language', 'Choose your preferred language.', gridHtml);
}

function showFamilyPlanModal(event) {
    if (event) event.preventDefault();
    const { contacts, meetingPoint, notes } = userProgress.plan;
    const content = `
        <div class="family-plan-form-group">
            <label for="emergency-contacts">Emergency Contacts</label>
            <textarea id="emergency-contacts" class="family-plan-textarea" placeholder="e.g., Doctor: 98XXXXXXX, Neighbor: 97XXXXXXX">${contacts}</textarea>
        </div>
        <div class="family-plan-form-group">
            <label for="safe-meeting-point">Safe Meeting Point</label>
            <textarea id="safe-meeting-point" class="family-plan-textarea" placeholder="e.g., The old banyan tree at the community park.">${meetingPoint}</textarea>
        </div>
        <div class="family-plan-form-group">
            <label for="important-notes">Important Notes</label>
            <textarea id="important-notes" class="family-plan-textarea" placeholder="e.g., Remember to turn off the gas main. Pet food is in the bottom cabinet.">${notes}</textarea>
        </div>
        <button class="generic-button" onclick="saveFamilyPlan()">Save Plan</button>
    `;
    showModal('My Family Emergency Plan', 'Fill this out and share it with your family.', content);
}

function saveFamilyPlan() {
    userProgress.plan.contacts = document.getElementById('emergency-contacts').value;
    userProgress.plan.meetingPoint = document.getElementById('safe-meeting-point').value;
    userProgress.plan.notes = document.getElementById('important-notes').value;
    saveUserProgress();
    alert('Your family plan has been saved!');
    hideModal();
}

// --- QUIZ LOGIC ---
let currentQuiz = {};
function startQuiz(topic) {
    if (topic === 'CaseStudy' || !quizData[topic]) {
        // The CaseStudy module has no quiz.
        // Its completion is handled when the article is read.
        return;
    }
    currentQuiz = { topic, questions: [...quizData[topic]], score: 0, currentQ: 0 };
    const content = `<div id="quiz-container" class="quiz-container"><div id="quiz-question" class="quiz-question"></div><div id="quiz-options" class="quiz-options"></div><div id="quiz-feedback" class="quiz-feedback" style="margin-top: 15px; font-weight: 600;"></div><button class="generic-button" id="quiz-next-btn" style="display:none; margin-top:20px;">Next</button></div><div id="quiz-results" class="quiz-results" style="display:none; text-align:center;"></div>`;
    showModal(`Quiz: ${topic}`, 'Test your knowledge.', content);
    displayQuestion();
}
function displayQuestion() {
    if (currentQuiz.currentQ >= currentQuiz.questions.length) { showQuizResults(); return; }
    const qData = currentQuiz.questions[currentQuiz.currentQ];
    const options = [qData.a, ...qData.o].sort(() => Math.random() - 0.5);
    document.getElementById('quiz-question').textContent = qData.q;
    const optionsContainer = document.getElementById('quiz-options');
    optionsContainer.innerHTML = '';
    options.forEach(opt => {
        const btn = document.createElement('button'); btn.textContent = opt;
        btn.onclick = () => selectAnswer(btn, opt === qData.a);
        btn.className = 'generic-button'; // Re-use button style
        btn.style.width = '100%';
        btn.style.marginBottom = '10px';
        btn.style.backgroundColor = 'var(--tertiary-bg)';
        optionsContainer.appendChild(btn);
    });
    document.getElementById('quiz-feedback').textContent = '';
    document.getElementById('quiz-next-btn').style.display = 'none';
}
function selectAnswer(btn, isCorrect) {
    document.querySelectorAll('#quiz-options button').forEach(b => b.disabled = true);
    if (isCorrect) { btn.style.backgroundColor = 'var(--accent-green)'; currentQuiz.score++; } else { btn.style.backgroundColor = 'var(--accent-red)'; }
    currentQuiz.currentQ++;
    const nextBtn = document.getElementById('quiz-next-btn');
    nextBtn.style.display = 'inline-block';
    nextBtn.onclick = displayQuestion;
}
function showQuizResults() {
    document.getElementById('quiz-container').style.display = 'none';
    const resultsEl = document.getElementById('quiz-results');
    resultsEl.style.display = 'block';
    const points = learningModules[currentQuiz.topic].points;
    const quizPassed = (currentQuiz.score / currentQuiz.questions.length) >= 0.5;
    
    if (quizPassed && !userProgress.completedQuizzes.includes('module_' + currentQuiz.topic)) {
        userProgress.completedQuizzes.push('module_' + currentQuiz.topic); 
        userProgress.points += points;
        
        const topic = currentQuiz.topic;
        const isArticleRead = userProgress.readArticles.includes('module_' + topic);
        const isDrillDone = (topic === 'CaseStudy') || userProgress.completedDrills.includes('module_' + topic);

        if (isArticleRead && isDrillDone) {
            userProgress.badges = userProgress.badges.filter(b => b !== topic);
            userProgress.badges.push(topic);
            updateMapVisualProgress();
        }
        saveUserProgress();
        resultsEl.innerHTML = `<h3>Quiz Complete!</h3><p>You passed! You scored ${currentQuiz.score}/${currentQuiz.questions.length} and earned ${points} points!</p><button class="generic-button" onclick="hideModal()">Close</button>`;
    } else if (quizPassed) {
         resultsEl.innerHTML = `<h3>Quiz Complete!</h3><p>You passed with a score of ${currentQuiz.score}/${currentQuiz.questions.length}. You've already earned points for this module.</p><button class="generic-button" onclick="hideModal()">Close</button>`;
    } else {
         resultsEl.innerHTML = `<h3>Quiz Failed</h3><p>You scored ${currentQuiz.score}/${currentQuiz.questions.length}. Please review the material and try again.</p><button class="generic-button" onclick="hideModal()">Close</button>`;
    }
    updateSidebarUI();
}

// --- CERTIFICATE LOGIC ---
function checkCertificateEligibility() {
    const totalModules = Object.keys(learningModules).length;
    const completedBadges = userProgress.badges.length;
    const container = document.getElementById('certificate-container');
    container.innerHTML = ''; 

    if (completedBadges >= totalModules) {
        const certButton = document.createElement('button');
        certButton.textContent = 'Download Certificate';
        certButton.className = 'certificate-button';
        certButton.onclick = generateCertificate;
        container.appendChild(certButton);
    }
}

function generateCertificate() {
    const canvas = document.createElement('canvas');
    canvas.width = 840;
    canvas.height = 594;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = '#1F2937';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = '#3B82F6';
    ctx.lineWidth = 10;
    ctx.strokeRect(10, 10, canvas.width - 20, canvas.height - 20);
    ctx.fillStyle = '#F9FAFB';
    ctx.font = 'bold 50px Inter, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('Certificate of Completion', canvas.width / 2, 120);
    ctx.font = '24px Inter, sans-serif';
    ctx.fillText('This certificate is proudly presented to', canvas.width / 2, 200);
    ctx.fillStyle = '#10B981';
    ctx.font = 'bold 60px Inter, sans-serif';
    const userName = userProgress.name || 'Valued Participant';
    ctx.fillText(userName, canvas.width / 2, 290);
    ctx.fillStyle = '#F9FAFB';
    ctx.font = '24px Inter, sans-serif';
    ctx.fillText('For successfully completing all modules and demonstrating', canvas.width / 2, 360);
    ctx.fillText('knowledge in disaster preparedness.', canvas.width / 2, 400);
    const today = new Date();
    const dateString = today.toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
    ctx.font = 'italic 20px Inter, sans-serif';
    ctx.fillText(`Awarded on: ${dateString}`, canvas.width / 2, 480);
    ctx.fillStyle = '#9CA3AF';
    ctx.fillText('Disaster Ready India', canvas.width / 2, 530);
    const link = document.createElement('a');
    link.download = `DisasterReady_Certificate_${userName.replace(' ','_')}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
}


// --- MAP LOGIC ---
function updateMapTheme() {
    if (!mapChart) return;
    const isLightMode = document.body.classList.contains('light-mode');
    const hoverColor = isLightMode ? am5.color(0x1C6EA4) : am5.color(0x4b5563);
    
    const polygonSeries = mapChart.series.getIndex(0);
    polygonSeries.mapPolygons.template.states.create("hover", { fill: hoverColor });
    updateMapVisualProgress();
}

function initMap() {
    am5.ready(function() {
        var root = am5.Root.new("chartdiv");
        root.setThemes([am5themes_Animated.new(root)]);
        mapChart = root.container.children.push(am5map.MapChart.new(root, { 
            panX: "pan", 
            panY: "pan",
            projection: am5map.geoMercator(), 
            homeZoomLevel: 1.2, 
            homeGeoPoint: { latitude: 22, longitude: 82 },
<<<<<<< HEAD
            maxZoomLevel: 16,
            maxPanOut: 0,
            wheelModifierKey: "ctrlKey" 
=======
            maxZoomLevel: 16
>>>>>>> 0728f0a2113bd324c3e4de52d9045b01bfeba077
        }));
        
        mapChart.set("wheelY", "zoom");
        
        var polygonSeries = mapChart.series.push(am5map.MapPolygonSeries.new(root, { geoJSON: am5geodata_indiaLow }));
        
        polygonSeries.mapPolygons.template.setAll({ tooltipText: "[bold]{name}[/]", interactive: true, stroke: am5.color(0xffffff), strokeWidth: 1.5 });
        
        polygonSeries.events.on("datavalidated", function() {
            updateMapVisualProgress();
        });

        updateMapTheme();

        polygonSeries.mapPolygons.template.events.on("click", (ev) => showMapInfo(ev.target.dataItem.dataContext.name));
        
        mapChart.set("zoomControl", am5map.ZoomControl.new(root, {}));
    });
}

function updateMapVisualProgress() {
    if (!mapChart || !mapChart.series.length) return;
    const polygonSeries = mapChart.series.getIndex(0);
    const isLightMode = document.body.classList.contains('light-mode');
    const defaultColor = isLightMode ? am5.color(0x33A1E0) : am5.color(0x374151);
    const completedColor = am5.color(0x059669);

    polygonSeries.mapPolygons.each(function(polygon) {
        const stateName = polygon.dataItem.dataContext.name;
        const stateData = stateDisasters[stateName];
        let isCompleted = false;

        if (stateData && stateData.primaryHazards.length > 0) {
            isCompleted = stateData.primaryHazards.every(hazard => userProgress.badges.includes(hazard));
        }
        
        polygon.set("fill", isCompleted ? completedColor : defaultColor);
    });
}

function showMapInfo(stateName) {
    const stateData = stateDisasters[stateName];
    let hazardHTML = '';
    if (stateData && stateData.primaryHazards) {
        stateData.primaryHazards.forEach(hazard => {
            hazardHTML += `<div class="hazard-item" onclick="showMapHazardArticle('${hazard}')">${hazard}</div>`;
        });
    } else { hazardHTML = '<p>No specific hazard data available.</p>'; }
    const content = `<div id="map-modal-content">${hazardHTML}</div>`;
    showModal(stateName, 'Primary hazards in this region:', content);
}

function showMapHazardArticle(hazardName) {
    const hazardData = Object.values(stateDisasters).find(s => s.details[hazardName])?.details[hazardName] || "Article not found.";
    
    let drillButtonHTML = '';
    if (drillExercises[hazardName]) {
        drillButtonHTML = `<button class="generic-button" style="margin-top: 20px;" onclick="hideModal(); setTimeout(() => showDrillDetails('${hazardName}'), 300)">Practice Drill</button>`;
    }
    
    const content = `
        <button class="generic-button" style="margin-bottom:15px;" onclick="showMapInfo(document.getElementById('modalTitle').textContent)">&larr; Back</button>
        <h3>${hazardName}</h3>
        <p>${hazardData}</p>
        ${drillButtonHTML}
        <div id="revision-points-toast"></div>
    `;

    showModal(document.getElementById('modalTitle').textContent, `About ${hazardName}`, content);
    
    if (!userProgress.revisedTopics.includes(hazardName)) {
        userProgress.points += 5;
        userProgress.revisedTopics.push(hazardName);
        saveUserProgress();
        updateSidebarUI();

        const toast = document.getElementById('revision-points-toast');
        if(toast) {
            toast.textContent = '+5 Revision Points! 🎉';
            toast.style.opacity = 1;
            toast.style.bottom = '40px';
            setTimeout(() => { 
                toast.style.opacity = 0;
                toast.style.bottom = '20px';
            }, 2000);
        }
    }
}

// --- NEW: PERSONALIZED KIT GENERATOR ---
function showKitGeneratorModal(event) {
    if (event) event.preventDefault();
    const kitProfile = userProgress.kitProfile;
    if (kitProfile && kitProfile.adults > 0) {
        displayKitChecklist();
    } else {
        displayKitForm();
    }
}

function displayKitForm() {
    const content = `
        <div id="kit-generator-view">
            <p style="text-align: center; color: var(--text-secondary); margin-bottom: 25px;">Answer a few questions to generate a personalized kit checklist for your household.</p>
            <div class="kit-form-grid">
                <div class="kit-form-group">
                    <label for="kit-adults">Number of Adults</label>
                    <input type="number" id="kit-adults" min="1" value="1">
                </div>
                <div class="kit-form-group">
                    <label for="kit-children">Number of Children</label>
                    <input type="number" id="kit-children" min="0" value="0">
                </div>
                <div class="kit-checkbox-group">
                    <input type="checkbox" id="kit-pets">
                    <label for="kit-pets">Do you have pets?</label>
                </div>
                <div class="kit-checkbox-group">
                    <input type="checkbox" id="kit-medical">
                    <label for="kit-medical">Special medical needs?</label>
                </div>
            </div>
            <button class="generic-button" onclick="generateKitChecklist()" style="width: 100%;">Generate My Checklist</button>
        </div>
    `;
    showModal("Personalize Your Emergency Kit", "", content);
}

function generateKitChecklist() {
    userProgress.kitProfile.adults = parseInt(document.getElementById('kit-adults').value) || 1;
    userProgress.kitProfile.children = parseInt(document.getElementById('kit-children').value) || 0;
    userProgress.kitProfile.pets = document.getElementById('kit-pets').checked;
    userProgress.kitProfile.medical = document.getElementById('kit-medical').checked;
    userProgress.kitProfile.checkedItems = []; // Reset checklist on new generation
    saveUserProgress();
    displayKitChecklist();
}

function displayKitChecklist() {
    const { adults, children, pets, medical, checkedItems } = userProgress.kitProfile;
    const totalPeople = adults + children;
    
    let checklistItems = [
        `Water (${totalPeople * 3} Litres for 3 days)`,
        `Non-perishable food (${totalPeople * 3} person-days)`,
        "First Aid Kit", "Flashlight & Extra Batteries", "Battery-powered or Hand-crank Radio",
        "Whistle to signal for help", "Dust Masks", "Moist Towelettes & Garbage Bags", "Local Maps"
    ];
    if (children > 0) checklistItems.push("Diapers, Wipes & Baby Formula", "Toys, Books, Games for Children");
    if (pets) checklistItems.push("Pet food and extra water", "Leash or Carrier");
    if (medical) checklistItems.push("Prescription Medications (7-day supply)", "Copies of Prescriptions");

    const itemsHTML = checklistItems.map(item => {
        const isChecked = checkedItems.includes(item);
        return `<li class="${isChecked ? 'checked' : ''}" onclick="toggleKitItem(this, '${item}')">
                    <input type="checkbox" ${isChecked ? 'checked' : ''} readonly>
                    <label>${item}</label>
                </li>`;
    }).join('');

    const content = `
        <div id="kit-checklist-view">
            <div class="kit-progress-bar-container">
                <div id="kit-progress-bar" class="kit-progress-bar"></div>
            </div>
            <ul id="kit-checklist">${itemsHTML}</ul>
            <div class="kit-actions">
                <button class="generic-button" onclick="window.print()">Print Checklist</button>
                <button class="generic-button" onclick="resetKitProfile()" style="background-color: var(--tertiary-bg);">Edit Profile</button>
            </div>
        </div>
    `;
    showModal("Your Emergency Kit Checklist", "Check off items as you gather them.", content);
    updateKitProgressBar();
}

function toggleKitItem(liElement, itemText) {
    const checkbox = liElement.querySelector('input');
    const isChecked = !checkbox.checked; // The new state
    const checkedItems = userProgress.kitProfile.checkedItems;
    
    if (isChecked) {
        if (!checkedItems.includes(itemText)) checkedItems.push(itemText);
    } else {
        const index = checkedItems.indexOf(itemText);
        if (index > -1) checkedItems.splice(index, 1);
    }
    
    liElement.classList.toggle('checked', isChecked);
    checkbox.checked = isChecked;
    
    saveUserProgress();
    updateKitProgressBar();
}

function updateKitProgressBar() {
    const totalItems = document.querySelectorAll('#kit-checklist li').length;
    if (totalItems === 0) return;
    const checkedCount = userProgress.kitProfile.checkedItems.length;
    const percentage = (checkedCount / totalItems) * 100;
    document.getElementById('kit-progress-bar').style.width = `${percentage}%`;
}

function resetKitProfile() {
    userProgress.kitProfile = { adults: 0, children: 0, pets: false, medical: false, checkedItems: [] };
    saveUserProgress();
    displayKitForm();
}