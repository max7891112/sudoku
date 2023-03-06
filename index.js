import RenderGameField from './components/sudoku/renderGameField.js';
import Sudoku from './components/sudoku/Sudoku.js';
import InputNumber from './components/InputNumber/InputNumber.js';
RenderGameField.renderGameField(9,9,'.sudoku__field');
Sudoku.addMarkup();
Sudoku.createFullGameField('easy');
InputNumber.listenerForNumpad();
InputNumber.listenerForTd();
InputNumber.listenerForLevelButtons();
InputNumber.listenerForNewGame();


// Sudoku.addMarkup();
// Sudoku.addBaseField();
// Sudoku.addSimpleField()
