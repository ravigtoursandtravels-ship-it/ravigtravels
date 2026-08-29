const WHATSAPP_NUMBER = "919944165207";
const BOT_NAME = "Ravi G Assistant";

const screen = document.getElementById("screen");
const progressBar = document.getElementById("progressBar");
const app = document.querySelector(".cg-app");
const body = document.querySelector(".cg-body");

let currentStep = 0;
let totalSteps = 10;
let activeStep = null;
let composer = null;
let composerInput = null;
let composerButton = null;

const booking = {
  tripType: "Domestic",
  destinations: "",
  pickup: "",
  drop: "",
  pickupDateTime: "",
  dropDateTime: "",
  duration: "",
  adults: 1,
  childrenBelow10: 0,
  passengers: 1,
  vehicle: "",
  accommodation: "No",
  name: ""
};

const vehicleData = [
  { name:"Aura", seats:"4+1", min:1, max:4, img:"images/vehicles/aura1.webp" },
  { name:"Etios", seats:"4+1", min:1, max:4, img:"images/vehicles/etios1.webp" },
  { name:"Dzire", seats:"4+1", min:1, max:4, img:"images/vehicles/dzire1.webp" },
  { name:"Ciaz", seats:"4+1", min:1, max:4, img:"images/vehicles/ciaz1.webp" },

  { name:"Ertiga", seats:"6+1", min:1, max:7, img:"images/vehicles/ertiga1.webp" },
  { name:"Innova", seats:"7+1", min:1, max:7, img:"images/vehicles/innovo1.webp" },
  { name:"Innova Crysta", seats:"6+1 / 7+1", min:1, max:7, img:"images/vehicles/crysta1.webp" },
  { name:"Hycross", seats:"6+1", min:1, max:7, img:"images/vehicles/hycross1.webp" },

  { name:"Tempo Traveller 12", seats:"12 Seater", min:8, max:12, img:"images/vehicles/TT1.webp" },
  { name:"Tempo Traveller 14", seats:"14 Seater", min:8, max:13, img:"images/vehicles/TT2.webp" },

  { name:"Tempo Traveller 18", seats:"18 Seater", min:14, max:18, img:"images/vehicles/TT3.webp" },
  { name:"Urbania", seats:"18 Seater", min:14, max:18, img:"images/vehicles/Urbania.webp" },

  { name:"Coach", seats:"21 Seater", min:19, max:21, img:"images/vehicles/coach1.webp" },
  { name:"Bus", seats:"Above 21", min:22, max:100, img:"images/vehicles/bus1.webp" }
];

function initChat(){
  screen.innerHTML = "";
  createComposer();
  resetBookingValues();
  booking.tripType = "Domestic";
  currentStep = 2;
  totalSteps = 10;
  updateProgress();

  botMessage(
    `${getGreeting()} 👋`,
    `Welcome to Ravi G Tours and Travels Domestic Trip Booking. Share your travel details below.`,
    ""
  );

  askDomesticDestination();
}

function createComposer(){
  if(composer) return;

  composer = document.createElement("form");
  composer.className = "chat-composer";
  composer.innerHTML = `
    <div class="composer-input-wrap">
      <i class="bi bi-emoji-smile"></i>
      <input id="composerInput" type="text" autocomplete="off" placeholder="Type a message">
    </div>
    <button class="composer-send" type="submit" aria-label="Send">
      <i class="bi bi-send-fill"></i>
    </button>
  `;

  app.appendChild(composer);
  composerInput = document.getElementById("composerInput");
  composerButton = composer.querySelector(".composer-send");

  composer.addEventListener("submit", event => {
    event.preventDefault();
    if(activeStep && typeof activeStep.onSend === "function"){
      activeStep.onSend(composerInput.value.trim());
    }
  });
}

function setComposer(options = {}){
  createComposer();
  activeStep = options;

  composer.style.display = options.hidden ? "none" : "grid";
  composerInput.type = options.type || "text";
  composerInput.placeholder = options.placeholder || "Type a message";
  composerInput.value = options.value || "";
  composerInput.readOnly = Boolean(options.readOnly);
  composerInput.disabled = Boolean(options.disabled);
  composerButton.disabled = Boolean(options.buttonDisabled);

  if(options.focus !== false && !composerInput.readOnly && !composerInput.disabled){
    setTimeout(() => composerInput.focus(), 100);
  }
}

