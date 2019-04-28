import { initialRows, mappedRows } from './generateRows';
import initialPieces from './generatePieces';

const initialState = {
    rows: initialRows,
    mappedRows: mappedRows,
    pieces: initialPieces,
}

const SELECT_PIECE = 'SELECT_PIECE';
const MOVE_TO_SQUARE = 'MOVE_TO_SQUARE';

export const selectPiece = (piece) => ({    
    type: SELECT_PIECE,
    piece
});

export const moveToSquare = (square) => ({    
  type: MOVE_TO_SQUARE,
  square,
});

export default (state = initialState, action) => {
    switch (action.type) {
     case SELECT_PIECE:
      return {
        ...state,
        selectedPiece: action.piece
      }
      case MOVE_TO_SQUARE:
        const newPieces = state.pieces.map(piece => {
          if (piece.id !== state.selectedPiece.id) {
            return piece;
          } else {
            return {
              ...piece,
              square_id: action.square.id,
            }
          }
        });
        return {
          ...state,
          selectedPiece: null,
          pieces: newPieces,
        }
     default:
      return state
    }
   }