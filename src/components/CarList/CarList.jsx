import { useDispatch, useSelector } from 'react-redux';
import { selectCarsCatalog, selectCarsPerPage, selectModalOpen } from 'redux/selectors';
import { CarItem } from '../CarItem/CarItem';
import { CatalogStyled } from './CarListStyled';
import { Modal } from 'components/Modal/Modal';
import { findCarModal, toggleShowModal } from 'redux/Slices/modalSlice';

export const CarList = () => {
  //const carsCatalog = useSelector(selectCarsCatalog);
  const carsPerPage = useSelector(selectCarsPerPage);

  
  const isOpen = useSelector(selectModalOpen);
  const allCars = useSelector(selectCarsCatalog);
  const dispatch = useDispatch();

  const handleOnClick = evt => {
    const findCar = allCars.find(
      car => car.id === Number(evt.currentTarget.id)
    );
    dispatch(toggleShowModal());
    dispatch(findCarModal(findCar));
  };

  return (
    <>      
      <CatalogStyled>
        {carsPerPage?.length &&
          carsPerPage.map(car => (
            <CarItem key={car.id} car={car} handleOnClick={handleOnClick} />
          ))}
      </CatalogStyled>
      {isOpen && <Modal />}
    </>
  );
};
