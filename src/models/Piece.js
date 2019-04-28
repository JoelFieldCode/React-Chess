export default class Piece {
    currentSquare = null;
    selectedPiece = null;
    constructor(currentSquare, selectedPiece) {
        this.currentSquare = currentSquare;
        this.selectedPiece = selectedPiece;
    }
}