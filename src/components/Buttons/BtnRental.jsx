import { Link } from 'react-router-dom';
import { BtnRentalStyled } from './BtnRentalStyled';

export const BtnRental = () => {
  return (
    <BtnRentalStyled type="button">
      <Link to="tel:+380730000000">Rental car</Link>
    </BtnRentalStyled>
  );
};
