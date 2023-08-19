import { useDispatch, useSelector } from 'react-redux';
import { selectCarsCatalog, selectModalOpen } from 'redux/selectors';
import { CarItem } from '../CarItem/CarItem';
import { CatalogStyled } from './CarListStyled';
import { Modal } from 'components/Modal/Modal';
import { findCarModal, toggleShowModal } from 'redux/Slices/modalSlice';

export const CarList = ({ cars }) => {
  const isOpen = useSelector(selectModalOpen);
  const allCars = useSelector(selectCarsCatalog);
  const dispatch = useDispatch();

  const handleOnClick = evt => {
    const findCar = allCars.find(
      car => car.id === Number(evt.currentTarget.id)
    );
    dispatch(findCarModal(findCar));
    dispatch(toggleShowModal());
  };

  return (
    <div>
      <CatalogStyled>
        {cars?.length &&
          cars.map(car => (
            <CarItem key={car.id} car={car} handleOnClick={handleOnClick} />
          ))}
      </CatalogStyled>
      {isOpen && <Modal />}
    </div>
  );
};
