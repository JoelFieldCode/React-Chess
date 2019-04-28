import React from 'react';
import { connect } from 'react-redux';
import styled, { css } from 'styled-components'
import { compose } from 'recompose';

const StyledNav = styled.div`
    flex: 1;
`;

const LeftNav = (props) => {
    return (
        <StyledNav>
            {props.selectedPiece && props.selectedPiece.type}
        </StyledNav>
    )
}

const mapStateToProps = (state) => ({
    selectedPiece: state.chessBoard.selectedPiece
})

export default compose (
    connect(mapStateToProps, null)
)(LeftNav);