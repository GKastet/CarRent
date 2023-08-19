import React from 'react';
import { ConditionsLi, UsualLi, ModalContainer } from './ModalMarkUpStyled';
import { useSelector } from 'react-redux';
import { selectModalCar } from 'redux/selectors';
import { BtnRental } from 'components/Buttons/BtnRental';
import { BtnCloseModal } from 'components/Buttons/BtnCloseModal';

export const ModalMarkUp = ({ handleClickBtnClose }) => {
  const carModal = useSelector(selectModalCar);

  const {
    img,
    make,
    model,
    year,
    rentalPrice,
    address,
    type,
    id,
    accessories,
    fuelConsumption,
    engineSize,
    description,
    functionalities,
    rentalConditions,
    mileage,
  } = carModal;

  const newAddress = address.split(' ');
  const cityString = newAddress[3].split('');
  const city = cityString.slice(0, cityString.length - 1).join('');
  const country = newAddress[4];
  const joinedAccessoriesFunctionalities = accessories.concat(functionalities);
  const conditions = rentalConditions.split(' ');

  const minimumAgeText = conditions.slice(0, 2).join(' ');
  const minimumAgeNumber = conditions[2];
  const validLicense = conditions.slice(4, 7).join(' ');
  const lastCondition = conditions.slice(8, conditions?.length - 1).join(' ');

  return (
    <ModalContainer>
      <BtnCloseModal handleClickBtnClose={handleClickBtnClose} />
      <img src={img} alt={`${make} ${model}`} />
      <h2>
        {make} <span>{model}</span>, {year}
      </h2>
      <ul>
        <UsualLi>{city}</UsualLi>
        <UsualLi>| {country}</UsualLi>
        <UsualLi>| Id: {id}</UsualLi>
        <UsualLi>| Year: {year}</UsualLi>
        <UsualLi>| Type: {type}</UsualLi>
        <UsualLi>| Fuel Consumption: {fuelConsumption}</UsualLi>
        <UsualLi>| Engine Size: {engineSize}</UsualLi>
      </ul>
      <p>{description}</p>
      <h3>Accessories and functionalities:</h3>
      <ul>
        {joinedAccessoriesFunctionalities?.map(position => (
          <UsualLi key={Math.random().toString(36).substring(2, 15)}>
            {position} |
          </UsualLi>
        ))}
      </ul>
      <h3>Rental conditions:</h3>
      <ul>
        <ConditionsLi>
          {minimumAgeText} <span>{minimumAgeNumber}</span>
        </ConditionsLi>
        <ConditionsLi>{validLicense}</ConditionsLi>
        <ConditionsLi>{lastCondition}</ConditionsLi>
        <ConditionsLi>
          Mielage: <span>{mileage.toLocaleString('en-US')}</span>
        </ConditionsLi>
        <ConditionsLi>
          Price: <span>{rentalPrice}</span>
        </ConditionsLi>
      </ul>
      <BtnRental />
    </ModalContainer>
  );
};
