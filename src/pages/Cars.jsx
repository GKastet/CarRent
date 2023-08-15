import React from 'react';
import { PageContainer } from './PagesStyles/CoomonPageStyles';
import { Form } from 'components/Form/Form';
import { CarList } from 'components/CarList/CarList';


const CarsPage = () => {
  return (
    <PageContainer>
      <div>CarsPage</div>
      <Form/>
      <CarList/>
      <button type='button'>Button</button>
      <button type='button'>LoadMore</button>
    </PageContainer>
  );
};
export default CarsPage;
