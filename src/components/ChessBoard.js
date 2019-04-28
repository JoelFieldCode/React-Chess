import { connect } from 'react-redux';
import styled, { css } from 'styled-components'
import React from 'react';

import ChessSquare from './ChessSquare';

const magicNumber = 7;

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
                            return <ChessSquare key={index} index={index} square={square} />
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

export default connect(mapStateToProps, null)(ChessBoard);