function playSound(event) {
	const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`); //add an event to the audio to play it
	const key = document.querySelector(`.key[data-key="${event.keyCode}"]`); //add an event to the audio to have the corresponding key played

	if (!audio) return; //stop the function from running all together
	audio.currentTime = 0; //rewind to start
	audio.play();
	key.classList.add('playing');
}

function removeTransition(e) {
	if (e.propertyName !== 'transform') return; //skip if its not a transform
	this.classList.remove;
	console.log(e.propertyName);
}

const keys = document.querySelectorAll('.keys');
keys.forEach((key) => {
	key.addEventListener('transitionend', removeTransition);
});

window.addEventListener('keydown', playSound);
