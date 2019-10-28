import { connect } from 'react-redux';
import React from 'react';
import { compose } from 'redux';

const findPieceBySquareID = (squareID, pieces) => {
    // console.log(pieces, squareID);
    return pieces.find(piece => {
        // console.log(piece);
        if (piece.square_id > 36) {
            console.log(piece, squareID);
        }
        if (piece && piece.square_id) {
            return piece.square_id === squareID;
        }
        return false;
    });
}

const mapStateToProps = (state) => ({
    pieces: state.chessBoard.pieces,
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
        const piece = findPieceBySquareID(props.square.square_id, props.pieces);
        const isSelectedPiece = props.selectedPiece && piece && (piece.id === props.selectedPiece.id);
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