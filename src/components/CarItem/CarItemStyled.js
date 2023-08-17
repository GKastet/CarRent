import styled from 'styled-components';

export const CarItemStyled = styled.li`
  /* outline: 1px solid red; */
  width: 100%;
  max-width: 274px;
  height: 426px;
  
  div {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
    padding: 0 1px;
    h3 {
      font-size: 14px;
      font-weight: 500;
      line-height: 24px;
    }
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    gap: 6px;
    margin-bottom: 26px;
    padding: 0 1px;

    li {
      font-size: 10px;
      line-height: 18px;
      color: var(--text-lightgrey);
    }
  }
 
`;

export const ButtonS = styled.button`
  width: 100%;
  height: 44px;
  padding: 12px 99px;
  border-radius: 12px;
  border-color: transparent;  
  transition: background-color 300ms ease-in;
  background-color: var(--blue-normal);

  &:hover {
    background-color: var(--blue-hover);
  }
  span {
    display: block;
    width: 75px;
    color: var(--white);
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
  }
`;

export const BtnHeart = styled.button`
  width: 18px;
  height: 18px;
  position: absolute;
`;

export const ImgThumb = styled.div`
  overflow: hidden;
  border-radius: 14px;
  width: 100%;
  height: 268px;
  margin-bottom: 14px;

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
