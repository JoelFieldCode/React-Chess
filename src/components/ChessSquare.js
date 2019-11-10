import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import styled, { css } from 'styled-components'
import { compose } from 'recompose';
import React from 'react';
import green from '@material-ui/core/colors/green';
import indigo from '@material-ui/core/colors/indigo';
import orange from '@material-ui/core/colors/orange';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

import withPiece from '../containers/withPiece';

import { selectPiece, moveToSquare, unSelectPiece } from '../store/chessBoard';

const StyledChessSquare = styled.div`
    height: 70px;
    width: 70px;
    display: flex;
    color: red;
    font-size: 14px;
    align-items: center;
    justify-content: center;
    position: relative;
    cursor: pointer;
    &:hover {
      background: ${indigo[500]} !important;
    }
    ${props =>
        props.active &&
        css`
          // background: ${green[100]} !important;
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

const StyledCloseButton = styled(IconButton)`
  position: absolute !important;
  top: 0px;
  right: 0px;
  padding: 0 !important;
  color: ${orange[500]} !important;
`;


const ChessSquare = (props) => {
    let extraAvatarProps = {};
    let extraChessSquareProps = {};
    if (props.selectedPiece) {
      extraChessSquareProps.onClick = () => {
        // user selected the same square as the selected piece, reset
        if (props.selectedPiece.square_id === props.square.square_id) {
          props.unSelectPiece()
        } else {
          // user selected a square to move the piece to
          props.moveToSquare(props.square);
        }
      }
    } else {
      extraChessSquareProps.onClick = () => {
        props.selectPiece(props.square);
      }
    }

    return (
       <StyledChessSquare
        className="square"
        {...extraChessSquareProps} 
        active={props.squareIsSelectable}
        disabled={props.squareIsDisabled}
      >
        {props.isSelectedPiece &&
          <StyledCloseButton>
            <CloseIcon />
          </StyledCloseButton>
        }
        {/* <p style={{color: green}}>
          {props.square.square_id}
        </p> */}
        {props.piece && 
            <Avatar
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
    moveToSquare: (square, piece) => dispatch(moveToSquare(square, piece)),
    unSelectPiece: () => dispatch(unSelectPiece())
  }
}

export default compose(
    connect(null, mapDispatchToProps),
    withStyles(styles),
    withPiece
)(ChessSquare)