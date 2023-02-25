import TechnicalFunc from './TechnicalFunc/TechnicalFunc.js';
import RenderGameField from './components/sudoku/renderGameField.js';
import Sudoku from './components/sudoku/Sudoku.js';
RenderGameField.renderGameField(9,9,'.sudoku__field');
Sudoku.addMarkup();
Sudoku.addBaseField();
TechnicalFunc.random();