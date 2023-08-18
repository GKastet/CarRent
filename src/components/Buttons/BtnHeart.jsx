import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { BtnHeartS } from './BtnHeartStyled';
//import { useEffect, useRef } from 'react';
// import { useLocation } from 'react-router-dom';
// import { useEffect, useRef } from 'react';
// import { selectFavoriteCars } from 'redux/selectors';
// import { useSelector } from 'react-redux';

export const BtnHeart = ({ onBtnHeartClick, heartColor, isFavorite }) => {
  
  // const location = useLocation()  
  // const locationFavorite = location.pathname.includes('favorite')


  // const favoriteCars = useSelector(selectFavoriteCars);
  // const isFavorite = favoriteCars.find(car => car.id === id)


  // const heartState = useRef(heartColor)
  // useEffect(()=>{
  //   console.log(heartState.current);
  // })

  return (
    <BtnHeartS type="button" onClick={onBtnHeartClick}>
      {/* {locationFavorite? <AiFillHeart size={18} color="var(--blue-hover)"/>:!heartColor?<AiOutlineHeart size={18} color="var(--white)" />:<AiFillHeart size={18} color="var(--blue-hover)"/>} */}
      {isFavorite? <AiFillHeart size={18} color="var(--blue-hover)"/>:!heartColor?<AiOutlineHeart size={18} color="var(--white)" />:<AiFillHeart size={18} color="var(--blue-hover)"/>}      

    </BtnHeartS>
  );
};
