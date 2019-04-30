const outerEdgeSquares = [];

for(var i = 0; i < (8 * 9); i = i + 8) {
    outerEdgeSquares.push(i);
    outerEdgeSquares.push(i + 1);
}

export default class Piece {
    currentSquare = null;
    selectedPiece = null;
    constructor(currentSquare, selectedPiece) {
        this.currentSquare = currentSquare;
        this.selectedPiece = selectedPiece;
    }

    get isOuterEdgeSquare () {
        return outerEdgeSquares.includes(this.currentSquare.id);
    }
}