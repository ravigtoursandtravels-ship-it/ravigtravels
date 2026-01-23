
const packagesByDays = {
  1: {
    "Coimbatore Local – 100km": {
      km: "100 km",
      prices: { "Sedan (4+1)": 2800, "Innova (7+1)": 3800, "Crysta (7+1)": 4500, "Tempo Traveller 14-Seater": 5500, "Tempo Traveller 18-Seater": 6000, "Urbania 12-Seater/16-Seater": 9000 },
      nights: 0,
      itinerary: [
        "Day 1: GD Car Museum, Perur Temple, Isha Yoga Center, Marudhamalai Temple, VOC Park Zoo — Return Coimbatore"
      ]
    },

    "Coimbatore → Palani – 250km": {
      km: "250 km",
      prices: { "Sedan (4+1)": 4500, "Innova (7+1)": 6000, "Crysta (7+1)": 7400, "Tempo Traveller 14-Seater": 8500, "Tempo Traveller 18-Seater": 9500, "Urbania 12-Seater/16-Seater": 14000 },
      nights: 0,
      itinerary: [
        "Day 1: Palani Temple, Thiru Avinankudi Temple, Kanniyamman Temple, Local shopping, Hill views — Return Coimbatore"
      ]
    },

    "Coimbatore → Guruvayur – 350km": {
      km: "350 km",
      prices: { "Sedan (4+1)": 6500, "Innova (7+1)": 8500, "Crysta (7+1)": 9500, "Tempo Traveller 14-Seater": 11500, "Tempo Traveller 18-Seater": 12500, "Urbania 12-Seater/16-Seater": 18000 },
      nights: 0,
      itinerary: [
        "Day 1: Guruvayur Temple, Mammiyoor Temple, Parthasarathy Temple, Punnathur Elephant Sanctuary, Local shopping — Return Coimbatore"
      ]
    },

    "Coimbatore → TopSlip – 300km": {
      km: "300 km",
      prices: { "Sedan (4+1)": 5000, "Innova (7+1)": 7000, "Crysta (7+1)": 8500, "Tempo Traveller 14-Seater": 11000, "Tempo Traveller 18-Seater": 12000, "Urbania 12-Seater/16-Seater": 17000 },
      nights: 0,
      itinerary: [
        "Day 1: TopSlip Forest, Masaniamman Temple, Elephant feeding camp, Valparai viewpoints (optional), Monkey Falls — Return Coimbatore"
      ]
    },

    "Coimbatore → Ooty – 300km": {
      km: "300 km",
      prices: { "Sedan (4+1)": 5500, "Innova (7+1)": 8000, "Crysta (7+1)": 9500, "Tempo Traveller 14-Seater": 11500, "Tempo Traveller 18-Seater": 13000, "Urbania 12-Seater/16-Seater": 18000 },
      nights: 0,
      itinerary: [
        "Day 1: Ooty Lake, Rose Garden, Botanical Garden, Doddabetta Peak, Tea Factory — Return to Coimbatore"
      ]
    }
  },

  // =================== 2 DAYS ===================
  2: {
    "Coimbatore → Ooty → Coonoor – 350km": {
      km: "350 km",
      prices: { "Sedan (4+1)": 7500, "Innova (7+1)": 11000, "Crysta (7+1)": 12500, "Tempo Traveller 14-Seater": 15000, "Tempo Traveller 18-Seater": 17000, "Urbania 12-Seater/16-Seater": 25000 },
      nights: 1,
      itinerary: [
        "Day 1: Ooty Lake, Botanical Garden, Rose Garden, Tea Factory, Doddabetta Peak — Overmight Stay in Ooty",
        "Day 2: Coonoor – Sim’s Park, Dolphin’s Nose, Lamb’s Rock, Tea Garden Viewpoint, Wellington Market — Return Coimbatore"
      ]
    },

    "Coimbatore → Kodaikanal – 500km": {
      km: "500 km",
      prices: { "Sedan (4+1)": 9000, "Innova (7+1)": 12500, "Crysta (7+1)": 14500, "Tempo Traveller 14-Seater": 18000, "Tempo Traveller 18-Seater": 20000, "Urbania 12-Seater/16-Seater": 29500 },
      nights: 1,
      itinerary: [
        "Day 1: Coaker's Walk, Bryant Park, Kodai Lake, Moir Point, Upper Lake View — Overmight Stay",
        "Day 2: Pine Forest, Pillar Rocks, Guna Caves, Chocolate Factory, Kurinji Andavar Temple — Return Coimbatore"
      ]
    },

    "Coimbatore → Valparai – 350km": {
      km: "350 km",
      prices: { "Sedan (4+1)": 8000, "Innova (7+1)": 11000, "Crysta (7+1)": 13500, "Tempo Traveller 14-Seater": 15000, "Tempo Traveller 18-Seater": 18000, "Urbania 12-Seater/16-Seater": 26000 },
      nights: 1,
      itinerary: [
        "Day 1: Loam’s Viewpoint, Monkey Falls, Tea Estates View, Nallamudi Viewpoint, Balaji Temple — Overmight Stay",
        "Day 2: Chinna Kallar Falls, Tiger Valley, Aliyar Dam Park, Udumalpet viewpoints — Return Coimbatore"
      ]
    },

    "Coimbatore → Munnar – 500km": {
      km: "500 km",
      prices: { "Sedan (4+1)": 9500, "Innova (7+1)": 12500, "Crysta (7+1)": 15000, "Tempo Traveller 14-Seater": 19000, "Tempo Traveller 18-Seater": 21000, "Urbania 12-Seater/16-Seater": 31000 },
      nights: 1,
      itinerary: [
        "Day 1: Tea Gardens, Flower Garden, Photo Point, Attukal Waterfalls, Hydel Park — Overmight Stay",
        "Day 2: Eravikulam National Park, Mattupetty Dam, Echo Point, Kundala Lake, Tea Museum — Return Coimbatore"
      ]
    },

    "Coimbatore → Mysore – 550km": {
      km: "550 km",
      prices: { "Sedan (4+1)": 11000, "Innova (7+1)": 15000, "Crysta (7+1)": 18000, "Tempo Traveller 14-Seater": 22000, "Tempo Traveller 18-Seater": 24000, "Urbania 12-Seater/16-Seater": 34000 },
      nights: 1,
      itinerary: [
        "Day 1: Mysore Palace, Chamundi Hills, Zoo, Jaganmohan Palace, Local Market — Overmight Stay",
        "Day 2: Brindavan Gardens, St. Philomena Church, Sand Museum, Rail Museum, Return Journey — Return Coimbatore"
      ]
    },

    "Coimbatore → Cochin – 500km": {
      km: "500 km",
      prices: { "Sedan (4+1)": 10000, "Innova (7+1)": 13500, "Crysta (7+1)": 15000, "Tempo Traveller 14-Seater": 18000, "Tempo Traveller 18-Seater": 20000, "Urbania 12-Seater/16-Seater": 30000 },
      nights: 1,
      itinerary: [
        "Day 1: Fort Kochi Beach, Chinese Fishing Nets, Mattancherry Palace, Jew Town, Marine Drive — Overmight Stay",
        "Day 2: Lulu Mall, Hill Palace Museum, Cherai Beach, Local shopping — Return Coimbatore"
      ]
    }
  },

  // =================== 3 DAYS ===================
  3: {
    "Coimbatore → Ooty – 350km": {
      km: "350 km",
      prices: { "Sedan (4+1)": 9500, "Innova (7+1)": 13500, "Crysta (7+1)": 16000, "Tempo Traveller 14-Seater": 18500, "Tempo Traveller 18-Seater": 21500, "Urbania 12-Seater/16-Seater": 32000 },
      nights: 2,
      itinerary: [
        "Day 1: Ooty Lake, Rose Garden, Botanical Garden, Doddabetta Peak, Tea Factory — Overmight Stay",
        "Day 2: Pykara Lake, Pykara Falls, Wenlock Downs, Shooting Spot, 9th Mile — Overmight Stay",
        "Day 3: Coonoor: Sim's Park, Dolphin’s Nose, Lamb's Rock, Tea Garden, Coonoor Lake — Return Coimbatore"
      ]
    },

    "Coimbatore → Kodaikanal – 550km": {
      km: "550 km",
      prices: { "Sedan (4+1)": 11000, "Innova (7+1)": 15500, "Crysta (7+1)": 18000, "Tempo Traveller 14-Seater": 22000, "Tempo Traveller 18-Seater": 25000, "Urbania 12-Seater/16-Seater": 37000 },
      nights: 2,
      itinerary: [
        "Day 1: Coaker's Walk, Bryant Park, Kodai Lake, Moir Point, Upper Lake View — Overmight Stay",
        "Day 2: Pine Forest, Guna Caves, Pillar Rocks, Devil's Kitchen, Kurinji Temple — Overmight Stay",
        "Day 3: Silver Cascade, Vattakanal Viewpoint, Shopping — Return Coimbatore"
      ]
    },

    "Coimbatore → Valparai & Athirapally – 500km": {
      km: "500 km",
      prices: { "Sedan (4+1)": 11500, "Innova (7+1)": 15500, "Crysta (7+1)": 18000, "Tempo Traveller 14-Seater": 21000, "Tempo Traveller 18-Seater": 24500, "Urbania 12-Seater/16-Seater": 36000 },
      nights: 2,
      itinerary: [
        "Day 1: Loam’s Viewpoint, Monkey Falls, Tea Estates, Tiger Valley, Balaji Temple — Overmight Stay",
        "Day 2: Nallamudi Viewpoint, Chinna Kallar Falls, Valparai Sightseeing — Overmight Stay",
        "Day 3: Athirapally Waterfalls, Vazhachal Falls, Charpa Falls — Return Coimbatore"
      ]
    },

    "Coimbatore → Munnar – 550km": {
      km: "550 km",
      prices: { "Sedan (4+1)": 12000, "Innova (7+1)": 16000, "Crysta (7+1)": 18500, "Tempo Traveller 14-Seater": 22500, "Tempo Traveller 18-Seater": 26500, "Urbania 12-Seater/16-Seater": 38000 },
      nights: 2,
      itinerary: [
        "Day 1: Tea Gardens, Hydel Park, Attukal Waterfalls, Blossom Park, Photo Point — Overmight Stay",
        "Day 2: Eravikulam National Park, Mattupetty Dam, Echo Point, Kundala Lake, Elephant Camp — Overmight Stay",
        "Day 3: Tea Museum, Shopping, Viewpoints — Return Coimbatore"
      ]
    },

    "Coimbatore → Madurai → Rameshwaram – 900km": {
      km: "900 km",
      prices: { "Sedan (4+1)": 16000, "Innova (7+1)": 21500, "Crysta (7+1)": 24500, "Tempo Traveller 14-Seater": 29000, "Tempo Traveller 18-Seater": 32000, "Urbania 12-Seater/16-Seater": 48000 },
      nights: 2,
      itinerary: [
        "Day 1: Madurai — Meenakshi Amman Temple, Thirumalai Nayakar Palace, Alagar Temple, Gandhi Museum, Market — Overmight Stay",
        "Day 2: Rameshwaram — Ramanathaswamy Temple, Agni Theertham, APJ House, Pamban Bridge, Dhanushkodi — Overmight Stay",
        "Day 3: Return via Devipattinam / sightseeing — Return Coimbatore"
      ]
    },

    "Coimbatore → Vagamon – 700km": {
      km: "700 km",
      prices: { "Sedan (4+1)": 14500, "Innova (7+1)": 18500, "Crysta (7+1)": 21500, "Tempo Traveller 14-Seater": 29000, "Tempo Traveller 18-Seater": 32500, "Urbania 12-Seater/16-Seater": 48000 },
      nights: 2,
      itinerary: [
        "Day 1: Vagamon Meadows, Kurisumala, Pine Forest, Suicide Point, Tea Estates — Overmight Stay",
        "Day 2: Murugan Mala, Vagamon Lake, Thangalpara, Scenic Viewpoints, Adventure Park — Overmight Stay",
        "Day 3: Return sightseeing & departure — Return Coimbatore"
      ]
    }
  },

  // =================== 4 DAYS ===================
  4: {
    "Coimbatore → Ooty – 400km": {
      km: "400 km",
      prices: { "Sedan (4+1)": 12500, "Innova (7+1)": 16500, "Crysta (7+1)": 20000, "Tempo Traveller 14-Seater": 23500, "Tempo Traveller 18-Seater": 26500, "Urbania 12-Seater/16-Seater": 41000 },
      nights: 3,
      itinerary: [
        "Day 1: Ooty Lake, Botanical Garden, Rose Garden, Doddabetta Peak, Tea Factory — Overmight Stay",
        "Day 2: Pykara Lake, Pykara Falls, 9th Mile, Wenlock Downs, Shooting Spot — Overmight Stay",
        "Day 3: Coonoor – Sim's Park, Dolphin's Nose, Lamb's Rock, Tea Gardens, Wellington Market — Overmight Stay",
        "Day 4: Local shopping, viewpoints — Return Coimbatore"
      ]
    },

    "Coimbatore → Kodaikanal – 550km": {
      km: "550 km",
      prices: { "Sedan (4+1)": 13500, "Innova (7+1)": 18500, "Crysta (7+1)": 21500, "Tempo Traveller 14-Seater": 26000, "Tempo Traveller 18-Seater": 29000, "Urbania 12-Seater/16-Seater": 44000 },
      nights: 3,
      itinerary: [
        "Day 1: Coaker's Walk, Bryant Park, Kodai Lake, Moir Point, Upper Lake — Overmight Stay",
        "Day 2: Pine Forest, Guna Caves, Pillar Rocks, Kurinji Temple, Silent Valley View — Overmight Stay",
        "Day 3: Vattakanal Viewpoint, Silver Cascade, Dolphin Nose (optional), Bear Shola Falls — Overmight Stay",
        "Day 4: Chocolate factory, Shopping — Return Coimbatore"
      ]
    },

    "Coimbatore → Munnar – 550km": {
      km: "550 km",
      prices: { "Sedan (4+1)": 14500, "Innova (7+1)": 19000, "Crysta (7+1)": 22000, "Tempo Traveller 14-Seater": 27000, "Tempo Traveller 18-Seater": 30000, "Urbania 12-Seater/16-Seater": 45000 },
      nights: 3,
      itinerary: [
        "Day 1: Tea Gardens, Flower Garden, Hydel Park, Attukal Waterfalls, Viewpoints — Overmight Stay",
        "Day 2: Eravikulam National Park, Mattupetty Dam, Echo Point, Kundala Lake, Elephant Ride — Overmight Stay",
        "Day 3: Top Station, Gap Road Viewpoint, Tea Museum, Local explorations — Overmight Stay",
        "Day 4: Shopping & departure — Return Coimbatore"
      ]
    },

    "Coimbatore → Ooty → Mysore → Bangalore – 1100km": {
      km: "1100 km",
      prices: { "Sedan (4+1)": 21000, "Innova (7+1)": 29000, "Crysta (7+1)": 33000, "Tempo Traveller 14-Seater": 42000, "Tempo Traveller 18-Seater": 46000, "Urbania 12-Seater/16-Seater": 64000 },
      nights: 3,
      itinerary: [
        "Day 1: Ooty — Lake, Botanical Garden, Doddabetta, Tea Factory — Overmight Stay",
        "Day 2: Mysore — Palace, Chamundi Hills, Market, Zoo — Overmight Stay",
        "Day 3: Bangalore — Cubbon Park, MG Road, Lalbagh, Shopping — Overmight Stay",
        "Day 4: Return sightseeing & departure — Return Coimbatore"
      ]
    },

    "Coimbatore → Kodaikanal → Madurai – 800km": {
      km: "800 km",
      prices: { "Sedan (4+1)": 17000, "Innova (7+1)": 22500, "Crysta (7+1)": 26000, "Tempo Traveller 14-Seater": 31000, "Tempo Traveller 18-Seater": 34500, "Urbania 12-Seater/16-Seater": 51000 },
      nights: 3,
      itinerary: [
        "Day 1: Kodaikanal sightseeing — Coaker’s Walk, Bryant Park, Kodai Lake — Overmight Stay",
        "Day 2: Pine Forest, Pillar Rocks, Kurinji Temple, Vattakanal Viewpoint — Overmight Stay",
        "Day 3: Madurai — Meenakshi Temple, Palace, Alagar Temple, Market — Overmight Stay",
        "Day 4: Return sightseeing & departure — Return Coimbatore"
      ]
    },

    "Coimbatore → Mysore → Coorg – 1000 km": {
      km: "1000 km",
      prices: { "Sedan (4+1)": 19000, "Innova (7+1)": 26500, "Crysta (7+1)": 30500, "Tempo Traveller 14-Seater": 39000, "Tempo Traveller 18-Seater": 43000, "Urbania 12-Seater/16-Seater": 61000 },
      nights: 3,
      itinerary: [
        "Day 1: Mysore — Palace, Chamundi Hills, Zoo — Overmight Stay",
        "Day 2: Coorg — Abbey Falls, Raja’s Seat, Coffee Plantations, Viewpoints — Overmight Stay",
        "Day 3: Golden Temple, Mandalpatti Jeep Safari, Coorg Local — Overmight Stay",
        "Day 4: Return sightseeing & departure — Return Coimbatore"
      ]
    }
  },

  // =================== 5 DAYS ===================
  5: {
    "Coimbatore → Ooty → Coonoor → Mudhumalai – 500km": {
      km: "500 km",
      prices: { "Sedan (4+1)": 15500, "Innova (7+1)": 21000, "Crysta (7+1)": 24500, "Tempo Traveller 14-Seater": 29000, "Tempo Traveller 18-Seater": 32000, "Urbania 12-Seater/16-Seater": 50000 },
      nights: 4,
      itinerary: [
        "Day 1: Ooty Lake, Rose Garden, Botanical Garden, Doddabetta, Tea Factory — Overmight Stay",
        "Day 2: Pykara Lake, Pykara Falls, 6th Mile, 9th Mile, Wenlock Downs — Overmight Stay",
        "Day 3: Coonoor — Sim's Park, Dolphin’s Nose, Lamb’s Rock, Tea Gardens, Coonoor Lake — Overmight Stay",
        "Day 4: Mudumalai Safari, Theppakadu Elephant Camp, Bandipur crossing, Viewpoints — Overmight Stay",
        "Day 5: Return sightseeing & departure — Return Coimbatore"
      ]
    },

    "Coimbatore → Ooty → Wayanad – 800 km": {
      km: "800 km",
      prices: { "Sedan (4+1)": 18500, "Innova (7+1)": 25000, "Crysta (7+1)": 29000, "Tempo Traveller 14-Seater": 35000, "Tempo Traveller 18-Seater": 39000, "Urbania 12-Seater/16-Seater": 59000 },
      nights: 4,
      itinerary: [
        "Day 1: Ooty sightseeing — Lake, Garden, Peaks, Tea Factory — Overmight Stay",
        "Day 2: Coonoor — Sim’s Park, Lamb’s Rock, Dolphin’s Nose — Overmight Stay",
        "Day 3: Wayanad — Pookode Lake, Lakkidi Viewpoint, Chain Tree — Overmight Stay",
        "Day 4: Edakkal Caves, Soochipara Falls, Banasura Sagar Dam — Overmight Stay",
        "Day 5: Return sightseeing & departure — Return Coimbatore"
      ]
    },

    "Coimbatore → Ooty → Kodaikanal – 800 km": {
      km: "800 km",
      prices: { "Sedan (4+1)": 18500, "Innova (7+1)": 25000, "Crysta (7+1)": 29000, "Tempo Traveller 14-Seater": 35000, "Tempo Traveller 18-Seater": 39000, "Urbania 12-Seater/16-Seater": 59000 },
      nights: 4,
      itinerary: [
        "Day 1: Ooty — Gardens, Lake, Peak, Tea Factory — Overmight Stay",
        "Day 2: Ooty → Kodaikanal transfer & local leisure — Overmight Stay",
        "Day 3: Coaker's Walk, Bryant Park, Kodai Lake, Moir Point, Silent Valley — Overmight Stay",
        "Day 4: Pine Forest, Guna Caves, Pillar Rocks, Kurinji Temple — Overmight Stay",
        "Day 5: Return sightseeing & departure — Return Coimbatore"
      ]
    },

    "Coimbatore → Ooty → Munnar – 900 km": {
      km: "900 km",
      prices: { "Sedan (4+1)": 19500, "Innova (7+1)": 26500, "Crysta (7+1)": 30500, "Tempo Traveller 14-Seater": 36500, "Tempo Traveller 18-Seater": 41000, "Urbania 12-Seater/16-Seater": 61000 },
      nights: 4,
      itinerary: [
        "Day 1: Ooty sightseeing — Lake, Garden, Peak, Tea Factory — Overmight Stay",
        "Day 2: Coonoor — Sim’s Park, Dolphin’s Nose, Lamb’s Rock — Overmight Stay",
        "Day 3: Munnar arrival — Tea Gardens, Blossom Park, Attukal Falls — Overmight Stay",
        "Day 4: Eravikulam, Mattupetty, Echo Point, Kundala Lake — Overmight Stay",
        "Day 5: Return sightseeing & departure — Return Coimbatore"
      ]
    },

    "Coimbatore → Kodaikanal → Madurai → Rameshwaram – 1200 km": {
      km: "1200 km",
      prices: { "Sedan (4+1)": 23000, "Innova (7+1)": 30500, "Crysta (7+1)": 35500, "Tempo Traveller 14-Seater": 42000, "Tempo Traveller 18-Seater": 47000, "Urbania 12-Seater/16-Seater": 68500 },
      nights: 4,
      itinerary: [
        "Day 1: Kodaikanal — Coaker’s Walk, Bryant Park, Lake, Moir Point — Overmight Stay",
        "Day 2: Pine Forest, Guna Caves, Pillar Rocks, Kurinji Temple — Overmight Stay",
        "Day 3: Madurai — Meenakshi Temple, Palace, Gandhi Museum — Overmight Stay",
        "Day 4: Rameshwaram — Temple, Dhanushkodi, Pamban, APJ House — Overmight Stay",
        "Day 5: Return sightseeing & departure — Return Coimbatore"
      ]
    },

    "Coimbatore → Ooty → Coorg → Mysore – 1200 km": {
      km: "1200 km",
      prices: { "Sedan (4+1)": 22500, "Innova (7+1)": 32000, "Crysta (7+1)": 36000, "Tempo Traveller 14-Seater": 46000, "Tempo Traveller 18-Seater": 51000, "Urbania 12-Seater/16-Seater": 72500 },
      nights: 4,
      itinerary: [
        "Day 1: Ooty sightseeing — Garden, Lake, Peak, Tea Factory — Overmight Stay",
        "Day 2: Coonoor — Sim’s Park, Lamb’s Rock, Tea Gardens — Overmight Stay",
        "Day 3: Coorg — Abbey Falls, Raja’s Seat, Coffee Plantations — Overmight Stay",
        "Day 4: Mysore — Palace, Zoo, Chamundi Hill, Brindavan Garden — Overmight Stay",
        "Day 5: Return sightseeing & departure — Return Coimbatore"
      ]
    }
  }
};


