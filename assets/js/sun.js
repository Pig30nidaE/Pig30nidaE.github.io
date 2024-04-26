var sun = document.getElementById('sun');

document.addEventListener('DOMContentLoaded', function () {

	function moveSun() {
		var angle = 0;
		var radius = 200; // Adjust the radius as needed
		var speed = 0.005; // Adjust the speed as needed

		function updatePosition() {
			var x = radius * Math.cos(angle);
			var y = radius * Math.sin(angle);

			sun.style.left = (window.innerWidth / 2 + x - sun.offsetWidth / 2) + 'px';
			sun.style.top = (window.innerHeight / 2 + y - sun.offsetHeight / 2) + 'px';

			angle += speed;

			requestAnimationFrame(updatePosition);
		}

		updatePosition();
	}

	moveSun();
});