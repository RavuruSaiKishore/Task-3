const drums = document.querySelectorAll('.drum');

function playSound(e) {
    const drum = e.currentTarget;

    const sound = drum.getAttribute('data-sound');

    const audio = document.getElementById(sound);

    if (audio) {
        audio.currentTime = 0;
        audio.play();
    }
}

drums.forEach(drum => {
    drum.addEventListener('click', playSound);
});