/* =========================
   DOM refs
=========================*/
const tabs = Array.from(document.querySelectorAll(".pkg-tab"));
const routeSelect = document.getElementById("routeSelect");
const vehicleSelect = document.getElementById("vehicleSelect");
const accomBox = document.getElementById("accomBox");
const accomToggle = document.getElementById("accomToggle");
const accomHotel = document.getElementById("accomHotel");
const accomOccupancy = document.getElementById("accomOccupancy");
const accomRooms = document.getElementById("accomRooms");
const fixedNightsDisplay = document.getElementById("fixedNightsDisplay");
const roomWarning = document.getElementById("roomWarning"); // may be null

const priceTitle = document.getElementById("priceTitle");
const finalPrice = document.getElementById("finalPrice");
const infoBox = document.getElementById("infoBox");
const inclusionList = document.getElementById("inclusionList");
const exclusionList = document.getElementById("exclusionList");
const itineraryBox = document.getElementById("itineraryBox");
const itineraryContent = document.getElementById("itineraryContent");
const bookNowBtn = document.getElementById("bookNowBtn");
const bookingModal = new bootstrap.Modal(document.getElementById("bookingModal"));

bookNowBtn.addEventListener("click", () => {
  bookingModal.show();
});

/* Guard required DOM */
if (!routeSelect || !vehicleSelect || !priceTitle || !finalPrice || !inclusionList || !exclusionList || !itineraryContent || !bookNowBtn) {
  console.error("tour-package.js: required DOM elements missing. Check IDs in HTML.");
}

