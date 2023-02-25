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
        // let trs = document.querySelectorAll('tr');
        // let tds = document.querySelectorAll('td');
        // let set = new Set(1,2,3,4,5,6,7,8,9)
        // for(let i = 0; i < 9; i++) {
        //     let randomNum = TechnicalFunc.random(1,9)
        //     // console.log(randomNum)
        //     for(let elem of set) {
        //         if(randomNum == elem) {
        //             tds[i].firstElementChild.textContent = randomNum
        //             map.delete(randomNum)
        //         } else {
        //             // continue
        //         };  
        //     };
        // };
    };
};

export default new Sudoku()
// tds[i].firstElementChild.textContent = TechnicalFunc.random(1,9)