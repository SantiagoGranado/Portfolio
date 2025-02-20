/* =======================
       Inicializar VanillaTilt para las tarjetas de proyectos
    ======================= */
    VanillaTilt.init(document.querySelectorAll(".tilt"), {
        max: 15,
        speed: 400,
        glare: true,
        "max-glare": 0.2,
      });
  
      /* =======================
         Transición entre secciones
      ======================= */
      document.getElementById('btnConoceme').addEventListener('click', () => {
        const landing = document.getElementById('landing');
        const about = document.getElementById('about');
        // Aplicamos la animación en la sección landing
        landing.classList.add('zoomquake');
        setTimeout(() => {
          landing.classList.add('hidden');
          about.classList.remove('hidden');
          // Permitimos el scroll en la segunda sección
          document.body.style.overflow = 'auto';
          // Aplicamos animación de fade-in y zoomoutShake en el contenedor de about
          const aboutContainer = document.getElementById('aboutContainer');
          aboutContainer.classList.remove('fade-in');
          void aboutContainer.offsetWidth; // Forzar reflow para reiniciar la animación
          aboutContainer.classList.add('fade-in', 'zoomoutShake');
        }, 800);
      });