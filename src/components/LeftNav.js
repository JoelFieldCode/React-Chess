import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components'
import { compose } from 'recompose';
import Avatar from '@material-ui/core/Avatar';
import deepOrange from '@material-ui/core/colors/deepOrange';
import deepPurple from '@material-ui/core/colors/deepPurple';
import blue from '@material-ui/core/colors/blue';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const StyledNav = styled.div`
    margin-top: 16px;
    align-items: center;
    justify-content: center;
    display: flex;
    flex: 1;
`;

const StyledSelectedPieceContainer = styled.div`
    display: flex;
    align-items: center;
`;

const styles = {
    blueAvatar: {
        margin: 10,
        color: '#fff',
        backgroundColor: blue[500]
    },
  }

const LeftNav = (props) => {
    return (
        <StyledNav>
            {props.selectedPiece && 
                <StyledSelectedPieceContainer>
                    {/* Player {props.selectedPiece.player_id} 's turn. */}
                    <Typography inline style={{color: 'white'}} variant="subtitle1" gutterBottom>
                        Piece selected:
                    </Typography>
                    <Avatar
                        className={props.classes.blueAvatar}
                        src={props.selectedPiece.url} 
                    />
                </StyledSelectedPieceContainer>
            }
        </StyledNav>
    )
}

const mapStateToProps = (state) => ({
    selectedPiece: state.chessBoard.selectedPiece
})

export default compose (
    connect(mapStateToProps, null),
    withStyles(styles)
)(LeftNav);