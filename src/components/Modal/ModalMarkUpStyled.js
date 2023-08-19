import styled from 'styled-components';

export const ModalContainer = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  position: relative;

  img {
    height: 360px;
    border-radius: 14px;
    margin-bottom: 6px;
  }

  h2 {
    font-size: 18px;
    font-weight: 500;
    line-height: 24px;
    margin-bottom: 4px;

    span {
      color: var(--blue-hover);
    }
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 4px;
    margin-bottom: 6px;
    padding: 0 1px;
  }

  p {
    font-size: 14px;
    font-weight: 400;
    line-height: 16px;
    margin-bottom: 6px;
  }

  h3 {
    font-size: 14px;
    font-weight: 500;
    line-height: 20px;
  }
`;
export const UsualLi = styled.li`
  font-size: 12px;
  font-weight: 400;
  line-height: 14px;
  color: var(--text-lightgrey);
`;

export const ConditionsLi = styled.li`
  outline: 1px solid grey;
  height: 24px;
  padding: 0 10px;
  border-radius: 35px;
  display: flex;
  align-items: center;
  font-size: 12px;
  font-weight: 600;
  line-height: 18px;
  color: black;
  background-color: #f9f9f9;

  span {
    color: var(--blue-hover);
  }
`;
