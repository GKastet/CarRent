import React, { useEffect } from 'react';
import { PageContainer } from './PagesStyles/CommonPageStyles';
import { Form } from 'components/Form/Form';
import { CarList } from 'components/CarList/CarList';
import { useDispatch, useSelector } from 'react-redux';
import { selectCarsCatalog } from 'redux/selectors';
import { getCarsCatalogThunk } from 'redux/Thunks/Thunks';

const CarsPage = () => {
  const carsCatalog = useSelector(selectCarsCatalog);

  const dispatch = useDispatch();

  useEffect(() => {
    if (carsCatalog?.length) return;
    console.log('api request');
    dispatch(getCarsCatalogThunk());
  }, [carsCatalog?.length, dispatch]);

  return (
    <PageContainer>
      <div>        
        <Form />
        <CarList />
        <button type="button">Button</button>
        <button type="button">LoadMore</button>
      </div>
    </PageContainer>
  );
};
export default CarsPage;
