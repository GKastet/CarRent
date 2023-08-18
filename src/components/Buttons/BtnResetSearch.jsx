import { useDispatch } from 'react-redux';
import { searchCars } from 'redux/Slices/carsSlice';

export const BtnResetSearch = () => {
  const dispatch = useDispatch();

  const handlerResetSearch = () => {
    dispatch(searchCars(null));
    // formik.resetForm()
    // Form.reset()
  };
  return (
    <button type="button" onClick={handlerResetSearch}>
      Back
    </button>
  );
};
