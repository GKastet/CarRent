import React from 'react';
import { PageContainer } from './PagesStyles/CoomonPageStyles';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <PageContainer>
      <div>Home page</div>
      <h1>Wellcome!</h1>
      <p>Our description</p>
      <button type="button">
        <Link to="/catalog">Cars</Link>
      </button>
      <button type="button">
        <Link to="/favorite">Favorite</Link>
      </button>
    </PageContainer>
  );
};

export default HomePage;
