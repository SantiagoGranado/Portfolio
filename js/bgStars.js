/* =======================
       Fondo de estrellas con Three.js y efecto parallax
    ======================= */
    let scene, camera, renderer;
    const starCount = 1000;
    let mouseX = 0, mouseY = 0;
    let windowHalfX = window.innerWidth / 2, windowHalfY = window.innerHeight / 2;

    document.addEventListener('mousemove', (event) => {
      mouseX = event.clientX - windowHalfX;
      mouseY = event.clientY - windowHalfY;
    }, false);

    function initStarfield() {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
      camera.position.z = 500;

      const canvasElement = document.getElementById('starfield');
      renderer = new THREE.WebGLRenderer({ canvas: canvasElement, antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(window.devicePixelRatio);

      const starGeometry = new THREE.BufferGeometry();
      const positions = new Float32Array(starCount * 3);
      for (let i = 0; i < starCount; i++) {
        positions[i * 3] = Math.random() * 2000 - 1000;
        positions[i * 3 + 1] = Math.random() * 2000 - 1000;
        positions[i * 3 + 2] = Math.random() * 2000 - 1000;
      }
      starGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

      const starMaterial = new THREE.PointsMaterial({
        color: 0xffffff,
        size: 2,
        sizeAttenuation: true
      });

      const starField = new THREE.Points(starGeometry, starMaterial);
      scene.add(starField);

      function animateStarfield() {
        requestAnimationFrame(animateStarfield);
        // Efecto parallax: movimiento suave de la cámara
        camera.position.x += (mouseX - camera.position.x) * 0.05;
        camera.position.y += (-mouseY - camera.position.y) * 0.05;
        camera.lookAt(scene.position);
        // Rotación sutil del campo de estrellas
        starField.rotation.x += 0.0005;
        starField.rotation.y += 0.001;
        renderer.render(scene, camera);
      }
      animateStarfield();

      window.addEventListener('resize', () => {
        windowHalfX = window.innerWidth / 2;
        windowHalfY = window.innerHeight / 2;
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(window.innerWidth, window.innerHeight);
      });
    }
    initStarfield();