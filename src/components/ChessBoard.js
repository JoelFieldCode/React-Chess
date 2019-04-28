import { connect } from 'react-redux';
import styled, { css } from 'styled-components'
import { compose } from 'recompose';
import React from 'react';

import ChessSquare from './ChessSquare';

const ChessBoardContainer = styled.div`
    border: 2px solid cyan;
    display: flex;
    flex-direction: column;
`

const ChessRow = styled.div`
    display: flex;
    flex-direction: row;
`

const ChessBoard = (props) => {
    return (
        <ChessBoardContainer>
            {props.chessBoard.mappedRows.map((row, index) => {
                return (
                    <ChessRow key={index}>
                        {row.map((square) => {
                            return <ChessSquare key={square.id} index={index} square={square} />
                        })}
                    </ChessRow>
                );
            })}
        </ChessBoardContainer>
    )
}

const mapStateToProps = (state) => ({
    ...state,
})

export default compose(
    connect(mapStateToProps, null),
)(ChessBoard);