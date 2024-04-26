document.addEventListener('DOMContentLoaded', function () {
    const particleContainer = document.querySelector('.particles');
    const numParticles = 100;

    for (let i = 0; i < numParticles; i++) {
        createParticle();
    }

    function createParticle() {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.left = `${Math.random() * window.innerWidth}px`;
        particle.style.top = `${Math.random() * window.innerHeight}px`;
        particle.style.animationDuration = `${Math.random() * 2 + 1}s`; // Random duration
        particleContainer.appendChild(particle);
    }

    //var sun = document.getElementById('sun');

    //function moveSun() {
    //    var angle = 0;
    //    var radius = 200; // Adjust the radius as needed
    //    var speed = 0.005; // Adjust the speed as needed

    //    function updatePosition() {
    //        var x = radius * Math.cos(angle);
    //        var y = radius * Math.sin(angle);

    //        sun.style.left = (window.innerWidth / 2 + x - sun.offsetWidth / 2) + 'px';
    //        sun.style.top = (window.innerHeight / 2 + y - sun.offsetHeight / 2) + 'px';

    //        angle += speed;

    //        requestAnimationFrame(updatePosition);
    //    }

    //    updatePosition();
    //}

    function startAnimation() {
        const shootingStar = document.querySelector('.shooting-star');
        shootingStar.style.animation = 'shooting-star-animation 3s linear';
    }

    function restartAnimation() {
        const shootingStar = document.querySelector('.shooting-star');
        shootingStar.style.animation = 'none';
        void shootingStar.offsetWidth; // Trigger reflow
        shootingStar.style.animation = 'shooting-star-animation 3s linear';
        setTimeout(restartAnimation, 10000); // Repeat every 90 seconds
    }

    //moveSun();
    startAnimation();
    setTimeout(restartAnimation, 10000);
});
