document.getElementById('left').addEventListener('click', function() {
    moveHeroContent('left');
});

document.getElementById('right').addEventListener('click', function() {
    moveHeroContent('left');
});

function moveHeroContent(direction) {

    const heroContent = document.querySelector('.hero-content');

    heroContent.style.opacity = '0';
    
    if (direction === 'left') {
        heroContent.style.transform = 'translateX(-100%)';
    } 

    setTimeout(function() {
        heroContent.style.opacity = '1';
        heroContent.style.transform = 'translateX(0)';
    }, 500);
}

  
  