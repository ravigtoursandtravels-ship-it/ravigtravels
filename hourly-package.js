document.addEventListener("DOMContentLoaded", () => {
  const pkg8 = [
    { id:"swift-dzire", name:"Swift Dzire", cat:"Sedan", image:"images/vehicles/dzire1.webp", price:2800, exHr:300, km:13 },
    { id:"toyota-etios", name:"Toyota Etios", cat:"Sedan", image:"images/vehicles/etios1.webp", price:2800, exHr:300, km:13 },
    { id:"ertiga", name:"Ertiga", cat:"SUV", image:"images/vehicles/ertiga1.webp", price:3300, exHr:300, km:18 },
    { id:"innova", name:"Innova A/C", cat:"MPV", image:"images/vehicles/innova1.webp", price:3700, exHr:300, km:15 },
    { id:"innova-crysta", name:"Innova Crysta", cat:"Premium MPV", image:"images/vehicles/crysta1.webp", price:4500, exHr:500, km:16 },
    { id:"tempo-traveller", name:"Tempo Traveller A/C", cat:"12/14 Seater", image:"images/vehicles/TT1.webp", price:5200, exHr:500, km:20 }
  ];

  const pkg10 = [
    { id:"swift-dzire", name:"Swift Dzire", cat:"Sedan", image:"images/vehicles/dzire1.webp", price:3000, exHr:300, km:13 },
    { id:"toyota-etios", name:"Toyota Etios", cat:"Sedan", image:"images/vehicles/etios1.webp", price:3000, exHr:300, km:13 },
    { id:"ertiga", name:"Ertiga", cat:"SUV", image:"images/vehicles/ertiga1.webp", price:3600, exHr:300, km:18 },
    { id:"innova", name:"Innova A/C", cat:"MPV", image:"images/vehicles/innova1.webp", price:4000, exHr:300, km:15 },
    { id:"innova-crysta", name:"Innova Crysta", cat:"Premium MPV", image:"images/vehicles/crysta1.webp", price:5000, exHr:500, km:16 },
    { id:"tempo-traveller", name:"Tempo Traveller A/C", cat:"12/14 Seater", image:"images/vehicles/TT1.webp", price:5500, exHr:500, km:20 }
  ];

  const container = document.getElementById("packageGrid");
  const modal = document.getElementById("hpModal");
  if (!container || !modal) return;

  function render(data, hours, limit) {
    container.innerHTML = data.map(vehicle => `
      <div class="col-md-6 col-xl-4" id="hourly-${vehicle.id}-${hours}h">
        <article class="hour-card reveal is-visible">
          <div class="hour-card-media">
            <img src="${vehicle.image}" alt="${vehicle.name}" loading="lazy" onerror="this.parentElement.classList.add('is-missing');this.remove();">
          </div>
          <span class="section-kicker">${vehicle.cat}</span>
          <h4>${vehicle.name}</h4>
          <div class="hourly-price-line"><strong>₹${vehicle.price.toLocaleString("en-IN")}</strong><span>${hours} Hrs / ${limit} Km</span></div>
          <div class="hourly-meta"><span>Extra hour ₹${vehicle.exHr}</span><span>Extra km ₹${vehicle.km}</span></div>
          <button class="book-now-btn" data-vehicle='${JSON.stringify({ ...vehicle, hours, limit })}'><i class="fa-brands fa-whatsapp"></i> Book this package</button>
        </article>
      </div>`).join("");

    container.querySelectorAll(".book-now-btn").forEach(button => button.addEventListener("click", () => openModal(JSON.parse(button.dataset.vehicle))));
  }

  function today() {
    const date = new Date();
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
  }

  function openModal(vehicle) {
    modal.classList.add("is-open");
    modal.setAttribute("aria-hidden", "false");
    document.getElementById("hpDate").min = today();
    document.getElementById("hpPkgLine").textContent = `${vehicle.name} • ${vehicle.hours} Hrs / ${vehicle.limit} Km • ₹${vehicle.price.toLocaleString("en-IN")}`;
    [["hpVehicle",vehicle.name],["hpHours",vehicle.hours],["hpKm",vehicle.limit],["hpPrice",vehicle.price],["hpExHr",vehicle.exHr],["hpPerKm",vehicle.km]].forEach(([id,value]) => document.getElementById(id).value = value);
  }

  function closeModal() {
    modal.classList.remove("is-open");
    modal.setAttribute("aria-hidden", "true");
  }

  render(pkg8, 8, 80);

  document.querySelectorAll(".tab-btn").forEach(button => button.addEventListener("click", () => {
    document.querySelectorAll(".tab-btn").forEach(item => item.classList.remove("active"));
    button.classList.add("active");
    button.dataset.tab === "10" ? render(pkg10, 10, 100) : render(pkg8, 8, 80);
  }));

  modal.addEventListener("click", event => { if (event.target.dataset.close === "1") closeModal(); });
  document.addEventListener("keydown", event => { if (event.key === "Escape") closeModal(); });

  document.getElementById("hpBookForm").addEventListener("submit", event => {
    event.preventDefault();
    const digits = document.getElementById("hpPhone").value.replace(/\D/g, "");
    if (digits.length !== 10) {
      alert("Please enter a valid 10-digit mobile number.");
      return;
    }
    const value = id => document.getElementById(id).value;
    const message = `*Hourly Package Enquiry — Ravi G Tours & Travels*\n\nName: ${value("hpName")}\nPhone: ${digits}\nPickup: ${value("hpPickup")}\nDate: ${value("hpDate")}\nTime: ${value("hpTime")}\n\nVehicle: ${value("hpVehicle")}\nPackage: ${value("hpHours")} Hrs / ${value("hpKm")} Km\nPrice: ₹${value("hpPrice")}\nExtra Hour: ₹${value("hpExHr")}\nExtra Km: ₹${value("hpPerKm")}\n\nPlease confirm availability.`;
    closeModal();
    window.open(`https://wa.me/919944165207?text=${encodeURIComponent(message)}`, "_blank");
  });
});
