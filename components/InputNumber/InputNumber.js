import TechnicalFunc from "../../TechnicalFunc/TechnicalFunc.js"

class InputNumber{

    fillRandomEmptyCell(value) {
        let tds = document.querySelectorAll('td')
        for(let i = 0; i <= 81; i++) {
            let random = TechnicalFunc.randomMinMax(0,100)
            if(random < value) {
                if(tds[i]) {
                    tds[i].firstElementChild.innerHTML += `
                        <div class="hidden-element">
                            <span></span>
                        </div>
                    `
                };
            };
        };
    };

    gameLevel(level) {
        if(level == 'easy') {
            this.fillRandomEmptyCell(50)
        }

        if(level == 'medium') {
            this.fillRandomEmptyCell(60)
        }

        if(level == 'hard') {
            this.fillRandomEmptyCell(70)
        }
    } 

    listenerForTd() {
        document.addEventListener('click', (event) => {
            let target = event.target.closest('.hidden-element')
            if(!target) return
            let hiddenElems = document.querySelectorAll('.hidden-element')
            let tr = target.parentNode.parentNode.parentNode.childNodes
            let tds = document.querySelectorAll('td')
            let targetIndex = ''
            for(let hiddenElem of hiddenElems) {
                if(hiddenElem.classList.contains('clicked')) {
                    hiddenElem.classList.remove('clicked');
                }
                if(hiddenElem.classList.contains('illumination')) {
                    hiddenElem.classList.remove('illumination')
                    hiddenElem.parentNode.parentNode.classList.remove('illumination')
                }
            }
            target.classList.add('clicked');
            for(let i = 0; i < tds.length; i++) {  // перебор td для убирания класса
                if(tds[i].firstElementChild.firstElementChild == target) {
                    targetIndex = i
                }
                if(tds[i].classList.contains('illumination')) {
                    tds[i].classList.remove('illumination')
                }
            }
            while( targetIndex >= 9) {
                targetIndex = targetIndex - 9
            }
            
            for(let i = targetIndex; i < tds.length; i = i + 9) {
                console.log(i)
                tds[i].classList.add('illumination')
                if(tds[i].firstElementChild.firstElementChild && tds[i].firstElementChild.firstElementChild != target) {
                    tds[i].firstElementChild.firstElementChild.classList.add('illumination')
                }
            }
            for(let td of tr) {
                td.classList.add('illumination')   
                if(td.firstElementChild.firstElementChild && td.firstElementChild.firstElementChild != target) {
                    td.firstElementChild.firstElementChild.classList.add('illumination')
                }
            }
            
            // добавить подсветку для квадратов
            // добавить передвижение клавишами и ввод цифр клавишами
        })
    }

    listenerForNumpad() {
        let numpads = document.querySelectorAll('.sudoku__numpad-item');
        let numpadListener = ''
        for(let numpad of numpads) {
            numpad.addEventListener('click',numpadListener =  function() {
                let target = document.querySelector('.clicked')
                if(numpads[0].parentNode.getAttribute('data-playing') == 'false') {
                    TechnicalFunc.addTimer()
                    TechnicalFunc.pause()
                    numpads[0].parentNode.setAttribute('data-playing', 'true')
                }
                if(target) {
                    target.classList.remove('error')
                    target.firstElementChild.textContent = numpad.firstElementChild.textContent
                    let str = target.parentNode.textContent.replace(/\s/g,'')
                    if(str[0] != str[1]) {
                        target.classList.add('error')
                        +NumError.textContent++ // получена по id
                        if(NumError.textContent == '3') {
                            let activeLevel = document.querySelector('.active');
                            TechnicalFunc.gameOver(activeLevel.textContent.toLowerCase())
                        };
                    };
                };
            });
        };
    };

    listenerForLevelButtons() {
        let easy = document.getElementById('levelEasy');
        let medium = document.getElementById('levelMedium');
        let hard = document.getElementById('levelHard');
        let buttons = document.querySelectorAll('.sudoku__level-button');
        easy.addEventListener('click', function() {
            let answer = confirm('the progress of the current game will be lost')
            if(answer) {
                for(let button of buttons) {
                    button.classList.remove('active');
                }
                NumError.textContent = '0';
                TechnicalFunc.gameRestart('easy');
                easy.classList.add('active');
            }
        })

        medium.addEventListener('click', function() {
            let answer = confirm('the progress of the current game will be lost')
            if(answer) {
                for(let button of buttons) {
                    button.classList.remove('active');
                }
                NumError.textContent = '0';
                TechnicalFunc.gameRestart('medium');
                medium.classList.add('active');
            }
        })

        hard.addEventListener('click', function() {
            let answer = confirm('the progress of the current game will be lost')
            if(answer) {
                for(let button of buttons) {
                    button.classList.remove('active');
                }
                NumError.textContent = '0';
                TechnicalFunc.gameRestart('hard');
                hard.classList.add('active');
            };
        });
    };

    listenerForNewGame() {
        let newGameBtn = document.querySelector('.sudoku__button')
        newGameBtn.addEventListener('click', function() {
            let activeLevel = document.querySelector('.active');
            let answer = confirm('do you want to start a new game?')
            if(answer) {
                NumError.textContent = '0';
                TechnicalFunc.gameRestart(activeLevel.textContent.toLowerCase())
            }
        });
    };
};

export default new InputNumber();