function setComposerValue(value){
  if(composerInput){
    composerInput.value = value;
    composerInput.focus();
  }
}

function updateProgress(){
  progressBar.style.width = `${Math.min(100, (currentStep / totalSteps) * 100)}%`;
}

function nextProgress(step, total){
  currentStep = step;
  if(total) totalSteps = total;
  updateProgress();
}

function botMessage(title, text, html = ""){
  const wrap = document.createElement("div");
  wrap.className = "chat-row bot-row";
  wrap.innerHTML = `
    <div class="chat-bubble bot-bubble">
      <h2>${title}</h2>
      <p>${text}</p>
      ${html}
      <span class="msg-time">${timeNow()}</span>
    </div>
  `;

  screen.appendChild(wrap);
  scrollBottom();
}

function userMessage(text){
  const wrap = document.createElement("div");
  wrap.className = "chat-row user-row";
  wrap.innerHTML = `
    <div class="chat-bubble user-bubble">
      ${text}
      <span class="msg-time">${timeNow()} ✓✓</span>
    </div>
  `;

  screen.appendChild(wrap);
  scrollBottom();
}

function getLastBotBubble(){
  const cards = screen.querySelectorAll(".bot-bubble");
  return cards[cards.length - 1] || null;
}

function disableLastBotCard(){
  const last = getLastBotBubble();

  if(last){
    last.querySelectorAll("input, button").forEach(el => el.disabled = true);
    last.classList.add("completed-bot");
  }
}

function replyAndAsk(replyHtml, nextQuestion){
  disableLastBotCard();
  userMessage(replyHtml);
  setTimeout(nextQuestion, 300);
}

/* DOMESTIC FLOW */
function askDomesticDestination(){
  botMessage(
    "Where are you planning to go?",
    "Enter one or more domestic places. Example: Ooty, Coonoor or Mysore, Coorg.",
    domesticDestinationCard()
  );

  setComposer({
    placeholder:"Example: Ooty, Coonoor",
    onSend:submitDomesticDestination
  });
}

function domesticDestinationCard(){
  const places = ["Ooty","Kodaikanal","Valparai","Munnar","Wayanad","Mysore","Coorg","Chikmagalur","Rameshwaram"];

  return `
    <div class="quick-title">Popular places</div>
    <div class="quick-grid">
      ${places.map(place => `<button type="button" class="chip-btn" onclick="setComposerValue('${place}')">${place}</button>`).join("")}
    </div>
  `;
}

function submitDomesticDestination(value){
  if(!value){
    return setComposerError("Please enter destination.");
  }

  booking.destinations = value;
  nextProgress(3);
  replyAndAsk(`<strong>Trip:</strong> ${safe(value)}`, askPickup);
}

function askPickup(){
  botMessage(
    "Pickup location",
    "Where should we pick you up? You can select a quick option or type the full location.",
    pickupCard()
  );

  setComposer({
    placeholder:"Example: Saravanampatti, Coimbatore",
    onSend:submitPickup
  });
}

function pickupCard(){
  return `
    <div class="quick-title">Quick pickup options</div>
    <div class="quick-grid">
      <button type="button" class="chip-btn" onclick="setComposerValue('Coimbatore Railway Station')">Railway Station</button>
      <button type="button" class="chip-btn" onclick="setComposerValue('Coimbatore Airport')">Airport</button>
      <button type="button" class="chip-btn" onclick="setComposerValue('Coimbatore Bus Stand')">Bus Stand</button>
      <button type="button" class="chip-btn" onclick="setComposerValue('Inside Coimbatore')">Inside Coimbatore</button>
    </div>
  `;
}

function submitPickup(value){
  if(!value){
    return setComposerError("Please enter pickup location.");
  }

  booking.pickup = value;
  nextProgress(4);
  replyAndAsk(`<strong>Pickup:</strong> ${safe(value)}`, askDrop);
}

