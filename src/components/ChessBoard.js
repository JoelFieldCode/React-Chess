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