import RenderGameField from "../components/sudoku/renderGameField";
import Sudoku from "../components/sudoku/Sudoku";
import InputNumber from "../components/InputNumber/InputNumber";
class TechnicalFunc {

    constructor() {
        this.timerId = ''
    }

    random(max) {
        let min = 0;
        let rand =  (((min - 0.5) + Math.random() * (max - min + 1)));
        // console.log(`
        // min: 0;
        // max: ${max};
        // value: ${Math.round(rand)};
        // `)
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
        } else {
            
        }
    }

    gameRestart(level) {
        let field = document.querySelector('.sudoku__field')
        clearInterval(this.timerId)
        NumError.textContent = '0'; // обнуление счетчика ошибок
        minutes.textContent = '00' // обнуление счетчика минут
        seconds.textContent = '00' // обнуление счетчика секунд
        field.innerHTML = '' // удаление всего поля
        RenderGameField.renderGameField(9,9,'.sudoku__field'); // рендер поля
        Sudoku.addMarkup(); // рендер разметки
        Sudoku.addBaseField(); // создание поля
        InputNumber.gameLevel(level); // установка прошлого уровня для игрока 
        document.querySelector('.sudoku__numpad').setAttribute('data-playing', 'false') // подготовка numpad к следующей игре
    }

    addTimer() {
        let counterForSeconds = 0;
        let counterForMinutes = 0
        this.timerId = setInterval(() => {
            if(counterForSeconds < 10) {
                let time = '0' + counterForSeconds
                seconds.textContent = time
                counterForSeconds++
            }
            if(counterForSeconds < 60 & counterForSeconds >= 10) {
                seconds.textContent = counterForSeconds
                counterForSeconds++
            }
            if(counterForSeconds == 59) {
                counterForMinutes++
                if(counterForMinutes < 10) {
                    minutes.textContent = '0' + counterForMinutes
                } else {
                    minutes.textContent = counterForMinutes
                }
                counterForSeconds = 0
            }
        },1000)
    }
}

export default new TechnicalFunc();
