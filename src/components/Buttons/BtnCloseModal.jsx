import { AiOutlineClose } from "react-icons/ai"
import { BtnCloseStyled } from "./BtnCloseModalStyled"

export const BtnCloseModal = ({handleClickBtnClose}) => {
  return (
    <BtnCloseStyled type="button" onClick={handleClickBtnClose}>
        <AiOutlineClose size={24} fill="black" />
      </BtnCloseStyled>
  )
}
