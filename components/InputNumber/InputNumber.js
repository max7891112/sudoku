import TechnicalFunc from "../../TechnicalFunc/TechnicalFunc.js";

class InputNumber{

    constructor() {
        this.numpads = document.querySelectorAll('.sudoku__numpad-item');
        this.scriptListener = '';
    }

    fillRandomEmptyCell(value) {
        let tds = document.querySelectorAll('td');
        for(let i = 0; i <= 81; i++) {
            let random = TechnicalFunc.randomMinMax(0,100);
            if(random < value) {
                if(tds[i]) {
                    tds[i].firstElementChild.innerHTML += `
                        <div class="hidden-element">
                            <span></span>
                        </div>
                    `;
                };
            };
        };
    };

    gameLevel(level) {
        if(level == 'easy') {
            this.fillRandomEmptyCell(3);
        };

        if(level == 'medium') {
            this.fillRandomEmptyCell(60);
        };

        if(level == 'hard') {;
            this.fillRandomEmptyCell(70)
        };
    };

    listenerForTd() {
        let tdListener = ''
        document.addEventListener('click',tdListener = (event) => {
            let mainTarget = event.target.closest('.hidden-element');
            if(!mainTarget) return;
            this.scriptListener = (target) => {
                let hiddenElems = document.querySelectorAll('.hidden-element');
                let tr = ''
                if(target) {
                    tr = target.parentNode.parentNode.parentNode.childNodes;
                } else {
                    return
                }
                let tds = document.querySelectorAll('td');
                let targetIndex = '';
                for(let hiddenElem of hiddenElems) {
                    if(hiddenElem.classList.contains('clicked')) {
                        hiddenElem.classList.remove('clicked');
                    }
                    if(hiddenElem.classList.contains('illumination')) {
                        hiddenElem.classList.remove('illumination');
                        hiddenElem.parentNode.parentNode.classList.remove('illumination');
                    }
                }

                target.classList.add('clicked');
                for(let i = 0; i < tds.length; i++) {  // перебор td для убирания класса
                    if(tds[i].firstElementChild.firstElementChild == target) {
                        targetIndex = i;
                    }
                    if(tds[i].classList.contains('illumination')) {
                        tds[i].classList.remove('illumination');
                    };
                };


            let illuminationSquare = (index) => {
                let squares = [];
                squares.push([0,1,2,9,10,11,18,19,20],[3,4,5,12,13,14,21,22,23],[6,7,8,15,16,17,24,25,26],[27,28,29,36,37,38,45,46,47],
                    [30,31,32,39,40,41,48,49,50],[33,34,35,42,43,44,51,52,53],[54,55,56,63,64,65,72,73,74],[57,58,59,66,67,68,75,76,77],
                    [60,61,62,69,70,71,78,79,80]);

                for(let square of squares) {
                    if(square.includes(index)) {
                        for(let elem of square) {
                            tds[elem].classList.add('illumination');
                            if(tds[elem].firstElementChild.firstElementChild && tds[elem].firstElementChild.firstElementChild != target) {
                                tds[elem].firstElementChild.firstElementChild.classList.add('illumination');
                            };
                        };
                    };
                };
            };
            illuminationSquare(targetIndex);

            while( targetIndex >= 9) {
                targetIndex = targetIndex - 9;
            }
            
            for(let i = targetIndex; i < tds.length; i = i + 9) {
                tds[i].classList.add('illumination');
                if(tds[i].firstElementChild.firstElementChild && tds[i].firstElementChild.firstElementChild != target) {
                    tds[i].firstElementChild.firstElementChild.classList.add('illumination');
                }
            }
            for(let td of tr) {
                td.classList.add('illumination');
                if(td.firstElementChild.firstElementChild && td.firstElementChild.firstElementChild != target) {
                    td.firstElementChild.firstElementChild.classList.add('illumination');
                };
            };
            }
            this.scriptListener(mainTarget)
        });

        
        document.addEventListener('keydown', (event) => {
            if(event.code == 'ArrowLeft') {
                let mainTarget = document.querySelector('.clicked');
                if(!mainTarget) return;
                if(mainTarget.parentNode.parentNode.previousElementSibling) {
                    let trs = mainTarget.parentNode.parentNode.parentNode.children
                    let index = 0
                    for(let i = 0; i < trs.length; i++) {
                        if(trs[i] == mainTarget.parentNode.parentNode) {
                            index = i
                        }
                    }
                    function enumeration() {
                        for(let i = index - 1; i >= 0; i--) {
                            if(trs[i].firstElementChild) {
                                if(trs[i].firstElementChild.firstElementChild) {
                                    return trs[i].firstElementChild.firstElementChild
                                }
                            }
                        }
                    }
                    mainTarget = enumeration()
                }
                this.scriptListener(mainTarget)
            }
        })

        document.addEventListener('keydown', (event) => {
            if(event.code == 'ArrowRight') {
                let mainTarget = document.querySelector('.clicked');
                if(!mainTarget) return;
                if(mainTarget.parentNode.parentNode.nextElementSibling) {
                    let trs = mainTarget.parentNode.parentNode.parentNode.children
                    let index = 0
                    for(let i = 0; i < trs.length; i++) {
                        if(trs[i] == mainTarget.parentNode.parentNode) {
                            index = i
                        }
                    }
                    
                    function enumeration() {
                        for(let i = index + 1; i <= 8; i++) {
                            if(trs[i].firstElementChild) {
                                if(trs[i].firstElementChild.firstElementChild) {
                                    return trs[i].firstElementChild.firstElementChild
                                }
                            }
                        }
                    }
                    mainTarget = enumeration()
                }
                this.scriptListener(mainTarget)
            }
        })

        document.addEventListener('keydown', (event) => {
            event.preventDefault()
            if(event.code == 'ArrowUp') {
                let mainTarget = document.querySelector('.clicked');
                if(!mainTarget) return;
                if(mainTarget.parentNode.parentNode.parentNode.previousElementSibling) {
                    let tds = document.querySelectorAll('td');
                    let index = 0
                    for(let i = 0; i < tds.length; i++) {
                        if(tds[i] == mainTarget.parentNode.parentNode) {
                            index = i
                        }
                    }
                    
                    function enumeration() {
                        for(let i = index - 9; i >= 0; i = i - 9) {
                            if(tds[i].firstElementChild) {
                                if(tds[i].firstElementChild.firstElementChild) {
                                    return tds[i].firstElementChild.firstElementChild
                                }
                            }
                        }
                    }
                    
                    mainTarget = enumeration()
                }
                this.scriptListener(mainTarget)  
            }
        })

        document.addEventListener('keydown', (event) => {
            event.preventDefault()
            if(event.code == 'ArrowDown') {
                let mainTarget = document.querySelector('.clicked');
                if(!mainTarget) return;
                if(mainTarget.parentNode.parentNode.parentNode.nextElementSibling) {
                    let tds = document.querySelectorAll('td');
                    let index = 0
                    for(let i = 0; i < tds.length; i++) {
                        if(tds[i] == mainTarget.parentNode.parentNode) {
                            index = i
                        }
                    }
                    
                    function enumeration() {
                        for(let i = index + 9; i <= tds.length; i = i + 9) {
                            if(tds[i].firstElementChild) {
                                if(tds[i].firstElementChild.firstElementChild) {
                                    return tds[i].firstElementChild.firstElementChild
                                }
                            }
                        }
                    }
                    
                    mainTarget = enumeration()
                }
                this.scriptListener(mainTarget)  
            }
        })
    };

