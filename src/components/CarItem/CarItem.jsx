import PropTypes from 'prop-types';
import { ButtonS, CarItemStyled, ImgThumb } from './CarItemStyled';
import { BtnHeart } from 'components/Buttons/BtnHeart';
import { useDispatch, useSelector } from 'react-redux';
import { selectCarsCatalog, selectFavoriteCars } from 'redux/selectors';
import { useEffect, useState } from 'react';
import { deleteCarFavorite, findCarFavorite } from 'redux/Slices/favoriteSlice';
import { notifyCarAdded, notifyCarRemoved } from 'components/Toastify/Toastify';

export const CarItem = ({ car, handleOnClick }) => {
  const {
    img,
    make,
    model,
    year,
    rentalPrice,
    address,
    rentalCompany,
    type,
    id,
    accessories,
  } = car;
  const newAddress = address.split(' ');
  const cityString = newAddress[3].split('');
  const city = cityString.slice(0, cityString.length - 1).join('');
  const country = newAddress[4];
  const accessoryShort = accessories[0].split(' ').slice(0, 2).join(' ');

  const carsCatalog = useSelector(selectCarsCatalog);
  const favoriteCars = useSelector(selectFavoriteCars);
  const dispatch = useDispatch();

  const favouriteCar = carsCatalog.find(car => car.id === id);
  const isFavorite = favoriteCars.find(car => car.id === id);

  const [heartColor, setHeartColor] = useState(false);

  useEffect(() => {
    if (heartColor) setHeartColor(!heartColor);
  }, [heartColor]);

  const onBtnHeartClick = () => {
    setHeartColor(!heartColor);

    if (isFavorite) {
      const deleteCar = favoriteCars.filter(car => car.id !== id);
      dispatch(deleteCarFavorite(deleteCar));
      notifyCarRemoved();
      return;
    }
    notifyCarAdded();
    dispatch(findCarFavorite(favouriteCar));
  };

  return (
    <CarItemStyled key={id}>
      <ImgThumb>
        <img src={img} alt={`${make} ${model}`} />
      </ImgThumb>
      <BtnHeart
        onBtnHeartClick={onBtnHeartClick}
        heartColor={heartColor}
        isFavorite={isFavorite}
      />
      <div>
        <h3>
          {make} <span>{model}</span>, {year}
        </h3>
        <h3>{rentalPrice}</h3>
      </div>
      <ul>
        <li>{city}</li>
        <li>| {country}</li>
        <li>| {rentalCompany}</li>
        <li>| {type}</li>
        <li>| {make}</li>
        <li>| {id}</li>
        <li>| {accessoryShort}...</li>
      </ul>
      <ButtonS type="button" id={id} onClick={handleOnClick}>
        <span>Learn more</span>
      </ButtonS>
    </CarItemStyled>
  );
};

CarItem.propTypes = {
  car: PropTypes.object.isRequired,
};
