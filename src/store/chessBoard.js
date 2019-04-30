import { mappedRows } from './generateRows';
import initialPieces from './generatePieces';

const initialState = {
    rows: mappedRows,
    pieces: initialPieces,
    selectedPiece: null
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
        const newPieces = state.pieces.filter(piece => {
          // remove any piece that was taken in this move
          return piece.square_id !== action.square.id;
        }).map(piece => {
          // move the piece to the square that was selected
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