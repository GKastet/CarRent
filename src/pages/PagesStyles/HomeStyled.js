import BackImg from '../../img/backImg.jpg';
import styled from 'styled-components';

export const StyledDiv = styled.div`
  box-sizing: border-box;
  width: 100%;
  max-width: 1280px;
  height: 100vh;
  background-image: url(${BackImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: absolute;  
`;

export const TextDiv = styled.div`
  /* outline: 1px solid red; */
  max-width: 350px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin: 0;
  top: 10%;
  left: 20%;
  transform: translate(-50%, -50%);
`;
export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1{
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 10px;
    color: #040458;
  }
  p {
    display: block;
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 10px;
    color: #040458;
  }

`;
export const ButtonsBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
  button {
    width: 100px;
    height: 30px;
    border-radius: 10px;
    color: var(--white);
    border-color: transparent;
    transition: background-color 300ms ease-in;
    background-color: var(--blue-normal);
    &:hover {
      background-color: var(--blue-hover);
    }
  }
`;