function askDrop(){
  botMessage(
    "Drop location",
    "Where should we drop you? Use Same as Pickup if this is a round trip / same drop point.",
    dropCard()
  );

  setComposer({
    placeholder:"Same as Pickup or enter drop location",
    onSend:submitDrop
  });
}

function dropCard(){
  return `
    <div class="quick-title">Drop options</div>
    <div class="quick-grid">
      <button type="button" class="chip-btn" onclick="setComposerValue('Same as Pickup')">Same as Pickup</button>
      <button type="button" class="chip-btn" onclick="setComposerValue('Coimbatore Airport')">Airport</button>
      <button type="button" class="chip-btn" onclick="setComposerValue('Coimbatore Railway Station')">Railway Station</button>
      <button type="button" class="chip-btn" onclick="setComposerValue('Coimbatore Bus Stand')">Bus Stand</button>
    </div>
  `;
}

function submitDrop(value){
  booking.drop = value || "Same as Pickup";
  nextProgress(5);
  replyAndAsk(`<strong>Drop:</strong> ${safe(booking.drop)}`, askDomesticDates);
}

function askDomesticDates(){
  botMessage(
    "Travel date & time",
    "Select pickup and drop / return date-time. I’ll calculate days and nights automatically.",
    domesticDateCard()
  );

  setComposer({
    placeholder:"Select date & time above, then tap send",
    readOnly:true,
    onSend:submitDomesticDates
  });
}

function domesticDateCard(){
  return `
    <div class="date-grid">
      <div class="date-confirm-card date-click-box" onclick="openDatePicker('pickupDateTime')">
        <label><i class="bi bi-calendar-event"></i> Pickup Date & Time</label>
        <input id="pickupDateTime" type="datetime-local" min="${getMinDateTime()}">
        <div id="pickupDateError" class="error"></div>
      </div>

      <div class="date-confirm-card date-click-box" onclick="openDatePicker('dropDateTime')">
        <label><i class="bi bi-calendar-check"></i> Drop / Return Date & Time</label>
        <input id="dropDateTime" type="datetime-local" min="${getMinDateTime()}">
        <div id="dropDateError" class="error"></div>
      </div>
    </div>

    <div id="durationBox" class="duration-box" style="display:none;"></div>
  `;
}

function submitDomesticDates(){
  const pickupInput = document.getElementById("pickupDateTime");
  const dropInput = document.getElementById("dropDateTime");
  clearInlineErrors();

  if(!pickupInput.value){
    return setInlineError("pickupDateError", "Please select pickup date and time.");
  }

  if(!dropInput.value){
    return setInlineError("dropDateError", "Please select drop / return date and time.");
  }

  if(dropInput.value < pickupInput.value){
    return setInlineError("dropDateError", "Drop time cannot be earlier than pickup time.");
  }

  booking.pickupDateTime = pickupInput.value;
  booking.dropDateTime = dropInput.value;
  booking.duration = calculateDuration(booking.pickupDateTime, booking.dropDateTime);

  nextProgress(6);
  replyAndAsk(
    `<strong>Pickup:</strong> ${formatDateTime(booking.pickupDateTime)}<br><strong>Drop:</strong> ${formatDateTime(booking.dropDateTime)}<br><strong>${booking.duration}</strong>`,
    askDomesticTravellers
  );
}

function askDomesticTravellers(){
  botMessage(
    "Who all are travelling?",
    "Enter adults and children first. Children above 10 years should be added under Adults for correct planning.",
    domesticTravellerCard()
  );

  updateDomesticPassengerTotal();
  setComposer({
    placeholder:"Adjust count above, then tap send",
    value:travellerSummary(),
    readOnly:true,
    onSend:submitDomesticTravellers
  });
}

function domesticTravellerCard(){
  return `
    <div class="counter-card">
      <div class="counter-row">
        <div>
          <h3>Adults</h3>
          <small>Include children above 10 here</small>
        </div>
        <div class="counter-control">
          <button type="button" onclick="changeTraveller('adults',-1)">-</button>
          <input id="adultInput" type="number" min="1" value="${booking.adults}" oninput="manualTraveller('adults', this.value)">
          <button type="button" onclick="changeTraveller('adults',1)">+</button>
        </div>
      </div>
    </div>

    <div class="counter-card">
      <div class="counter-row">
        <div>
          <h3>Children Below 10</h3>
          <small>For family / hotel planning</small>
        </div>
        <div class="counter-control">
          <button type="button" onclick="changeTraveller('children',-1)">-</button>
          <input id="childInput" type="number" min="0" value="${booking.childrenBelow10}" oninput="manualTraveller('children', this.value)">
          <button type="button" onclick="changeTraveller('children',1)">+</button>
        </div>
      </div>
    </div>

    <div class="note">Vehicle options will be shown based on total traveller count.</div>
  `;
}

