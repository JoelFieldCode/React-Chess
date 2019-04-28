import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import styled, { css } from 'styled-components'
import { compose } from 'recompose';
import React from 'react';
import green from '@material-ui/core/colors/green';
import indigo from '@material-ui/core/colors/indigo';
import Avatar from '@material-ui/core/Avatar';

import withPiece from '../containers/withPiece';

import { selectPiece, moveToSquare } from '../store/chessBoard';

const StyledChessSquare = styled.div`
    height: 70px;
    width: 70px;
    display: flex;
    font-size: 14px;
    align-items: center;
    justify-content: center;
    &:hover {
      background: ${indigo[500]}
    }
    ${props =>
        props.even &&
        css`
          background: white;
          color: black;
        `};
`

const styles = {
    greenAvatar: {
      color: '#fff',
      fontSize: 10,
      backgroundColor: green[500],
    },
  };

const ChessSquare = (props) => {
    let extraAvatarProps = {};
    let extraChessSquareProps = {};
    if (props.selectedPiece) {
      extraChessSquareProps.onClick = () => {
        // move square action
        console.log('here');
        props.moveToSquare(props.square);
      }
    } else {
      extraAvatarProps.onClick = () => {
        console.log('no here');
        props.selectPiece(props.piece);
      }
    }


    return (
       <StyledChessSquare {...extraChessSquareProps} even={props.square.even}>
        {/* {props.square.id} */}
            {props.piece && 
                <Avatar
                  {...extraAvatarProps}
                  src={props.piece.url} 
                  className={props.classes.greenAvatar} 
                />
            }
    
       </StyledChessSquare>
    )
}

const mapDispatchToProps = dispatch => {
  return {
    selectPiece: piece => dispatch(selectPiece(piece)),
    moveToSquare: (square, piece) => dispatch(moveToSquare(square, piece)) 
  }
}

const mapStateToProps = (state) => ({
  selectedPiece: state.chessBoard.selectedPiece
})

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withStyles(styles),
    withPiece
)(ChessSquare)