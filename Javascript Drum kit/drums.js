/* Add a key down event */
window.addEventListener('keydown', playSound);
/* Add a transition end event */
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));

function playSound(e) {
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    if(!audio) return;
    key.classList.add('playing');
    audio.currentTime = 0;
    audio.play();
}

function removeTransition(e) {
    if(e.propertyName !== "transform") return;
    e.target.classList.remove('playing');
}