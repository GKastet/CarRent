import { Link } from "react-router-dom";
import { BtnRentalStyled } from "./BtnRentalStyled";

export const BtnRental = () => {
  return (
    <BtnRentalStyled type="button">
      {/* <a href="tel:+380730000000">        
        Rental car        
        </a> */}
        <Link to="tel:+380730000000">Rental car</Link>
    </BtnRentalStyled>
  );
};
