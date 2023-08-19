import styled from 'styled-components';

export const BtnLoadMoreS = styled.button`
  width: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 50px auto 0px;
  padding: 0 10px;
  text-decoration: underline;
  color: var(--blue-hover);
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  border-radius: 14px;
  border-color: transparent;
  transition: background-color 300ms ease-in;
  &:hover {
    background-color: lightgray;
  }
`;
