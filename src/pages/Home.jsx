import React from 'react';
import { PageContainer } from './PagesStyles/CommonPageStyles';
import { Link } from 'react-router-dom';
import {
  ButtonsBox,
  StyledDiv,
  TextBox,
  TextDiv,
} from './PagesStyles/HomeStyled';

const HomePage = () => {
  return (
    <PageContainer>
      <StyledDiv>
        <TextDiv>
          <TextBox>
            <h1>Wellcome!</h1>
            <p>Choose the car you like and moove freely!</p>
          </TextBox>
          <ButtonsBox>
            <button type="button">
              <Link to="/catalog">Cars</Link>
            </button>
            <button type="button">
              <Link to="/favorite">Favorite</Link>
            </button>
          </ButtonsBox>
        </TextDiv>
      </StyledDiv>
    </PageContainer>
  );
};

export default HomePage;
