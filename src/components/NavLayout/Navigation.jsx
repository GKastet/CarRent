import { NavStyled, StyledLink } from './NavigationStyled';
import LogoImg from '../../img/car-rent.png';
export const Navigation = () => {
  return (
    <NavStyled>
      <StyledLink to="/">
        <img src={LogoImg} alt="car rent logo" width={22} />
      </StyledLink>
      <StyledLink to="/">Home</StyledLink>
      <StyledLink to="/catalog">Cars 🚗</StyledLink>
      <StyledLink to="/favorite">Favorite 💖</StyledLink>
    </NavStyled>
  );
};
