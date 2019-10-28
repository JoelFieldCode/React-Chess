import { connect } from 'react-redux';
import styled, { css } from 'styled-components'
import { compose } from 'recompose';
import React from 'react';

import ChessSquare from './ChessSquare';

const ChessBoardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(8, 1fr);
`

const outOfBoundRightColumn = [9, 19, 29, 39, 49, 59, 69, 79, 89, 99, 109, 119]

const ChessBoard = (props) => {
    return (
        <ChessBoardContainer>
            {props.squares.map((square, squareIndex) => {
                if (square.square_id > 19 && square.square_id < 99 && square.square_id % 10 !== 0 && !outOfBoundRightColumn.includes(square.square_id)) {
                    return <ChessSquare key={squareIndex} index={squareIndex} square={square} />
                }
            })}
        </ChessBoardContainer>
    )
}

const mapStateToProps = (state) => ({
    mappedRows: state.chessBoard.rows,
    squares: state.chessBoard.squares
})

export default compose(
    connect(mapStateToProps, null),
)(ChessBoard);