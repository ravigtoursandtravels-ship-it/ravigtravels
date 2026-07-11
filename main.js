document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("bookingForm");
  if (form) {
    const pickupDT = document.getElementById("pickupDT");
    const dropDT = document.getElementById("dropDT");
    const accom = document.getElementById("accom");
    const accomLabel = document.getElementById("accomLabel");
    const pad = n => String(n).padStart(2,"0");
    const setMin = () => {
      const d = new Date();
      pickupDT.min = `${d.getFullYear()}-${pad(d.getMonth()+1)}-${pad(d.getDate())}T${pad(d.getHours())}:${pad(d.getMinutes())}`;
    };
    setMin();
    pickupDT.addEventListener("change", () => {
      dropDT.min = pickupDT.value || "";
      if(dropDT.value && dropDT.value < pickupDT.value) dropDT.value = "";
    });
    accom.addEventListener("change", () => accomLabel.textContent = accom.checked ? "Yes" : "No");
    form.addEventListener("submit", e => {
      e.preventDefault();
      const value = id => document.getElementById(id)?.value.trim() || "";
      const phone = value("phone").replace(/\D/g,"");
      if(phone.length !== 10){ alert("Please enter a valid 10-digit mobile number."); return; }
      if(!pickupDT.value){ pickupDT.focus(); return; }
      if(dropDT.value && dropDT.value < pickupDT.value){ alert("Drop date and time cannot be before pickup."); return; }
      const fmt = raw => raw ? new Date(raw).toLocaleString("en-IN",{day:"2-digit",month:"short",year:"numeric",hour:"numeric",minute:"2-digit"}) : "-";
      const msg = `🌟 *New Trip Enquiry — Ravi G Tours & Travels*

👤 *Name:* ${value("name")}
📞 *Phone:* ${phone}
📍 *Pickup:* ${value("pickup")}
🏁 *Drop:* ${value("drop")}
🗺️ *Places / Stops:* ${value("intermediate") || "Not specified"}
🗓️ *Pickup:* ${fmt(pickupDT.value)}
⏰ *Drop:* ${fmt(dropDT.value)}
🚘 *Vehicle:* ${value("vehicle")}
🏨 *Accommodation:* ${accom.checked ? "Yes" : "No"}

Please share the best fare and availability.`;
      window.open(`https://wa.me/919944165207?text=${encodeURIComponent(msg)}`,"_blank");
    });
  }
  const gallery = document.getElementById("galleryInner");
  if(gallery){
    const total = 32, per = window.matchMedia("(max-width:576px)").matches ? 2 : 4;
    for(let i=1,slide=0;i<=total;slide++){
      const item=document.createElement("div"); item.className=`carousel-item${slide===0?" active":""}`;
      const row=document.createElement("div"); row.className="gallery-row";
      for(let k=0;k<per && i<=total;k++,i++){ const img=document.createElement("img"); img.src=`images/customer/${i}.jpeg`; img.alt=`Ravi G customer trip ${i}`; img.loading="lazy"; img.onerror=()=>img.remove(); row.appendChild(img); }
      item.appendChild(row); gallery.appendChild(item);
    }
  }
});
