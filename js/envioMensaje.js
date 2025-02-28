const form = document.getElementById('contact-form');
form.addEventListener('submit', async function (event) {
    event.preventDefault(); // Evita que el formulario recargue la página

    const formData = new FormData(form);

    try {
        const response = await fetch('https://formspree.io/f/xvgzezoe', {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            window.location.href = "./html/thanks.html";
        } else {
            alert('Error al enviar el formulario.');
        }
    } catch (error) {
        alert('Ocurrió un error en la conexión.');
        console.error(error);
    }
});