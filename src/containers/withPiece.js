import { connect } from 'react-redux';
import React from 'react';
import { compose } from 'redux';

const findPieceBySquareID = (squareID, squares) => {
    return squares.find(square => {
        return square.type && square.square_id === squareID;
    });
}

const mapStateToProps = (state) => ({
    squares: state.chessBoard.squares,
    selectedPiece: state.chessBoard.selectedPiece
})

const squareIsDisabled = (selectedPiece, piece, square) => {
    // nothing is selected
    if (!selectedPiece || !piece) {
        return false;
    }
    // the selected piece's square should be enabled so the user can cancel 
    if (selectedPiece.square_id === square.id) {
        return false;
    }
    // the piece belongs to the current piece's army
    if (selectedPiece.player_id === piece.player_id) {
        return true;
    }
}

const withPiece = (WrappedComponent) => {
    const WP = (props) => {
        const piece = findPieceBySquareID(props.square.square_id, props.squares);
        const isSelectedPiece = props.selectedPiece && props.selectedPiece.square_id === props.square.square_id;
        const disabledSquare = squareIsDisabled(props.selectedPiece, piece, props.square);
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