function submitDomesticTravellers(){
  updateDomesticPassengerTotal();
  booking.vehicle = "";
  nextProgress(7);
  replyAndAsk(
    `<strong>Adults:</strong> ${booking.adults}<br><strong>Children Below 10:</strong> ${booking.childrenBelow10}<br><strong>Total Travellers:</strong> ${booking.passengers}`,
    askVehicle
  );
}

function askVehicle(){
  const recommended = getRecommendedVehicles();

  if(!booking.vehicle && recommended.length){
    booking.vehicle = recommended[0].name;
  }

  botMessage(
    "Recommended vehicles",
    `Based on ${booking.passengers} traveller(s), select your preferred vehicle.`,
    vehicleCard()
  );

  setComposer({
    placeholder:"Select a vehicle above, then tap send",
    value:booking.vehicle,
    readOnly:true,
    onSend:submitVehicle
  });
}

function vehicleCard(){
  const recommended = getRecommendedVehicles();

  return `
    <div class="vehicle-grid">
      ${recommended.map(vehicle => `
        <div class="vehicle-card ${booking.vehicle === vehicle.name ? "active" : ""}" onclick="selectVehicle('${vehicle.name}')">
          <img src="${vehicle.img}" alt="${vehicle.name}">
          <h4>${vehicle.name}</h4>
          <p>${vehicle.seats}</p>
        </div>
      `).join("")}
    </div>
    ${booking.passengers >= 14 ? `<div class="note muted">12–14 seater options are hidden for 14+ travellers. Showing bigger traveller / Urbania options.</div>` : ""}
  `;
}

function submitVehicle(){
  if(!booking.vehicle){
    return setComposerError("Please select a vehicle.");
  }

  nextProgress(8);
  replyAndAsk(`<strong>Vehicle:</strong> ${safe(booking.vehicle)}`, askAccommodation);
}

function askAccommodation(){
  botMessage(
    "Accommodation needed?",
    "Do you need hotel / stay support also?",
    accommodationCard()
  );

  setComposer({
    placeholder:"Type Yes or No",
    value:booking.accommodation,
    onSend:submitAccommodation
  });
}

function accommodationCard(){
  return `
    <div class="quick-grid">
      <button type="button" class="chip-btn ${booking.accommodation === "Yes" ? "active" : ""}" onclick="chooseAccommodation('Yes')">Yes</button>
      <button type="button" class="chip-btn ${booking.accommodation === "No" ? "active" : ""}" onclick="chooseAccommodation('No')">No</button>
    </div>
  `;
}

function chooseAccommodation(value){
  booking.accommodation = value;
  setComposerValue(value);
  const activeBubble = getLastBotBubble();
  if(activeBubble){
    activeBubble.querySelectorAll(".chip-btn").forEach(btn => {
      btn.classList.toggle("active", btn.textContent.trim() === value);
    });
  }
}

function submitAccommodation(value){
  const selected = normalizeText(value || composerInput.value);

  if(selected.startsWith("y")){
    booking.accommodation = "Yes";
  }else if(selected.startsWith("n")){
    booking.accommodation = "No";
  }else{
    return setComposerError("Please type Yes or No.");
  }

  nextProgress(9);
  replyAndAsk(`<strong>Accommodation:</strong> ${booking.accommodation}`, askDomesticName);
}

function askDomesticName(){
  botMessage(
    "Almost done",
    "Please enter your name.",
    ""
  );

  setComposer({
    placeholder:"Enter your name",
    onSend:submitDomesticName
  });
}

function submitDomesticName(value){
  if(!value){
    return setComposerError("Please enter your name.");
  }

  booking.name = value;
  nextProgress(10);
  replyAndAsk(`<strong>Name:</strong> ${safe(value)}`, showDomesticPreview);
}

