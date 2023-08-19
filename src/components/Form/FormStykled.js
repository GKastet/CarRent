import styled from 'styled-components';

export const FormStyled = styled.form`
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  justify-content: center;
  margin-bottom: 50px;
  gap: 10px;

  label {
    display: flex;
    flex-direction: column;
    height: 52px;
    font-size: 14px;
  }

  input,
  select {
    box-sizing: border-box;
    width: 160px;
    height: 30px;
    margin-top: 5px;
    padding: 0 8px;
    border-radius: 10px;
    background-color: #d7f0f8;
    border-color: transparent;
    outline-color: transparent;
    font-size: 16px;

    &:hover,
    :focus {
      border-color: green;
    }
  }

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
