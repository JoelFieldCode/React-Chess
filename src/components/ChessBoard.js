import { connect } from 'react-redux';
import styled from 'styled-components'
import { compose } from 'recompose';
import React from 'react';

import ChessSquare from './ChessSquare';

const ChessBoardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: 70px repeat(8, 70px) 40px;
`
const ChessBoard = (props) => {
    return (
        <ChessBoardContainer>
            {props.availableSquares.map((square, squareIndex) => {
               return <ChessSquare key={squareIndex} index={squareIndex} square={square} />  
            })}
        </ChessBoardContainer>
    )
}

const outOfBoundRightColumn = [9, 19, 29, 39, 49, 59, 69, 79, 89, 99, 109, 119]

const mapStateToProps = (state) => ({
    availableSquares: state.chessBoard.squares.filter(square => {
        return square.square_id > 19 && square.square_id < 99 && square.square_id % 10 !== 0 && !outOfBoundRightColumn.includes(square.square_id)
    })
})

export default compose(
    connect(mapStateToProps, null),
)(ChessBoard);