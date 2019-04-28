import { connect } from 'react-redux';
import React from 'react';
import { compose } from 'redux';

import Pawn from '../models/Pawn';

const findPieceBySquareID = (squareID, pieces) => {
    return pieces.find(piece => piece.square_id === squareID) || null;
}

const mapStateToProps = (state) => ({
    pieces: state.chessBoard.pieces,
    selectedPiece: state.chessBoard.selectedPiece
})

const canMoveToSquare = (square, selectedPiece) => {
    if (!selectedPiece) {
        return false;
    }

    if (square.id === selectedPiece.square_id) {
        return true;
    }
    
    switch (selectedPiece.type) {
        case 'PAWN': 
            const pawn = new Pawn(square, selectedPiece);
            return pawn.canMoveToSquare();
    }
}

const withPiece = (WrappedComponent) => {
    const WP = (props) => {
        const piece = findPieceBySquareID(props.square.id, props.pieces);
        const isSelectedPiece = props.selectedPiece && piece && (piece.id === props.selectedPiece.id);
        const squareIsSelectable = canMoveToSquare(props.square, props.selectedPiece);
        console.log(squareIsSelectable)
        return (
            <WrappedComponent 
                {...props} 
                isSelectedPiece={isSelectedPiece}
                squareIsSelectable={squareIsSelectable}
                piece={piece}
            />
        )
    }
    return compose(
        connect(mapStateToProps, null)
    )(WP);
        
}

export default withPiece;