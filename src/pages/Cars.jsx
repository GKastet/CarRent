import React, { useEffect } from 'react';
import { PageContainer } from './PagesStyles/CommonPageStyles';
import { Form } from 'components/Form/Form';
import { CarList } from 'components/CarList/CarList';
import { useDispatch, useSelector } from 'react-redux';
import { selectCarsCatalog, selectCarsPerPage } from 'redux/selectors';
import { getCarsCatalogThunk, getCarsPerPageThunk } from 'redux/Thunks/Thunks';
import { BtnLoadMore } from 'components/Buttons/BtnLoadMore';

const CarsPage = () => {
  const carsCatalog = useSelector(selectCarsCatalog);
  const carsPerPage = useSelector(selectCarsPerPage);
  

  const dispatch = useDispatch();

  useEffect(() => {
    if (carsCatalog?.length) return;    
    dispatch(getCarsCatalogThunk());
    dispatch(getCarsPerPageThunk());
  }, [carsCatalog?.length, dispatch]);


  return (
    <PageContainer>
      <div>        
        <Form />
        <CarList />
        {carsPerPage?.length < carsCatalog?.length ? <BtnLoadMore/> : <></>}
      </div>
    </PageContainer>
  );
};
export default CarsPage;
