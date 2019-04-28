import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import styled, { css } from 'styled-components'
import { compose } from 'recompose';
import React from 'react';
import green from '@material-ui/core/colors/green';
import Avatar from '@material-ui/core/Avatar';
import withPiece from '../containers/withPiece';

const StyledChessSquare = styled.div`
    height: 70px;
    width: 70px;
    display: flex;
    font-size: 14px;
    align-items: center;
    justify-content: center;
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
    return (
       <StyledChessSquare even={props.square.even}>
        {/* {props.square.id} */}
            {props.piece && 
                <Avatar src={props.piece.url} className={props.classes.greenAvatar}>
                    {/* {props.piece && props.piece.type} */}
                </Avatar>
            }
    
       </StyledChessSquare>
    )
}

export default compose(
    withStyles(styles),
    withPiece
)(ChessSquare)