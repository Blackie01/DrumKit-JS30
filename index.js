function playSound(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); // use backticks instead of quotes
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return; //this will stop the function from running all together
    audio.currentTime = 0; //this will rewind the track to the start per time you hit it.
    audio.play(); //this will play the audio when the keydown event happens
    key.classList.add('playing'); //this will add the border and transition to the class
}

function removeTransition(e){
    if (e.propertyName !== 'border-bottom-color') return;
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener ('keydown', playSound);
