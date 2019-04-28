import Piece from './Piece';

export default class Pawn extends Piece {
    canMoveToSquare () {
        console.log(this);
        const squareID = this.currentSquare.id;
        const pieceLocationID = this.selectedPiece.square_id;

        if (squareID < 33) {
            if (pieceLocationID + 7 === squareID) {
                return true;
            }
            else if (pieceLocationID + 8 === squareID) {
                return true;
            }
            else if (pieceLocationID + 9 === squareID) {
                return true;
            }
            // TOP
        } else {
            // BOTTOM
        }
        return false;
    }
}