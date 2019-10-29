import initialSquares from './generateSquares';

const initialState = {
    squares: initialSquares,
    selectedPiece: null
}

const SELECT_PIECE = 'SELECT_PIECE';
const MOVE_TO_SQUARE = 'MOVE_TO_SQUARE';
const UNSELECT_PIECE = 'UNSELECT_PIECE';

export const selectPiece = (piece) => ({    
    type: SELECT_PIECE,
    piece
});

export const moveToSquare = (square) => ({    
  type: MOVE_TO_SQUARE,
  square,
});

export const unSelectPiece = () => ({    
  type: UNSELECT_PIECE,
});

export default (state = initialState, action) => {
    switch (action.type) {
     case SELECT_PIECE:
      return {
        ...state,
        selectedPiece: action.piece
      }
      case UNSELECT_PIECE:
        return {
          ...state,
          selectedPiece: null,
        }
      case MOVE_TO_SQUARE:
        const newSquares = state.squares.map(square => {
          // remove any piece that was taken in this move
          if (square.square_id === action.square.square_id) {
            return {
              square_id: square.square_id
            }
          } else {
            return square;
          }
        }).map(square => {
          // remove selected piece from it's current square
          if (square.square_id === state.selectedPiece.square_id) {
            return {
              square_id: square.square_id
            }
          } else if (action.square.square_id === square.square_id) {
            // move selected piece to selected square
            return {
              ...square,
              type: state.selectedPiece.type,
              url: state.selectedPiece.url,
              player_id: state.selectedPiece.player_id
            }
          }
          else {
            return square;
          }
        });

        return {
          ...state,
          selectedPiece: null,
          squares: newSquares,
        }
     default:
      return state
    }
   }