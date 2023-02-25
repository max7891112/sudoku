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
        let trs = document.querySelectorAll('tr');
        let tds = document.querySelectorAll('td');
        let set = new Set()
        for(let i = 0; i <= 8; i++) {
            set.add(i)
        }
        for(let i = 0; i <= 8; i++) {
            let random = Math.floor(Math.random() * set.size);
            tds[i].firstElementChild.textContent = random
            if(set.has(random)) {
                console.log(random)
                set.delete(random);
            }
        }
    };
};

export default new Sudoku()