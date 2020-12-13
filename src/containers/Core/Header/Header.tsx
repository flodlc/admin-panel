import React, {useContext} from 'react';
import styled from "styled-components";
import {Link, NavLink} from "react-router-dom";
import {AuthContext} from "../../../contextes/user.context";
import {Container} from "../../../components/UI/Styled";

const StyledHeader = styled.div`
    padding-top: 30px;
    padding-bottom: 30px;
    background: white;
    box-shadow: 0 0 10px 0 rgba(0,0,0,0.11);
`;

const HeaderContainer = styled(Container)`
    display: flex;
    align-items: center;
`;

const Menus = styled.div`
    display: flex;
    align-items:center;
    margin: -10px;
    
    > * {
        margin: 10px;
    }
    
    @media (max-width: 700px) {
      flex-direction: column;
      align-items: flex-start;
    }
`;

const HeaderItem = styled('div')`
    cursor: pointer;
    color: unset;
    text-decoration: none;
    position: relative;
    
    &.active:before {
      content: '';
      bottom: -10px;
      width: 100%;
      position: absolute;
      height: 3px;
      background-color: #4e4e4e;
      border-radius: 10px;
    }
    
    &:hover {
      color: #686868;
    }
`;

const Logo = styled(HeaderItem)`
    font-size: 22px;
    margin-right: auto;
    margin-left: 0;
`;

const Header: React.FC = () => {
    const {setUser} = useContext(AuthContext);

    const logout = () => {
        localStorage.clear();
        setUser(null);
    };

    return (
        <StyledHeader data-testid="Header">
            <HeaderContainer paddingVertical={0}>
                <Logo as={Link} to={'/'}>
                    Nestor démo
                </Logo>
                <Menus>
                    <HeaderItem as={NavLink} activeClassName='active' to={`/apartments`}>Appartements</HeaderItem>
                    <HeaderItem as={NavLink} activeClassName='active' to={`/clients`}>Clients</HeaderItem>
                    <HeaderItem as={NavLink} activeClassName='active' to={`/bookings`}>Réservations</HeaderItem>
                    <HeaderItem onClick={logout}>Logout</HeaderItem>
                </Menus>
            </HeaderContainer>
        </StyledHeader>)
};

export default Header;
