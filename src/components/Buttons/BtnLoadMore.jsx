import { useDispatch } from 'react-redux';
import { getCarsPerPageThunk } from 'redux/Thunks/Thunks';
import { BtnLoadMoreS } from './BtnLoadMoreStyled';

let page = 1;

export const BtnLoadMore = () => {
  const dispatch = useDispatch();

  const handlerLoadMore = () => {
    page += 1;
    dispatch(getCarsPerPageThunk(page));
  };

  return (
    <BtnLoadMoreS type="button" onClick={handlerLoadMore}>
      LoadMore
    </BtnLoadMoreS>
  );
};
