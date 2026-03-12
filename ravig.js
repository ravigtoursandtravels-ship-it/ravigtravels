

document.addEventListener("DOMContentLoaded", function () {

  const waButton = document.getElementById("floatWhatsApp");

  if (waButton) {

    waButton.addEventListener("click", function (e) {

      e.preventDefault();

      const phoneNumber = "919944165207";

      let message = "💬 *Quick Enquiry from Website* \n";
      message += "━━━━━━━━━━━━━━━\n\n";

      message += "👤 Name:\n";
      message += "📞 Phone:\n";
      message += "📍 Pickup Location:\n";
      message += "🗺️ Intermediate / Places to Visit:\n";
      message += "🏁 Drop Location:\n";
      message += "🗓️ Pickup Date & Time:\n";
      message += "🚘 Vehicle Preference:\n";
      message += "👥 Number of People:\n";
      message += "🏨 Accommodation Needed: Yes / No\n\n";

      message += "💬 Please share the fare details.\n";
      message += "🙏 Thank you";

      const whatsappURL =
        "https://wa.me/" +
        phoneNumber +
        "?text=" +
        encodeURIComponent(message);

      window.open(whatsappURL, "_blank");

    });

  }

});
