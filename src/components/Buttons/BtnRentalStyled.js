import styled from 'styled-components'

export const BtnRentalStyled = styled.button`

  width: 168px;
  height: 44px;
  padding: 12px 50px;
  border-radius: 12px;
  border-color: transparent;  
  transition: background-color 300ms ease-in;
  background-color: var(--blue-normal);

  &:hover {
    background-color: var(--blue-hover);
  }
  a {
    display: block;
    width: 68px;
    color: var(--white);
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
  }
`;