    listenerForNumpad() {
        
        let numpadListener = '';
        
        for(let numpad of this.numpads) {
            numpad.addEventListener('click',numpadListener = () => {
                this.checkNumber(numpad.firstElementChild.textContent)
                let tds = document.querySelectorAll('td')
                for(let td of tds) {
                    if(td.firstElementChild.firstElementChild) {
                        if(!td.firstElementChild.firstElementChild.classList.contains('error') && 
                            td.firstElementChild.firstElementChild.firstElementChild.textContent != '' &&
                            +NumError.textContent < 3
                        ) {
                            continue
                        } else {
                            return
                        }
                    }
                }
                let level = document.querySelector('.active')
                level = level.textContent
                TechnicalFunc.gameWinner(level)
            });
        };
        document.addEventListener('keydown', (event) => {
            let level = document.querySelector('.active')
            level = level.textContent
            if(event.code == 'Digit1' || event.code == 'Numpad1') {
                this.checkNumber(1)
                TechnicalFunc.gameWinner(level)
            }
            if(event.code == 'Digit2' || event.code == 'Numpad2') {
                this.checkNumber(2)
                TechnicalFunc.gameWinner(level)
            }
            if(event.code == 'Digit3' || event.code == 'Numpad3') {
                this.checkNumber(3)
                TechnicalFunc.gameWinner(level)
            }
            if(event.code == 'Digit4' || event.code == 'Numpad4') {
                this.checkNumber(4)
                TechnicalFunc.gameWinner(level)
            }
            if(event.code == 'Digit5' || event.code == 'Numpad5') {
                this.checkNumber(5)
                TechnicalFunc.gameWinner(level)
            }
            if(event.code == 'Digit6' || event.code == 'Numpad6') {
                this.checkNumber(6)
                TechnicalFunc.gameWinner(level)
            }
            if(event.code == 'Digit7' || event.code == 'Numpad7') {
                this.checkNumber(7)
            }
            if(event.code == 'Digit8' || event.code == 'Numpad8') {
                this.checkNumber(8)
                TechnicalFunc.gameWinner(level)
            }
            if(event.code == 'Digit9' || event.code == 'Numpad9') {
                this.checkNumber(9)
                TechnicalFunc.gameWinner(level)
            }

        })
    };

