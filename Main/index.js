const button = document.getElementById('startButton');
    button.addEventListener('click', () => {
      document.querySelector('.scene').classList.add('zoom-bg');
      button.classList.add('fade');
      setTimeout(() => { window.location.href = 'next.html'; }, 400); 
    
    });