import { PageContainer } from './PagesStyles/CommonPageStyles';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavoriteCars, selectModalOpen } from 'redux/selectors';
import { CarItem } from 'components/CarItem/CarItem';
import { findCarModal, toggleShowModal } from 'redux/Slices/modalSlice';
import {
  AddCarImg,
  EmptyTextStyled,
  FavoriteCarsStyled,
} from './PagesStyles/FavoriteStyled';
import { Modal } from 'components/Modal/Modal';
import { Link } from 'react-router-dom';

const FavoritePage = () => {
  const isOpen = useSelector(selectModalOpen);
  const favoriteCars = useSelector(selectFavoriteCars);
  const dispatch = useDispatch();

  const handleOnClick = evt => {
    const findCar = favoriteCars.find(
      car => car.id === Number(evt.currentTarget.id)
    );
    dispatch(findCarModal(findCar));
    dispatch(toggleShowModal());
  };

  return (
    <PageContainer>
      <AddCarImg>
        <FavoriteCarsStyled>
          {favoriteCars?.length > 0 ? (
            favoriteCars.map(car => (
              <CarItem key={car.id} car={car} handleOnClick={handleOnClick} />
            ))
          ) : (
            <EmptyTextStyled>
              Please choose the car <Link to="/catalog">💖</Link>
            </EmptyTextStyled>
          )}
        </FavoriteCarsStyled>
        {isOpen && <Modal />}
      </AddCarImg>
    </PageContainer>
  );
};

export default FavoritePage;