    checkNumber(number) {
        let target = document.querySelector('.clicked')  
        if(this.numpads[0].parentNode.getAttribute('data-playing') == 'false') {
            TechnicalFunc.addTimer();
            TechnicalFunc.pause();
            this.numpads[0].parentNode.setAttribute('data-playing', 'true');
        }
        if(target) {
            target.classList.remove('error');
            target.firstElementChild.textContent = number
            let str = target.parentNode.textContent.replace(/\s/g,'');
            if(str[0] != str[1]) {
                target.classList.add('error');
                +NumError.textContent++; // получена по id
            if(NumError.textContent == '3') {
                let activeLevel = document.querySelector('.active');
                TechnicalFunc.gameOver(activeLevel.textContent.toLowerCase());
                };
            };
        };
    }

    listenerForLevelButtons() {
        let easy = document.getElementById('levelEasy');
        let medium = document.getElementById('levelMedium');
        let hard = document.getElementById('levelHard');
        let buttons = document.querySelectorAll('.sudoku__level-button');
        let tds = document.querySelectorAll('td')
        easy.addEventListener('click', () => {
            for(let elem of tds) {
                elem.classList.remove('illumination')
            }
            let answer = confirm('the progress of the current game will be lost');
            if(answer) {
                for(let button of buttons) {
                    button.classList.remove('active');
                }
                easy.classList.add('active');

                let field = document.querySelector('.preloader');
                field.classList.remove('preloader__not-active');
                TechnicalFunc.gameRestart('easy')
            }
        })

        medium.addEventListener('click', function() {
            for(let elem of tds) {
                elem.classList.remove('illumination')
            }
            let answer = confirm('the progress of the current game will be lost');
            if(answer) {
                for(let button of buttons) {
                    button.classList.remove('active');
                }
                medium.classList.add('active');

                let field = document.querySelector('.preloader');
                field.classList.remove('preloader__not-active');
                TechnicalFunc.gameRestart('medium')
            }
        })

        hard.addEventListener('click', function() {
            for(let elem of tds) {
                elem.classList.remove('illumination')
            }
            let answer = confirm('the progress of the current game will be lost');
            if(answer) {
                for(let button of buttons) {
                    button.classList.remove('active');
                }
                hard.classList.add('active');

                let field = document.querySelector('.preloader');
                field.classList.remove('preloader__not-active');
                TechnicalFunc.gameRestart('hard')
            };
        });
    };

    addPreloaderForField () {
        let field = document.querySelector('.preloader');
        field.classList.remove('preloader__not-active');
    };

    listenerForNewGame(level) {
        let tds = document.querySelectorAll('td')
        let newGameBtn = document.querySelector('.sudoku__button');
        newGameBtn.addEventListener('click', function() {
            for(let elem of tds) {
                elem.classList.remove('illumination')
            }
            let activeLevel = document.querySelector('.active');
            let answer = confirm('do you want to start a new game?');
            if(answer) {

                let field = document.querySelector('.preloader');
                field.classList.remove('preloader__not-active');

                TechnicalFunc.gameRestart(activeLevel.textContent.toLowerCase())
            };

        });
    };

};

export default new InputNumber();