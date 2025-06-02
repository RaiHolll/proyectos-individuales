document.addEventListener("DOMContentLoaded", function() {
    let images = document.querySelectorAll(".imagenes img");
    images.forEach(img => {
        img.addEventListener("mouseover", () => {
            img.style.transform = "scale(1.0)";
            img.style.transition = "0.5s";
        });
        img.addEventListener("mouseout", () => {
            img.style.transform = "scale(1)";
        });
    });
});
    let titulo = document.querySelector(".about h2");

    setInterval(() => {
        titulo.style.color = titulo.style.color === "#ff0080" ? "#ff69b4" : "#ff0080";
    }, 1000);

    let images = document.querySelectorAll(".imagenes img");
    images.forEach(img => {
        img.addEventListener("mouseover", () => {
            img.style.transform = "scale(1.2)";
            img.style.transition = "0.5s";
        });
        img.addEventListener("mouseout", () => {
            img.style.transform = "scale(1)";
        });
    });
function mostrarSeccion(seccion) {
    let contenido = document.getElementById("contenido");

    if (seccion === "inicio") {
        contenido.innerHTML = `
            <h2>💖 Bienvenidos a Creaciones Celin 💖</h2>
            <p>Somos una empresa apasionada por la confección en arte Foami. Nuestros diseños son únicos, llenos de creatividad y amor, perfectos para regalos, decoraciones y eventos especiales.</p>`;
    } else if (seccion === "sobreNosotros") {
        contenido.innerHTML = `
            <h2>🌸 Sobre Nosotros 🌸</h2>
            <p>Bienvenidos a Creaciones Celin, un espacio donde la creatividad y la delicadeza se transforman en piezas únicas hechas con Foami. Desde decoraciones personalizadas hasta regalos especiales, cada diseño es elaborado con amor, atención al detalle y materiales de la más alta calidad.
En Creaciones Celin, creemos en la magia de los pequeños detalles. Nuestros productos reflejan un estilo elegante y femenino, con acabados kawaii y colores vibrantes que transmiten alegría. Ya sea para eventos, decoración del hogar o momentos especiales, nuestras confecciones en Foami hacen cada ocasión inolvidable.
Explora nuestro catálogo exclusivo y encuentra creaciones encantadoras hechas a mano con pasión. 🌸✨ Contáctanos para pedidos personalizados y déjate sorprender por el arte en Foami. </p>`;
    } else if (seccion === "catalogo") {
        contenido.innerHTML = `
            <h2>✨ Nuestro Catálogo ✨</h2>
            <div class="imagenes">
                <img src="img/IMG-20250514-WA0220.jpg" alt="Diseño 1">
                <img src="img/IMG-20250514-WA0240.jpg" alt="Diseño 2">
                <img src="img/IMG-20250515-WA0014.jpg" alt="Diseño 3">
                <img src="img/WhatsApp Image 2025-05-13 at 1.35.43 AM.jpeg" alt="Diseño 4">
                <img src="img/WhatsApp Image 2025-05-20 at 10.33.42 AM.jpeg" alt="Diseño 5">
                <img src="img/WhatsApp Image 2025-05-14 at 3.02.44 PM.jpeg" alt="Diseño 6">
                <img src="img/WhatsApp Image 2025-05-13 at 1.35.43 AM.jpeg" alt="Diseño 7">
                <img src="img/WhatsApp Image 2025-05-15 at 10.56.29 AM.jpeg" alt="Diseño 8">
                <img src="img/WhatsApp Image 2025-05-13 at 1.35.45 AM.jpeg" alt="Diseño 9">
                <img src="img/WhatsApp Image 2025-05-20 at 10.35.39 AM.jpeg" alt="Diseño 10">
            </div>`;
    } else if (seccion === "contacto") {
        contenido.innerHTML = `
            <h2>📞 Contacto 📞</h2>
            <p>¡ Únete y mantente al tanto de nuestros trabajos !</p>

            </p>📲 Aceptamos el pago por transferencia.</p>

            </p>👉  Te dejo el link aquí:</p> 
            </p>https://whatsapp.com/channel/0029VafQfiTGzzKWqFpgOX3g</p>
            </p>https://chat.whatsapp.com/Io52VjlP8CYH3ZXw1G8FB2</p>
            </p> Contactar al +53 56394837 💬</p>`;
    }
    }
