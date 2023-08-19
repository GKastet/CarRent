import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  font-size: 20px;
  color: navy;
  display: block;
  padding: 10px;
  margin-left: 20px;

  &.active {
    color: orangered;
  }
`;
export const NavStyled = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  box-shadow: 0px 4px 5px 0px rgba(0, 0, 0, 0.75);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: var(--white);

  img {
    display: block;
  }
`;
