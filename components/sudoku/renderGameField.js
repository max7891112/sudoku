class RenderGameField {
    renderGameField(row,column,container){
        let table = document.createElement('table') // создаем таблицу
        let gameField = document.querySelector(container)
        for(let i = 0; i < row; i++) {
            let tr = document.createElement('tr')
            for(let j = 0; j < column; j++) {
                let td = document.createElement('td')
                let span = document.createElement('span')
                td.append(span)
                tr.append(td)
            }
            table.append(tr)
        }
        gameField.append(table)
    }
}

export default new RenderGameField()