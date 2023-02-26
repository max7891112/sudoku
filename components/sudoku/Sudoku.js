import TechnicalFunc from "../../TechnicalFunc/TechnicalFunc";

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
        console.log(tds);
        let currentNum = 0; // текущий номер заполняемой ячейки
        let arrColumnOne = []; // цифры, содрежащиеся в столбце
        let arrColumnTwo = [];
        let arrColumnThree = [];
        let arrColumnFour = [];
        let arrColumnFive = [];
        let arrColumnSix = [];
        let arrColumnSeven = [];
        let arrColumnEight = [];
        let arrColumnNine = [];

        let arr = [1,2,3,4,5,6,7,8,9];
        // for(let i = 0; i <= 8; i++) {
        //     let randomNum = TechnicalFunc.random(arr.length - 1);
        //     tds[i].firstElementChild.textContent = arr[randomNum];
        //     console.log(arr);
        //     console.log(arr[randomNum])
        //     arr.splice(arr.indexOf(arr[randomNum]), 1);
        // };

        // for(let i = 1; i < 28; i++) {
        //     currentNum++;
        //     let randomNum = TechnicalFunc.random(arr.length - 1);
        //     tds[currentNum - 1].firstElementChild.textContent = arr[randomNum];
        //     arr.splice(arr.indexOf(arr[randomNum]), 1);
        //     if(currentNum%3 == 0) currentNum += 6;
        //     if(arr.length == 0) arr = [1,2,3,4,5,6,7,8,9];
        // }

        function fillField (currentNumFunc) {
            let currentNum = currentNumFunc;
            for(let i = 1; i < 28; i++) {
                currentNum++;
                let randomNum = TechnicalFunc.random(arr.length - 1);
                tds[currentNum - 1].firstElementChild.textContent = arr[randomNum];
                arr.splice(arr.indexOf(arr[randomNum]), 1);
                if(currentNum%3 == 0) currentNum += 6;
                if(arr.length == 0) arr = [1,2,3,4,5,6,7,8,9];
            };
        };
        fillField(0);
        fillField(3);
        fillField(6);
        // let currentNum = 0;
        // for(let i = 1; i < 28; i++) {
        //     currentNum++;
        //     console.log(currentNum);
        //     if(currentNum%3 == 0) currentNum += 6;
        // }
    };
};

export default new Sudoku();
// tds[i].firstElementChild.textContent = TechnicalFunc.random(1,9)