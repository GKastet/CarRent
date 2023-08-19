import styled from 'styled-components';

export const BtnUpS = styled.button`
  outline: 1px solid var(--blue-hover);
  position: fixed;
  right: 170px;
  bottom: 10px;
  display: inline-block;
  width: 64px;
  height: 64px;
  margin: 0;
  padding: 0;
  border: none;
  border-radius: 50%;
  color: var(--blue-normal);
  background-color: rgba(255, 255, 227, 0.6);
  transition: color 250ms ease-in, background-color 250ms ease-in,
    outline 250ms ease-in;
  cursor: pointer;

  &:hover {
    color: var(--blue-hover);
    background-color: lightyellow;
    outline: 1px solid var(--blue-normal);
  }

  @media (max-width: 500px) {
    right: 70px;
  }
  @media (min-width: 501px) and (max-width: 576px) {
    right: 135px;
  }
  @media (min-width: 577px) and (max-width: 767px) {
    right: 50px;
  }
  @media (min-width: 768px) and (max-width: 879px) {
    right: 115px;
  }
  @media (min-width: 880px) and (max-width: 1500px) {
    right: 85px;
  }
`;
