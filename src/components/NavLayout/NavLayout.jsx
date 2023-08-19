import { Outlet } from 'react-router-dom';
import { Navigation } from './Navigation';
import styled from 'styled-components';

export const MainStyled = styled.main`
  margin-top: 40px;
`;

export const NavLayout = () => {
  return (
    <div>
      <Navigation />
      <MainStyled>
        <Outlet />
      </MainStyled>
    </div>
  );
};
