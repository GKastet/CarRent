import { NavStyled, StyledLink } from "./NavigationStyled"

export const Navigation = () => {
    return(
        <NavStyled>
            <StyledLink to='/'>Home</StyledLink>
            <StyledLink to='/cars'>Cars 🚗</StyledLink>
            <StyledLink to='/favorite'>Favorite 💖</StyledLink>
        </NavStyled>

    )
}