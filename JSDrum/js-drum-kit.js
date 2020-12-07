
function removeTransition(e) {
	if (e.propertyName !== 'transform') return; //skip if its not a transform
	e.target.classList.remove('playing')
}

function playSound(e) {
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); //add an event to the audio to play it
	const key = document.querySelector(`.key[data-key="${e.keyCode}"]`); //add an event to the audio to have the corresponding key played
	if (!audio) return; //stop the function from running all together

	key.classList.add('playing');
	audio.currentTime = 0; //rewind to start
	audio.play();
}

const keys = Array.from(document.querySelectorAll('.key'))
keys.forEach(key => key.addEventListener('transitionend', removeTransition))
window.addEventListener('keydown', playSound)


//come back to later