import RenderGameField from "../components/sudoku/renderGameField";
import Sudoku from "../components/sudoku/Sudoku";
import InputNumber from "../components/InputNumber/InputNumber";
class TechnicalFunc {

    constructor() {
        this.timerId = '1';
        this.flag = true;
        this.stopTimer = false;
    }

    random(max) {
        let min = 0;
        let rand =  (((min - 0.5) + Math.random() * (max - min + 1)));
        return Math.round(rand);    
    }

    randomMinMax(min, max) {
        let rand =  (((min - 0.5) + Math.random() * (max - min + 0.5)).toFixed())
        return Math.round(rand)
    }

    gameOver(level) {
        let answer = confirm('game over! Do you want start a new game?')
        if(answer) {
            this.gameRestart(level)
        } 
    }

    gameWinner(level) {
        let target = document.querySelector('.game-win')
        target.classList.remove('_hidden')
        let numpad = document.querySelector('.sudoku__numpad')
        let transparentBlock = document.createElement('div')
        transparentBlock.classList.add('_transparent-block')
        numpad.append(transparentBlock)
        gameWinLevel.textContent = level
        gameWinTime.textContent = minutes.textContent + ':' + seconds.textContent
        clearInterval(this.timerId)
    }

    gameRestart(level) {
        // let field = document.querySelector('.sudoku__field') // удалить
        clearInterval(this.timerId)
        NumError.textContent = '0'; // обнуление счетчика ошибок
        minutes.textContent = '00' // обнуление счетчика минут
        seconds.textContent = '00' // обнуление счетчика секунд
        // field.innerHTML = '' // удаление всего поля
        Sudoku.createFullGameField(level); // рендер поля
        for(let elem of document.querySelectorAll('.illumination')) {
            elem.classList.remove('illumination')
        }
        // Sudoku.addMarkup(); // рендер разметки
        InputNumber.gameLevel(level); // установка прошлого уровня для игрока 
        document.querySelector('.sudoku__numpad').setAttribute('data-playing', 'false') // подготовка numpad к следующей игре
        
        let target = document.querySelector('.game-win')
        let transparentBlock = document.querySelector('._transparent-block')
        if(target) {
            target.classList.add('_hidden')
            if(transparentBlock) {
                transparentBlock.parentNode.lastElementChild.remove()
            }
        } 
    }

    addTimer() {
        let counterForSeconds = 0;
        let counterForMinutes = 0
        this.timerId = setInterval(() => {
            if(this.stopTimer) return
            counterForSeconds++
            if(counterForSeconds < 10) {
                seconds.textContent = '0' + counterForSeconds
            } else {
                if(counterForSeconds == 60) {
                    counterForMinutes++
                    counterForSeconds = 0
                    seconds.textContent = '0' + counterForSeconds
                } else {
                    seconds.textContent = counterForSeconds
                }
                
            }
                if(counterForMinutes < 10) {
                    minutes.textContent = '0' + counterForMinutes
                } else {
                    minutes.textContent = counterForMinutes
                } 
        },300)
    }

    pause() {
        let pause = document.getElementById('pause');
        let play = document.getElementById('play');
        let field = document.querySelector('.sudoku__field')
        let listenerForPlay = ''
        pause.addEventListener('click', () => {
            pause.classList.add('_hidden');
            play.classList.remove('_hidden');
            this.stopTimer = true
            let pauseBlock = document.createElement('div')
            pauseBlock.classList.add('_pause')
            field.append(pauseBlock)
            pauseBlock.addEventListener('click', listenerForPlay)
        })
        play.addEventListener('click', listenerForPlay = () => {
            play.classList.add('_hidden');
            pause.classList.remove('_hidden');
            this.stopTimer = false
            field.removeChild(field.lastElementChild)
        });
    }
}

export default new TechnicalFunc();
