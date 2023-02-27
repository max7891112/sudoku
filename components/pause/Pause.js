
class Pause {
    addListenerForPause(timer) {
        let pause = document.getElementById('pause');
        let play = document.getElementById('play');
        pause.addEventListener('click', function() {
            pause.classList.add('_hidden');
            play.classList.remove('_hidden');
            clearInterval(timer)
        })
        play.addEventListener('click', function() {
            play.classList.add('_hidden');
            pause.classList.remove('_hidden');
            clearInterval(timer)
        });
    };
};

export default new Pause();