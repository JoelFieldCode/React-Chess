import { connect } from 'react-redux';
import React from 'react';
import { compose } from 'redux';

const findPieceBySquareID = (squareID, pieces) => {
    return pieces.find(piece => piece.square_id === squareID) || null;
}

const mapStateToProps = (state) => ({
    pieces: state.chessBoard.pieces
})

const withPiece = (WrappedComponent) => {
    const WP = (props) => {
        const piece = findPieceBySquareID(props.square.id, props.pieces);
        return <WrappedComponent {...props} piece={piece}/>;
    }
    return compose(
        connect(mapStateToProps, null)
    )(WP);
        
}

export default withPiece;