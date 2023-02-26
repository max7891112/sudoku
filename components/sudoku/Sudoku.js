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

        function fillField (currentNumFunc) {
            let currentNum = currentNumFunc;
            for(let i = 1; i < 28; i++) {
                currentNum++;
                let randomNum = getRandomNum();

                function getRandomNum () {
                    let randomNum = TechnicalFunc.random(arr.length - 1);
                    

                    if(currentNum%9 == 1 ) {
                        if (arrColumnOne.includes(arr[randomNum])) return getRandomNum();
                        // console.log(`
                        //     numberStr: 1,
                        //     arr: ${arrColumnOne},
                        //     randomNum: ${randomNum},
                        // `);
                    };
                    if(currentNum%9 == 2 )  {
                        if (arrColumnTwo.includes(arr[randomNum])) return getRandomNum();
                        // console.log(`
                        //     numberStr: 2,
                        //     arr: ${arrColumnThree},
                        //     currentNum: ${randomNum},
                        // `);
                    };
                    if(currentNum%9 == 3 )  {
                        if (arrColumnThree.includes(arr[randomNum])) return getRandomNum();
                        // console.log(`
                        //     numberStr: 3,
                        //     arr: ${arrColumnThree},
                        //     currentNum: ${randomNum},
                        // `);
                    };
                    if(currentNum%9 == 4 )  {
                        if (arrColumnFour.includes(arr[randomNum])) return getRandomNum();
                        // console.log(`
                        //     numberStr: 4,
                        //     arr: ${arrColumnFour},
                        //     currentNum: ${randomNum},
                        // `);
                    };
                    if(currentNum%9 == 5 )  {
                        if (arrColumnFive.includes(arr[randomNum])) return getRandomNum();
                        // console.log(`
                        //     numberStr: 5,
                        //     arr: ${arrColumnFive},
                        //     currentNum: ${randomNum},
                        // `);
                    };
                    if(currentNum%9 == 6 )  {
                        if (arrColumnSix.includes(arr[randomNum])) return getRandomNum();
                        // console.log(`
                        //     numberStr: 6,
                        //     arr: ${arrColumnSix},
                        //     currentNum: ${randomNum},
                        // `);
                    };
                    if(currentNum%9 == 7 )  {
                        if (arrColumnSeven.includes(arr[randomNum])) return getRandomNum();
                        // console.log(`
                        //     numberStr: 7,
                        //     arr: ${arrColumnSeven},
                        //     currentNum: ${randomNum},
                        // `);
                    };
                    if(currentNum%9 == 8 )  {
                        // if (arrColumnEight.includes(arr[randomNum])) return getRandomNum();
                        // console.log(`
                        //     numberStr: 8,
                        //     arr: ${arrColumnEight},
                        //     currentNum: ${randomNum},
                        // `);
                    };
                    if(currentNum%9 == 0 )  {
                        if (arrColumnNine.includes(arr[randomNum])) return getRandomNum();
                        // console.log(`
                        //     numberStr: 9,
                        //     arr: ${arrColumnNine},
                        //     currentNum: ${randomNum},
                        // `);
                    };
                    
                    return randomNum;
                };

                console.log(randomNum);
                console.log('ПРОВЕРКА')

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
    
    };
};

export default new Sudoku();
// tds[i].firstElementChild.textContent = TechnicalFunc.random(1,9)