import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { BtnHeartS } from './BtnHeartStyled';

export const BtnHeart = ({ onBtnHeartClick, heartColor, isFavorite }) => {
  return (
    <BtnHeartS type="button" onClick={onBtnHeartClick}>
      {isFavorite ? (
        <AiFillHeart size={18} color="var(--blue-hover)" />
      ) : !heartColor ? (
        <AiOutlineHeart size={18} color="var(--white)" />
      ) : (
        <AiFillHeart size={18} color="var(--blue-hover)" />
      )}
    </BtnHeartS>
  );
};
