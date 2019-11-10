const outOfBoundRightColumn = [9, 19, 29, 39, 49, 59, 69, 79, 89, 99, 109, 119]

export default class Piece {
    currentSquare: number;
    chessSquares: Array<any>;
    selectedPieceSquare: number;
    
    constructor(currentSquare: number, chessSquares: Array<any>, selectedPieceSquare: number) {
        this.currentSquare = currentSquare;
        this.chessSquares = chessSquares;
        this.selectedPieceSquare = selectedPieceSquare;
    }

    get squareIsOutOfBounds () {
        return !this.chessSquares.filter(square => {
            return square.square_id > 19 && square.square_id < 99 && square.square_id % 10 !== 0 && !outOfBoundRightColumn.includes(square.square_id)
        }).find(square => square.square_id === this.currentSquare)
    }
}