import { connect } from 'react-redux';
import styled, { css } from 'styled-components'
import React from 'react';

const StyledChessSquare = styled.div`
    height: 50px;
    width: 50px;
    ${props =>
        props.even &&
        css`
          background: white;
          color: black;
        `};
`

const ChessSquare = (props) => {
    return (
       <StyledChessSquare even={props.square.even}>
            {props.square.id}
       </StyledChessSquare>
    )
}

export default ChessSquare;

// const mapStateToProps = (state) => ({
//     ...state
// })

// export default connect(mapStateToProps, null)(ChessBoard);