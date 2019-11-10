import { connect } from 'react-redux';
import React from 'react';
import { compose } from 'redux';
import Pawn from '../models/Pawn';

const findPieceBySquareID = (squareID, squares) => {
    return squares.find(square => {
        return square.type && square.square_id === squareID;
    });
}

const mapStateToProps = (state) => ({
    squares: state.chessBoard.squares,
    selectedPiece: state.chessBoard.selectedPiece
})

const squareIsDisabled = (selectedPiece, piece, square, squares) => {
    if (!selectedPiece && !piece) {
        return true;
    }

    if (selectedPiece) {
        if (selectedPiece.square_id === square.square_id) {
            return false;
        }
        if (piece && (selectedPiece.player_id === piece.player_id)) {
            return true;
        }
        switch (selectedPiece.type) {
            case 'PAWN': 
                const canMove = new Pawn(square.square_id, squares, selectedPiece.square_id).canMoveToSquare();
                return !canMove;
            default:
                return true;
        }
    }
}

const withPiece = (WrappedComponent) => {
    const WP = (props) => {
        const piece = findPieceBySquareID(props.square.square_id, props.squares);
        const isSelectedPiece = props.selectedPiece && props.selectedPiece.square_id === props.square.square_id;
        const disabledSquare = squareIsDisabled(props.selectedPiece, piece, props.square, props.squares);
        return (
            <WrappedComponent 
                {...props} 
                isSelectedPiece={isSelectedPiece}
                squareIsDisabled={disabledSquare}
                piece={piece}
            />
        )
    }
    return compose(
        connect(mapStateToProps, null)
    )(WP);
        
}

export default withPiece;