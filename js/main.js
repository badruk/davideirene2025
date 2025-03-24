document.addEventListener("DOMContentLoaded", function () {
    // Effetto di scorrimento per la navbar
    const navbar = document.getElementById("navbar");
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = "rgba(255, 255, 255, 0.95)";
            navbar.style.boxShadow = "0 2px 10px rgba(0, 0, 0, 0.1)";
        } else {
            navbar.style.backgroundColor = "rgba(255, 255, 255, 0.9)";
            navbar.style.boxShadow = "none";
        }
    });

    // Effetto zoom sulle immagini della galleria
    const galleryImages = document.querySelectorAll(".gallery-item img, .image-container img");
    galleryImages.forEach(img => {
        img.addEventListener("mouseenter", () => {
            img.style.transform = "scale(1.1)";
        });
        img.addEventListener("mouseleave", () => {
            img.style.transform = "scale(1)";
        });
    });

    // Gestione del modulo RSVP
    const rsvpForm = document.getElementById("rsvp-form");
    const rsvpMessage = document.getElementById("rsvp-message");
    
    rsvpForm.addEventListener("submit", function (event) {
        event.preventDefault();
        
        const formData = new FormData(rsvpForm);
        const name = formData.get("name");
        const attendance = formData.get("attendance");
        
        if (attendance === "yes") {
            rsvpMessage.textContent = `Grazie per aver confermato, ${name}! Non vediamo l'ora di festeggiare con te! 🥂`;
            rsvpMessage.style.color = "green";
        } else {
            rsvpMessage.textContent = `Ci dispiace che tu non possa partecipare, ${name}. Sarai con noi col cuore! ❤️`;
            rsvpMessage.style.color = "red";
        }
        
        rsvpMessage.classList.remove("hidden");
        rsvpForm.reset();
    });
});
