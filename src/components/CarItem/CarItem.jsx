import PropTypes from 'prop-types';
import { BtnHeart, ButtonS, CarItemStyled, ImgThumb } from './CarItemStyled';

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

  // const isOpen = useSelector(selectModalOpen);
  // console.log('isOpen', isOpen);

  return (
    <CarItemStyled key={id}>
      <ImgThumb>
        <img src={img} alt={`${make} ${model}`} />
      </ImgThumb>
      {/* <BtnHeart type='button'>
        <AiOutlineHeart/>
        </BtnHeart>      */}
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
