import styled from 'styled-components';
import addCarPicture from '../../img/addCar.jpg';

export const AddCarImg = styled.div`
  width: 1280px;
  height: 100vh;
  background-image: url(${addCarPicture});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 0px;
  background-attachment: fixed;
`;

export const FavoriteCarsStyled = styled.ul`
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 50px 29px;
  padding: 20px;
  background-color: rgba(255, 255, 255, 0.7);
`;

export const EmptyTextStyled = styled.h3`
  display: flex;
  gap: 10px;
  padding: 20px 0;
  font-size: 24px;
  color: var(--text-navy);
`;
