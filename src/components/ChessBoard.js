import { connect } from 'react-redux';
import styled, { css } from 'styled-components'
import { compose } from 'recompose';
import React from 'react';

import ChessSquare from './ChessSquare';

const ChessBoardContainer = styled.div`
    display: flex;
    flex: 3;
    flex-direction: column;
    margin-top: 20px;
`

const ChessRow = styled.div`
    display: flex;
    flex-direction: row;
`

const ChessBoard = (props) => {
    return (
        <ChessBoardContainer>
            {props.mappedRows.map((mappedRow, rowIndex) => {
                return (
                    <ChessRow key={rowIndex}>
                        {mappedRow.map((square, squareIndex) => {
                            return <ChessSquare key={square.id} index={squareIndex} square={square} />
                        })}
                    </ChessRow>
                );
            })}
        </ChessBoardContainer>
    )
}

const mapStateToProps = (state) => ({
    mappedRows: state.chessBoard.rows
})

export default compose(
    connect(mapStateToProps, null),
)(ChessBoard);