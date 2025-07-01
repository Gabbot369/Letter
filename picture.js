const music = document.getElementById('bg-music');
    music.volume = 0.5;

  document.body.addEventListener('click', () => {
      music.play().catch((e) => {
        console.log('Autoplay failed:', e);
      });
    });
