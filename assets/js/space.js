document.addEventListener('DOMContentLoaded', function () {
    const particleContainer = document.querySelector('.particles');
    const numParticles = 100;

    for (let i = 0; i < numParticles; i++) {
        createParticle();
    }

    function getRandomCoordinate(max) {
        const array = new Uint32Array(1);
        window.crypto.getRandomValues(array);
        return array[0] % max;
    }
    
    function createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = `${getRandomCoordinate(window.innerWidth)}px`;
        particle.style.top = `${getRandomCoordinate(window.innerHeight)}px`;  
        particle.style.animationDuration = `${Math.random() * 2 + 1}s`; // Random duration
        particleContainer.appendChild(particle);
    }

    function startAnimation() {
        const shootingStar = document.querySelector('.shooting-star');
        shootingStar.style.left = `${getRandomCoordinate(window.innerWidth)}px`; // Set random starting position
        shootingStar.style.top = `${getRandomCoordinate(window.innerHeight)}px`; // Set random starting position
        shootingStar.style.animation = 'shooting-star-animation 3s linear';
    }

    function restartAnimation() {
        const shootingStar = document.querySelector('.shooting-star');
        shootingStar.style.animation = 'none';
        void shootingStar.offsetWidth; // Trigger reflow
        shootingStar.style.left = `${getRandomCoordinate(window.innerWidth)}px`; // Set random starting position
        shootingStar.style.top = `${getRandomCoordinate(window.innerHeight)}px`; // Set random starting position
        shootingStar.style.animation = `shooting-star-animation 3s linear ${getRandomDirection()}`; // Set random direction
        setTimeout(restartAnimation, 10000); // Repeat every 10 seconds
    }

    function getRandomDirection() {
        const directions = ['right', 'left', 'bottom', 'top'];
        return directions[Math.floor(Math.random() * directions.length)];
    }

    startAnimation();
    setTimeout(restartAnimation, 10000);
});
