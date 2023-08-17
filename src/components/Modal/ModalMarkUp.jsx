import React from 'react';
import { ModalContainer } from './ModalMarkUpStyled';
import { useSelector } from 'react-redux';
import { selectModalCar } from 'redux/selectors';
//import { nanoid } from 'nanoid';
//import { v4 as uuidv4 } from 'uuid'
import { BtnRental } from 'components/Buttons/BtnRental';
import { BtnCloseModal } from 'components/Buttons/BtnCloseModal';
//import { nanoid } from '@reduxjs/toolkit';

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
      <BtnCloseModal handleClickBtnClose={handleClickBtnClose}/>      
      <img src={img} alt={`${make} ${model}`} width={500} height={334}/>

      <h2>
        {make} <span>{model}</span>, {year}
      </h2>
      <ul>
        <li>{city}</li>
        <li>| {country}</li>
        <li>| Id: {id}</li>
        <li>| Year: {year}</li>
        <li>| Type: {type}</li>
        <li>| Fuel Consumption: {fuelConsumption}</li>
        <li>| Engine Size: {engineSize}</li>
      </ul>
      <p>{description}</p>
      <h3>Accessories and functionalities:</h3>
      <ul>
        {joinedAccessoriesFunctionalities?.map(position => (
            <li key={Math.random().toString(36).substring(2, 15)}>{position} |</li>
            ))}
      </ul>
      <h3>Rental conditions:</h3>
      <ul>
        <li>{minimumAgeText} <span>{minimumAgeNumber}</span></li>
        <li>{validLicense}</li>
        <li>{lastCondition}</li>
        <li>Mielage: {mileage.toLocaleString('en-US')}</li>
        <li>Price: {rentalPrice}</li>
      </ul>
      <BtnRental/>
    </ModalContainer>
  );
};
