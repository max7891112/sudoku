import TechnicalFunc from "../../TechnicalFunc/TechnicalFunc";
import InputNumber from "../InputNumber/InputNumber";
class Sudoku {

    addMarkup() {
        let trs = document.querySelectorAll('tr');
        let tds = document.querySelectorAll('td');
        trs[3].style.borderTop = '2px solid black';
        trs[6].style.borderTop = '2px solid black';
        for(let i = 2; i < tds.length; i = i + 9) {
            tds[i].style.borderRight = '2px solid black';
        }
        for(let i = 5; i < tds.length; i = i + 9) {
            tds[i].style.borderRight = '2px solid black';
        }
    }

    addBaseField() {
        let tds = document.querySelectorAll('td');
        let trs = document.querySelectorAll('tr');
        let arrColumnOne = []; // цифры, содрежащиеся в столбце
        let arrColumnTwo = [];
        let arrColumnThree = [];
        let arrColumnFour = [];
        let arrColumnFive = [];
        let arrColumnSix = [];
        let arrColumnSeven = [];
        let arrColumnEight = [];
        let arrColumnNine = [];

        let currentStackNumber = 0;


        let arr = [1,2,3,4,5,6,7,8,9];

        function fillField (currentNumFunc) {


            let currentNum = currentNumFunc;
            for(let i = 1; i < 28; i++) {
                currentNum++;
                let randomNum = getRandomNum();

                function getRandomNum () {
                    currentStackNumber++;

                    if(currentStackNumber > 40) throw new Error('-_-');
                    

                    let randomNum = TechnicalFunc.random(arr.length - 1);
                    

                    if(currentNum%9 == 1 && arrColumnOne.includes(arr[randomNum])) return getRandomNum();
                    if(currentNum%9 == 2 && arrColumnTwo.includes(arr[randomNum])) return getRandomNum();
                    if(currentNum%9 == 3 && arrColumnThree.includes(arr[randomNum])) return getRandomNum();
                    if(currentNum%9 == 4 && arrColumnFour.includes(arr[randomNum])) return getRandomNum();
                    if(currentNum%9 == 5 && arrColumnFive.includes(arr[randomNum])) return getRandomNum();
                    if(currentNum%9 == 6 && arrColumnSix.includes(arr[randomNum])) return getRandomNum();
                    if(currentNum%9 == 7 && arrColumnSeven.includes(arr[randomNum])) return getRandomNum();
                    if(currentNum%9 == 8 && arrColumnEight.includes(arr[randomNum])) return getRandomNum(); 
                    if(currentNum%9 == 0 && arrColumnNine.includes(arr[randomNum])) return getRandomNum();

                    if( currentNum >= 1 && currentNum  <=  9 && trs[0].textContent.includes(`${arr[randomNum]}`) ) return getRandomNum();
                    if( currentNum >= 10 && currentNum <= 18 && trs[1].textContent.includes(`${arr[randomNum]}`) ) return getRandomNum();
                    if( currentNum >= 19 && currentNum <= 27 && trs[2].textContent.includes(`${arr[randomNum]}`) ) return getRandomNum();
                    if( currentNum >= 28 && currentNum <= 36 && trs[3].textContent.includes(`${arr[randomNum]}`) ) return getRandomNum();
                    if( currentNum >= 37 && currentNum <= 45 && trs[4].textContent.includes(`${arr[randomNum]}`) ) return getRandomNum();
                    if( currentNum >= 46 && currentNum <= 54 && trs[5].textContent.includes(`${arr[randomNum]}`) ) return getRandomNum();
                    if( currentNum >= 55 && currentNum <= 63 && trs[6].textContent.includes(`${arr[randomNum]}`) ) return getRandomNum();
                    if( currentNum >= 64 && currentNum <= 72 && trs[7].textContent.includes(`${arr[randomNum]}`) ) return getRandomNum();
                    if( currentNum >= 73 && currentNum <= 81 && trs[8].textContent.includes(`${arr[randomNum]}`) ) return getRandomNum();
                    
                    return randomNum;
                };

                currentStackNumber = 0;

                if(currentNum%9 == 1 )  arrColumnOne.push(arr[randomNum]);
                if(currentNum%9 == 2 )  arrColumnTwo.push(arr[randomNum]);
                if(currentNum%9 == 3 )  arrColumnThree.push(arr[randomNum]);
                if(currentNum%9 == 4 )  arrColumnFour.push(arr[randomNum]);
                if(currentNum%9 == 5 )  arrColumnFive.push(arr[randomNum]);
                if(currentNum%9 == 6 )  arrColumnSix.push(arr[randomNum]);
                if(currentNum%9 == 7 )  arrColumnSeven.push(arr[randomNum]);
                if(currentNum%9 == 8 )  arrColumnEight.push(arr[randomNum]);
                if(currentNum%9 == 0 )  arrColumnNine.push(arr[randomNum]);

                tds[currentNum - 1].firstElementChild.textContent = arr[randomNum];

                arr.splice(arr.indexOf(arr[randomNum]), 1);
                if(currentNum%3 == 0) currentNum += 6;
                if(arr.length == 0) arr = [1,2,3,4,5,6,7,8,9];

                
            };
        };
        fillField(0);
        fillField(3);
        fillField(6);

        this.deletePreloader();
    
    };

    clearField() {
        let tds = document.querySelectorAll('td');
        for(let i = 0; i < 81; i++) {
            tds[i].firstElementChild.textContent = ''
        };
    };

    createFullGameField (level) {
        setTimeout(() => {
            try {
                this.addBaseField();
                InputNumber.gameLevel(level);
            } catch {
                this.clearField();
                this.createFullGameField(level);
            };
        }, 0);
    };

    deletePreloader() {
        document.querySelector('.preloader').classList.add('preloader__not-active');
    };
};

export default new Sudoku();
// tds[i].firstElementChild.textContent = TechnicalFunc.random(1,9) 
