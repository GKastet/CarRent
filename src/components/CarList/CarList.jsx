import { useDispatch, useSelector } from 'react-redux';
import { selectCarsCatalog, selectModalOpen } from 'redux/selectors';
import { CarItem } from '../CarItem/CarItem';
import { CatalogStyled } from './CarListStyled';
import { Modal } from 'components/Modal/Modal';
import { findCarModal, toggleShowModal } from 'redux/Slices/modalSlice';

export const CarList = () => {
  const carsCatalog = useSelector(selectCarsCatalog);
  const isOpen = useSelector(selectModalOpen);
  const dispatch = useDispatch();
  const allCars = useSelector(selectCarsCatalog);

  const handleOnClick = evt => {
    const findCar = allCars.find(
      car => car.id === Number(evt.currentTarget.id)
    );
    dispatch(toggleShowModal());
    dispatch(findCarModal(findCar));
  };

  return (
    <>
      <div>CarList</div>
      <CatalogStyled>
        {carsCatalog?.length &&
          carsCatalog.map(car => (
            <CarItem key={car.id} car={car} handleOnClick={handleOnClick} />
          ))}
      </CatalogStyled>
      {isOpen && <Modal />}
    </>
  );
};