function showDomesticPreview(){
  botMessage(
    "Preview & Submit",
    "Please check your details.",
    domesticPreviewCard()
  );

  setComposer({ hidden:true });
}

function domesticPreviewCard(){
  return `
    <div class="preview-card">
      <h3>Domestic Booking Details</h3>
      ${previewRow("Trip Type", booking.tripType)}
      ${previewRow("Destination", booking.destinations)}
      ${previewRow("Pickup", booking.pickup)}
      ${previewRow("Drop", booking.drop)}
      ${previewRow("Pickup Time", formatDateTime(booking.pickupDateTime))}
      ${previewRow("Drop Time", formatDateTime(booking.dropDateTime))}
      ${previewRow("Duration", booking.duration)}
      ${previewRow("Adults", booking.adults)}
      ${previewRow("Children Below 10", booking.childrenBelow10)}
      ${previewRow("Total Travellers", booking.passengers)}
      ${previewRow("Vehicle", booking.vehicle)}
      ${previewRow("Accommodation", booking.accommodation)}
      ${previewRow("Name", booking.name)}
    </div>

    <button type="button" class="whatsapp-final" onclick="sendDomesticToWhatsApp()">
      <i class="bi bi-whatsapp"></i> Submit WhatsApp
    </button>
  `;
}

/* COUNTERS & SELECTIONS */
function changeTraveller(type, value){
  if(type === "adults"){
    booking.adults = Math.max(1, booking.adults + value);
    document.getElementById("adultInput").value = booking.adults;
  }

  if(type === "children"){
    booking.childrenBelow10 = Math.max(0, booking.childrenBelow10 + value);
    document.getElementById("childInput").value = booking.childrenBelow10;
  }

  updateDomesticPassengerTotal();
  setComposerValue(travellerSummary());
}

function manualTraveller(type, value){
  const num = Number(value || 0);

  if(type === "adults"){
    booking.adults = Math.max(1, num);
  }

  if(type === "children"){
    booking.childrenBelow10 = Math.max(0, num);
  }

  updateDomesticPassengerTotal();
  setComposerValue(travellerSummary());
}

function updateDomesticPassengerTotal(){
  booking.passengers = Math.max(1, booking.adults + booking.childrenBelow10);
}

function travellerSummary(){
  updateDomesticPassengerTotal();
  return `${booking.adults} Adult${booking.adults > 1 ? "s" : ""}, ${booking.childrenBelow10} Child Below 10 • Total ${booking.passengers}`;
}

function getRecommendedVehicles(){
  updateDomesticPassengerTotal();
  return vehicleData.filter(vehicle => booking.passengers >= vehicle.min && booking.passengers <= vehicle.max);
}

function selectVehicle(name){
  booking.vehicle = name;
  setComposerValue(name);

  document.querySelectorAll(".vehicle-card").forEach(card => {
    card.classList.toggle("active", card.innerText.includes(name));
  });
}

/* DATE HELPERS */
function openDatePicker(id){
  const input = document.getElementById(id);
  if(!input) return;

  input.focus();

  setTimeout(() => {
    try{
      if(typeof input.showPicker === "function"){
        input.showPicker();
      }else{
        input.click();
      }
    }catch(e){
      input.click();
    }
  }, 50);

  input.addEventListener("change", () => {
    if(id === "pickupDateTime"){
      const dropInput = document.getElementById("dropDateTime");

      if(dropInput){
        dropInput.min = input.value || getMinDateTime();
        if(dropInput.value && dropInput.value < input.value){
          dropInput.value = "";
        }
      }
    }

    updateDurationBox();
  }, { once:false });
}

function updateDurationBox(){
  const pickup = document.getElementById("pickupDateTime")?.value;
  const drop = document.getElementById("dropDateTime")?.value;
  const box = document.getElementById("durationBox");

  if(pickup && drop && drop >= pickup && box){
    const duration = calculateDuration(pickup, drop);
    box.style.display = "block";
    box.textContent = duration;
    setComposerValue(duration);
  }
}

