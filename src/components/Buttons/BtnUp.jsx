import React from 'react';
import { BtnUpS } from './BtnUpStyled';
import { TbArrowBigUpLinesFilled } from 'react-icons/tb';

export const BtnUp = () => {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
  return (
    <BtnUpS type="button" onClick={scrollToTop}>
      <TbArrowBigUpLinesFilled size={40} />
    </BtnUpS>
  );
};
