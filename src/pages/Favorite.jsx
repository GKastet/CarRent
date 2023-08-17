import { PageContainer } from './PagesStyles/CommonPageStyles';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavoriteCars } from 'redux/selectors';
import { CarItem } from 'components/CarItem/CarItem';
import { findCarModal, toggleShowModal } from 'redux/Slices/modalSlice';
import { FavoriteCarsStyled } from './PagesStyles/FavoriteStyled';

const FavoritePage = () => {
  const favoriteCars = useSelector(selectFavoriteCars);
  const dispatch = useDispatch();
  // const [heartColor, setHeartColor] = useState(true)

  const handleOnClick = evt => {
    const findCar = favoriteCars.find(
      car => car.id === Number(evt.currentTarget.id)
    );
    dispatch(toggleShowModal());
    dispatch(findCarModal(findCar));
  };

  return (
    <PageContainer>      
      <FavoriteCarsStyled>
        {/* {favoriteCars?.length > 0 &&
          favoriteCars.map(car => (
            <CarItem key={car.id} car={car} handleOnClick={handleOnClick} />
          ))} */}
          {favoriteCars?.length > 0 ?
          favoriteCars.map(car => (
            <CarItem key={car.id} car={car} handleOnClick={handleOnClick} />
          )): <div>Please choose the car 💖</div>}
      </FavoriteCarsStyled>
    </PageContainer>
  );
};

export default FavoritePage;
