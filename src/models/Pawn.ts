import Piece from './Piece';

export default class Pawn extends Piece {
    canMoveToSquare () {
        if (this.squareIsOutOfBounds) {
            return false;
        }
        let availableSquares;
        if (this.isMovingUp) {
            availableSquares = [this.selectedPieceSquare - 9, this.selectedPieceSquare - 11]
            availableSquares = availableSquares.filter(availableSquare => this.squareHasPieceToAttack(availableSquare))
            availableSquares.push(this.selectedPieceSquare - 10);
        } else {
            availableSquares = [this.selectedPieceSquare + 9, this.selectedPieceSquare + 11]
            availableSquares = availableSquares.filter(availableSquare => this.squareHasPieceToAttack(availableSquare))
            availableSquares.push(this.selectedPieceSquare + 10);
        }
        
        return availableSquares.includes(this.currentSquare);
    }

    private squareHasPieceToAttack(square: number): boolean {
        return this.chessSquares.find(chessSquare => chessSquare.square_id === square && chessSquare.player_id)
    }

    private get isMovingUp() {
        return this.selectedPieceSquare > 58;
    }
}