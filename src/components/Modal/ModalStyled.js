import styled from 'styled-components';

export const OverlayStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: var(--backdrop-background);
  /* background-color: lightgray; */
  backdrop-filter: blur(3.5px);
  overscroll-behavior: contain;
  div {
    outline: 1px solid red;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: var(--white);
    max-width: 100vw;
    max-height: 100vh;
    box-sizing: border-box;
    width: 541px;
    height: 700px;
    border-radius: 24px;
    padding: 20px;
    
    /* display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column; */
  }
  button{
    /* margin-left: 300px; */
    
    /* position: absolute; */
    /* z-index: 100; */
  }
`;

