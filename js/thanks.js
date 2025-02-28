let segundos = 3;
const countdownEl = document.getElementById('countdown');

countdownEl.textContent = `Te redirigimos a la página principal en: ${segundos} segundos...`;

const interval = setInterval(() => {
    segundos--;
    countdownEl.textContent = `Te redirigimos a la página principal en: ${segundos} segundos...`;

    if (segundos <= 0) {
        clearInterval(interval);
        window.location.href = "../index.html";
    }
}, 1000);

// Forzar recarga al volver atrás (para limpiar datos del form anterior)
window.addEventListener("pageshow", function (event) {
    if (event.persisted) {
        window.location.reload();
    }
});