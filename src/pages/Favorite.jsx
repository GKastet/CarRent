import { PageContainer } from './PagesStyles/CommonPageStyles';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavoriteCars, selectModalOpen } from 'redux/selectors';
import { CarItem } from 'components/CarItem/CarItem';
import { findCarModal, toggleShowModal } from 'redux/Slices/modalSlice';
import { FavoriteCarsStyled } from './PagesStyles/FavoriteStyled';
import { Modal } from 'components/Modal/Modal';

const FavoritePage = () => {
  const isOpen = useSelector(selectModalOpen);
  const favoriteCars = useSelector(selectFavoriteCars);
  const dispatch = useDispatch();
  // const [heartColor, setHeartColor] = useState(true)

  const handleOnClick = evt => {
    const findCar = favoriteCars.find(
      car => car.id === Number(evt.currentTarget.id)
    );
    dispatch(findCarModal(findCar));
    dispatch(toggleShowModal());
  };

  return (
    <PageContainer>
      <FavoriteCarsStyled>
        {favoriteCars?.length > 0 ? (
          favoriteCars.map(car => (
            <CarItem key={car.id} car={car} handleOnClick={handleOnClick} />
          ))
        ) : (
          <div>Please choose the car 💖</div>
        )}
      </FavoriteCarsStyled>
      {isOpen && <Modal />}
    </PageContainer>
  );
};

export default FavoritePage;
