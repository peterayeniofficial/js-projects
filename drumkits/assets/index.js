// Play function

function playSound(e) {
    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    let key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    console.log(key);
    if (!audio) return; // if key does not exist return
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}


window.addEventListener('keydown', playSound)


let keys = document.querySelectorAll('.key')

keys.forEach(key => key.addEventListener('transitionend', function (e) {
    if (e.propertyName !== 'transform') return; // return if the style is not transform
    key.classList.remove('playing');
}))