/* =========================
   State
=========================*/
let activeDays = 1;
let activePkgMap = packagesByDays[1] || {};

/* =========================
   Helpers
=========================*/
function escapeHTML(s) {
  return String(s).replace(/[&<>"]/g, c => ({ '&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;' }[c]));
}

function displayLabel(routeKey) {
  if (!routeKey) return "";
  const parts = routeKey.split("–");
  return parts[0].trim();
}

function clampRoomsValue(val) {
  // val may be "", number, string
  if (val === "") return ""; // allow clearing in field
  const n = Number(val) || 0;
  if (n < 1) return 1;
  if (n > 20) return 20;
  return Math.floor(n);
}

function roomsNumberForCalc() {
  // treat empty as 1 for calculations
  if (!accomRooms) return 1;
  const v = accomRooms.value;
  if (v === "" || isNaN(Number(v))) return 1;
  return Math.max(1, Math.min(20, Math.floor(Number(v))));
}

/* -------------------------
   Load routes for activeDays
-------------------------*/
function loadRoutes() {
  activePkgMap = packagesByDays[activeDays] || {};
  // populate route select
  if (routeSelect) {
    routeSelect.innerHTML = "<option value=''>Select route...</option>";
    Object.keys(activePkgMap).forEach(key => {
      const opt = document.createElement("option");
      opt.value = key;
      opt.textContent = displayLabel(key);
      routeSelect.appendChild(opt);
    });

    // reset selection UI
    routeSelect.value = "";
  }

  // reset vehicle list
  if (vehicleSelect) vehicleSelect.innerHTML = "<option value=''>Choose a vehicle...</option>";

  // reset price & info & itinerary
  priceTitle.textContent = "Select a route";
  finalPrice.textContent = "₹0";
  infoBox && infoBox.classList.add("hidden");
  itineraryBox && itineraryBox.classList.add("hidden");
  bookNowBtn && (bookNowBtn.disabled = true);

  // accommodation visibility
  if (accomBox) {
    if (activeDays > 1) {
      accomBox.style.display = "block";
      // set fixed nights based on first package in this map (if any)
      fixedNightsDisplay && (fixedNightsDisplay.value = getFixedNightsFromPkgMap());
    } else {
      accomBox.style.display = "none";
      // if accom control exists, reset it
      if (accomToggle) accomToggle.checked = false;
    }
  }
}

/* -------------------------
   Fixed nights helper
-------------------------*/
function getFixedNightsFromPkgMap() {
  // if a route selected that contains nights value, use it; else fallback to activeDays-1
  if (!routeSelect) return String(Math.max(0, activeDays - 1));
  const routeKey = routeSelect.value;
  if (routeKey && activePkgMap[routeKey] && typeof activePkgMap[routeKey].nights === "number") {
    return String(activePkgMap[routeKey].nights);
  }
  return String(Math.max(0, activeDays - 1));
}

/* -------------------------
   Load vehicles after route chosen
-------------------------*/
function loadVehicles(routeKey) {
  if (!vehicleSelect) return;
  vehicleSelect.innerHTML = "<option value=''>Choose a vehicle...</option>";
  if (!routeKey) return;
  const entry = activePkgMap[routeKey];
  if (!entry) return;
  const list = entry.prices || {};
  Object.keys(list).forEach(v => {
    const opt = document.createElement("option");
    opt.value = v;
    opt.textContent = v;
    vehicleSelect.appendChild(opt);
  });
}

/* -------------------------
   Update price and UI
-------------------------*/
function updatePriceAndUI() {
  const routeKey = routeSelect ? routeSelect.value : "";
  const vehicle = vehicleSelect ? vehicleSelect.value : "";

  // Reset when incomplete
  if (!routeKey || !vehicle) {
    finalPrice.textContent = "₹0";
    priceTitle.textContent = "Select a route";
    infoBox && infoBox.classList.add("hidden");
    itineraryBox && itineraryBox.classList.add("hidden");
    bookNowBtn && (bookNowBtn.disabled = true);
    return;
  }

  const pkg = activePkgMap[routeKey];
  if (!pkg) return;

  let base = pkg.prices[vehicle] || 0;
  let final = base;

  // accommodation addition
  if (pkg.nights > 0 && accomToggle && accomToggle.checked) {
    const rooms = roomsNumberForCalc();
    const nights = pkg.nights || (activeDays - 1);
    const rate = getHotelRate();
    final += rate * rooms * nights;
  }

  priceTitle.textContent = displayLabel(routeKey);
  finalPrice.textContent = "₹" + final.toLocaleString('en-IN');

  // show inclusions/exclusions and itinerary
  updateInclusionExclusion();
  renderItinerary(pkg);

  infoBox && infoBox.classList.remove("hidden");
  itineraryBox && itineraryBox.classList.remove("hidden");
  bookNowBtn && (bookNowBtn.disabled = false);
}

/* -------------------------
   Hotel rate
-------------------------*/
function getHotelRate() {
  if (!accomHotel || !accomOccupancy) return 0;
  const hotel = accomHotel.value;
  const occ = accomOccupancy.value;
  if (hotel === "2star") {
    return occ === "triple" ? 4000 : 3000;
  }
  if (hotel === "3star") {
    return occ === "triple" ? 5500 : 4000;
  }
  return 0;
}

/* -------------------------
   Inclusions / Exclusions
-------------------------*/
function updateInclusionExclusion() {
  // base includes
  const includes = ["Private Cab", "Local Sightseeing", "Toll & Parking Charges", "Driver Allowance"];
  const excludes = [];

  const routeKey = routeSelect ? routeSelect.value : "";
  const pkg = activePkgMap[routeKey];

  // accommodation logic: show accommodation line in include when selected (with rooms × nights)
  if (pkg && pkg.nights > 0) {
    if (accomToggle && accomToggle.checked) {
      // compute rooms and nights
      const rooms = roomsNumberForCalc();
      const nights = pkg.nights || (activeDays - 1);
      includes.splice(1, 0, `Accommodation — ${rooms} room${rooms>1? 's':''} × ${nights} night${nights>1? 's':''}`);
      // breakfast note
      if (accomHotel && accomHotel.value === "3star") {
        includes.splice(2, 0, "Complimentary Breakfast (3★)");
      } else {
        // if 2-star, breakfast excluded
        excludes.push("Breakfast (Not included for 2★)");
      }
    } else {
      // accommodation not selected
      excludes.push("Accommodation (Not Included)");
      excludes.push("Breakfast (Not included)");
    }
  } else {
    // one-day -> not applicable
    excludes.push("Accommodation (Not Included)");
    excludes.push("Breakfast (Not included)");
  }

  // always: GST fees + any service not mentioned
  excludes.unshift("GST fees");
  excludes.push("Any service not mentioned in the inclusion section");

  // render includes
  if (inclusionList) {
    inclusionList.innerHTML = "";
    includes.forEach(item => {
      const li = document.createElement("li");
      li.innerHTML = `<span class="inc-icon">✔</span><span>${escapeHTML(item)}</span>`;
      inclusionList.appendChild(li);
    });
  }

  if (exclusionList) {
    exclusionList.innerHTML = "";
    excludes.forEach(item => {
      const li = document.createElement("li");
      li.innerHTML = `<span class="exc-icon">✖</span><span>${escapeHTML(item)}</span>`;
      exclusionList.appendChild(li);
    });
  }
}

/* -------------------------
   Itinerary render
-------------------------*/
function renderItinerary(pkg) {
  if (!itineraryContent) return;
  itineraryContent.innerHTML = "";
  if (!pkg || !pkg.itinerary) return;
  pkg.itinerary.forEach(line => {
    const p = document.createElement("p");
    p.textContent = line;
    itineraryContent.appendChild(p);
  });
}

/* -------------------------
   Book Now -> WhatsApp
-------------------------*/
function bookNow() {
  const routeKey = routeSelect ? routeSelect.value : "";
  const vehicle = vehicleSelect ? vehicleSelect.value : "";
  if (!routeKey || !vehicle) { alert("Please select Route & Vehicle first."); return; }
  const pkg = activePkgMap[routeKey];

  // accom details
  let accomMsg = "Accommodation: NO";
  let accomDetails = "";
  if (pkg && pkg.nights > 0 && accomToggle && accomToggle.checked) {
    const rooms = roomsNumberForCalc();
    accomMsg = "Accommodation: YES";
    accomDetails = `\nHotel: ${accomHotel ? accomHotel.value : ''}\nOccupancy: ${accomOccupancy ? accomOccupancy.value : ''}\nRooms: ${rooms}\nNights: ${pkg.nights}`;
    if (accomHotel && accomHotel.value === "3star") accomDetails += "\nBreakfast: Complimentary (3★)";
    else accomDetails += "\nBreakfast: Not included (2★)";
  }

  const priceText = finalPrice ? finalPrice.textContent : "₹0";
  const label = displayLabel(routeKey);
  const km = (pkg && pkg.km) ? ` (${pkg.km})` : "";

  /* ------------------------------------
     Build WhatsApp Message (clean emojis + formatted itinerary)
  -------------------------------------*/

  // FORMAT ITINERARY → Each day separated with title + new line
  let itineraryText = "";
  if (pkg && pkg.itinerary) {
    itineraryText = pkg.itinerary
      .map((line, i) => {
        return `🗓 *Day ${i + 1}:*\n${line.replace(/^Day\s*\d+:\s*/i, "")}`;
      })
      .join("\n\n");
  }

  const msg =
  `Hi Ravi G Travels 👋,

  I am interested in this package:

  📍 *Package:* ${label}${km}
  🚗 *Vehicle:* ${vehicle}

  ${accomToggle && accomToggle.checked ?
  `🏨 *Hotel:* ${accomHotel.value}
  👥 *Occupancy:* ${accomOccupancy.value}
  🛏 *Rooms:* ${roomsNumberForCalc()}
  🌙 *Nights:* ${pkg.nights}
  🍳 *Breakfast:* ${accomHotel.value === "3star" ? "Complimentary" : "Not included"}`
  :
  "Accommodation: NO"
  }

  💰 *Estimated Price:* ${priceText}

  🧭 *Itinerary:*
  ${itineraryText}

  Please share booking details.`;


  const waNumber = "919944165207";
  window.open(`https://wa.me/${waNumber}?text=${encodeURIComponent(msg)}`, "_blank");
}

/* -------------------------
   Reset helpers
   - Called whenever user changes high-level selection so UI resets
-------------------------*/
function resetPriceAndInfo() {
  priceTitle.textContent = "Select a route";
  finalPrice.textContent = "₹0";
  infoBox && infoBox.classList.add("hidden");
  itineraryBox && itineraryBox.classList.add("hidden");
  bookNowBtn && (bookNowBtn.disabled = true);
}

/* -------------------------
   Event wiring
-------------------------*/
/* Tabs click -> switch activeDays, reload routes, reset fields */
tabs.forEach(btn => {
  btn.addEventListener("click", () => {
    // update active class
    tabs.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    // change activeDays
    const days = Number(btn.dataset.days || 1);
    activeDays = days;

    // reload routes and reset selections
    loadRoutes();

    // reset other fields
    if (vehicleSelect) vehicleSelect.value = "";
    if (routeSelect) routeSelect.value = "";
    if (accomToggle) accomToggle.checked = false;
    if (accomRooms) accomRooms.value = "1";
    if (fixedNightsDisplay) fixedNightsDisplay.value = (activeDays > 1) ? String(Math.max(0, activeDays - 1)) : "0";

    resetPriceAndInfo();
  });
});

/* Route change */
if (routeSelect) {
  routeSelect.addEventListener("change", () => {
    // update fixed nights display from package
    fixedNightsDisplay && (fixedNightsDisplay.value = getFixedNightsFromPkgMap());
    // load vehicles for this route
    loadVehicles(routeSelect.value);
    // clear vehicle selection
    vehicleSelect && (vehicleSelect.value = "");

    // reset price & info until vehicle chosen
    resetPriceAndInfo();
  });
}

/* Vehicle change */
if (vehicleSelect) {
  vehicleSelect.addEventListener("change", () => {
    // whenever vehicle changed update UI (or reset if no route/vehicle)
    updatePriceAndUI();
  });
}

/* Accommodation toggle */
if (accomToggle) {
  accomToggle.addEventListener("change", () => {
    // if toggled off, reset rooms to default
    if (!accomToggle.checked) {
      if (accomRooms) accomRooms.value = "1";
    }
    updatePriceAndUI();
  });
}

/* Hotel type change -> update inclusions/prices */
if (accomHotel) {
  accomHotel.addEventListener("change", () => {
    updatePriceAndUI();
  });
}

/* Occupancy change -> update hotel rate */
if (accomOccupancy) {
  accomOccupancy.addEventListener("change", () => {
    updatePriceAndUI();
  });
}

/* Rooms input: allow clearing, clamp 1..20 when blur, show warning if exceeding */
if (accomRooms) {
  // input: allow user to clear; enforce numeric chars and clamp as user types
  accomRooms.addEventListener("input", () => {
    const raw = accomRooms.value;
    // allow empty string
    if (raw === "") {
      // do not change; show no immediate error
      updatePriceAndUI();
      return;
    }
    // remove non-digit
    const cleaned = raw.replace(/[^\d]/g, "");
    if (cleaned !== raw) accomRooms.value = cleaned;
    // clamp if >20 or <1
    if (cleaned !== "") {
      let n = Math.floor(Number(cleaned) || 0);
      if (n < 1) n = 1;
      if (n > 20) {
        n = 20;
        accomRooms.value = "20";
        if (roomWarning) {
          roomWarning.style.display = "block";
          setTimeout(() => roomWarning.style.display = "none", 3000);
        }
      } else {
        accomRooms.value = String(n);
      }
    }
    updatePriceAndUI();
  });

  // blur: if empty, set to 1
  accomRooms.addEventListener("blur", () => {
    if (accomRooms.value === "") accomRooms.value = "1";
    updatePriceAndUI();
  });
}



/* Safety: initial load */
loadRoutes();
resetPriceAndInfo();
/* =========================================================
   Helpers: DateTime → DD/MM/YYYY, hh:mm AM/PM
========================================================= */
function formatDateTimeAMPM(dateTimeStr) {
  if (!dateTimeStr) return "";

  const dt = new Date(dateTimeStr);

  const day = String(dt.getDate()).padStart(2, "0");
  const month = String(dt.getMonth() + 1).padStart(2, "0");
  const year = dt.getFullYear();

  let hour = dt.getHours();
  const minute = String(dt.getMinutes()).padStart(2, "0");
  const ampm = hour >= 12 ? "PM" : "AM";
  hour = hour % 12 || 12;

  return `${day}/${month}/${year}, ${hour}:${minute} ${ampm}`;
}

/* =========================================================
   Confirm Booking (Modal) → WhatsApp
========================================================= */
const confirmBookingBtn = document.getElementById("confirmBooking");

if (confirmBookingBtn) {
  confirmBookingBtn.addEventListener("click", () => {

    const pickupLocation = document.getElementById("pickupLocation")?.value.trim();
    const pickupDateTimeRaw = document.getElementById("pickupDateTime")?.value;
    const dropLocation = document.getElementById("dropLocation")?.value.trim();

    if (!pickupLocation || !pickupDateTimeRaw || !dropLocation) {
      alert("Please fill Pickup location, Pickup date & time, and Drop location.");
      return;
    }

    const pickupDateTime = formatDateTimeAMPM(pickupDateTimeRaw);

    const routeKey = routeSelect?.value || "";
    const vehicle = vehicleSelect?.value || "";
    const pkg = activePkgMap?.[routeKey];
    const priceText = finalPrice?.textContent || "₹0";

    /* -------- Accommodation Summary -------- */
    let accomText = "🏨 Accommodation: NO";

    if (pkg && pkg.nights > 0 && accomToggle?.checked) {
      accomText =
`🏨 Hotel: ${accomHotel.value}
👥 Occupancy: ${accomOccupancy.value}
🛏 Rooms: ${roomsNumberForCalc()}
🌙 Nights: ${pkg.nights}
🍳 Breakfast: ${accomHotel.value === "3star" ? "Complimentary" : "Not included"}`;
    }

    /* -------- Itinerary Formatting -------- */
    let itineraryText = "";
    if (pkg?.itinerary?.length) {
      itineraryText = pkg.itinerary
        .map((line, i) =>
          `🗓 Day ${i + 1}:\n${line.replace(/^Day\s*\d+:\s*/i, "")}`
        )
        .join("\n\n");
    }

    /* -------- WhatsApp Message -------- */
    const message =
`Hi Ravi G Tours and Travels 👋

📦 Package: ${displayLabel(routeKey)}
🚗 Vehicle: ${vehicle}
💰 Price: ${priceText}

📍 Pickup Location: ${pickupLocation}
📅 Pickup: ${pickupDateTime}
📍 Drop Location: ${dropLocation}

${accomText}

🧭 Itinerary:
${itineraryText}

Please confirm availability.`;

    const waNumber = "919944165207";
    window.open(
      `https://wa.me/${waNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  });
}
