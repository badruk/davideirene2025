document.addEventListener("DOMContentLoaded", function () {
    // Cambia il colore della navbar quando si scorre la pagina
    window.addEventListener("scroll", function () {
        const navbar = document.getElementById("navbar");
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = "rgba(139, 69, 19, 0.9)"; // Marrone chiaro
        } else {
            navbar.style.backgroundColor = "rgba(255, 255, 255, 0.9)";
        }
    });

    // Effetto zoom sulle immagini della galleria
    const images = document.querySelectorAll(".hover-zoom img");
    images.forEach(img => {
        img.addEventListener("mouseover", function () {
            this.style.transform = "scale(1.1)";
        });
        img.addEventListener("mouseout", function () {
            this.style.transform = "scale(1)";
        });
    });

    // Gestione del form RSVP
    const form = document.getElementById("rsvp-form");
    const messageBox = document.getElementById("rsvp-message");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const guests = document.getElementById("guests").value;
        const attendance = document.querySelector("input[name='attendance']:checked").value;

        messageBox.classList.remove("hidden");
        if (attendance === "yes") {
            messageBox.innerHTML = `<p>Grazie, ${name}! Non vediamo l'ora di festeggiare con te e i tuoi ${guests} ospiti! 🎉</p>`;
            messageBox.style.backgroundColor = "#c0d890"; // Verde tenue
        } else {
            messageBox.innerHTML = `<p>Ci dispiace che non possa partecipare, ${name}. Speriamo di rivederti presto! 💛</p>`;
            messageBox.style.backgroundColor = "#eac67a"; // Giallo tenue
        }

        form.reset();
    });
});