function calculateDuration(pickup, drop){
  const start = new Date(pickup);
  const end = new Date(drop);
  const startDate = new Date(start.getFullYear(), start.getMonth(), start.getDate());
  const endDate = new Date(end.getFullYear(), end.getMonth(), end.getDate());
  const diffDays = Math.max(0, Math.round((endDate - startDate) / (1000 * 60 * 60 * 24)));
  const days = diffDays + 1;
  const nights = Math.max(0, diffDays);

  if(nights === 0){
    return `${days} Day Trip`;
  }

  return `${days} Days / ${nights} Night${nights > 1 ? "s" : ""}`;
}

function getMinDateTime(){
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,"0")}-${String(now.getDate()).padStart(2,"0")}T${String(now.getHours()).padStart(2,"0")}:${String(now.getMinutes()).padStart(2,"0")}`;
}


function formatDateTime(value){
  if(!value) return "-";

  const date = new Date(value);
  return date.toLocaleString("en-IN", {
    day:"2-digit",
    month:"2-digit",
    year:"numeric",
    hour:"numeric",
    minute:"2-digit",
    hour12:true
  });
}


/* PREVIEW & WHATSAPP */
function previewRow(label, value){
  return `
    <div class="preview-row">
      <strong>${label}</strong>
      <span>${safe(value || "-")}</span>
    </div>
  `;
}

function sendDomesticToWhatsApp(){
  const message = `✨ *RAVI G TOURS AND TRAVELS*
━━━━━━━━━━━━━━━━━
📩 *NEW DOMESTIC BOOKING ENQUIRY*

🧭 *Trip Type:* ${booking.tripType}
🏔️ *Destination:* ${booking.destinations}
📍 *Pickup:* ${booking.pickup}
📍 *Drop:* ${booking.drop}
🗓️ *Pickup:* ${formatDateTime(booking.pickupDateTime)}
🗓️ *Drop:* ${formatDateTime(booking.dropDateTime)}
⏱️ *Duration:* ${booking.duration}

👥 *TRAVELLERS*
Adults: ${booking.adults}
Children Below 10: ${booking.childrenBelow10}
Total Travellers: ${booking.passengers}
Note: Children above 10 considered as adults

🚘 *Vehicle:* ${booking.vehicle}
🏨 *Accommodation:* ${booking.accommodation}

━━━━━━━━━━━━━━━━━
👤 *CUSTOMER*
Name: ${booking.name}

🙏 Kindly share fare & availability.`;

  window.location.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

/* COMMON HELPERS */
function getGreeting(){
  const hour = new Date().getHours();
  if(hour < 12) return "Good morning";
  if(hour < 17) return "Good afternoon";
  return "Good evening";
}

function timeNow(){
  return new Date().toLocaleTimeString("en-IN", {
    hour:"numeric",
    minute:"2-digit",
    hour12:true
  });
}

function normalizeText(value){
  return String(value || "").trim().toLowerCase();
}

function normalizePhone(value){
  return String(value || "").replace(/\D/g, "");
}

function safe(value){
  return String(value ?? "").replace(/[&<>'"]/g, char => ({
    "&":"&amp;",
    "<":"&lt;",
    ">":"&gt;",
    "'":"&#39;",
    '"':"&quot;"
  }[char]));
}

function safeAttribute(value){
  return safe(value).replace(/`/g, "&#96;");
}

function setComposerError(text){
  composerInput.placeholder = text;
  composerInput.value = "";
  composerInput.focus();
}

function setInlineError(id, text){
  const el = document.getElementById(id);
  if(el){
    el.textContent = text;
  }
}

function clearInlineErrors(){
  document.querySelectorAll(".error").forEach(el => el.textContent = "");
}


function resetBookingValues(){
  booking.tripType = "Domestic";
  booking.destinations = "";
  booking.pickup = "";
  booking.drop = "";
  booking.pickupDateTime = "";
  booking.dropDateTime = "";
  booking.duration = "";
  booking.adults = 1;
  booking.childrenBelow10 = 0;
  booking.passengers = 1;
  booking.vehicle = "";
  booking.accommodation = "No";
  booking.name = "";
}

function resetBooking(){
  initChat();
}

function scrollBottom(){
  body.scrollTop = body.scrollHeight;
}

initChat();
