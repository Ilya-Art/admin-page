import React, { Component } from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
    // position: fixed;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 60px;
    border-bottom: 1px solid gray;
`;

export default class Header extends Component {
    render() {
        return (
            <HeaderContainer>
                <span>CINEMA</span>
            </HeaderContainer>
        );
    }
}
