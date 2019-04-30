import { connect } from 'react-redux';
import React from 'react';
import { compose } from 'redux';

const findPieceBySquareID = (squareID, pieces) => {
    return pieces.find(piece => piece.square_id === squareID) || null;
}

const mapStateToProps = (state) => ({
    pieces: state.chessBoard.pieces,
    selectedPiece: state.chessBoard.selectedPiece
})

const withPiece = (WrappedComponent) => {
    const WP = (props) => {
        const piece = findPieceBySquareID(props.square.id, props.pieces);
        const isSelectedPiece = props.selectedPiece && piece && (piece.id === props.selectedPiece.id);
        const squareIsDisabled = (props.selectedPiece && piece) && props.selectedPiece.player_id === piece.player_id;
        
        return (
            <WrappedComponent 
                {...props} 
                isSelectedPiece={isSelectedPiece}
                squareIsDisabled={squareIsDisabled}
                piece={piece}
            />
        )
    }
    return compose(
        connect(mapStateToProps, null)
    )(WP);
        
}

export default withPiece;