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
    cursor: pointer;
    &:hover {
      background: ${indigo[500]}
    }
    ${props =>
        props.even &&
        css`
          background: white;
          color: black;
        `};
    ${props =>
        props.active &&
        css`
          // background: ${green[500]} !important;
        `};
    ${props =>
        props.disabled &&
        css`
          pointer-events: none;
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
        props.moveToSquare(props.square);
      }
    } else {
      extraAvatarProps.onClick = () => {
        props.selectPiece(props.piece);
      }
    }

    return (
       <StyledChessSquare 
        {...extraChessSquareProps} 
        active={props.squareIsSelectable}
        disabled={props.squareIsDisabled}
        even={props.square.even}
      >
        {props.piece && 
            <Avatar
              {...extraAvatarProps}
              src={props.piece.url} 
              className={props.isSelectedPiece ? props.classes.greenAvatar : ''} 
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

export default compose(
    connect(null, mapDispatchToProps),
    withStyles(styles),
    withPiece
)(ChessSquare)