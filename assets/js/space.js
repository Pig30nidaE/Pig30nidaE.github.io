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
});
