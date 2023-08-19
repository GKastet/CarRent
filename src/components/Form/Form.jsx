import { useDispatch, useSelector } from 'react-redux';
import { selectCarsCatalog, selectFilteredCars } from 'redux/selectors';
import { searchCars } from 'redux/Slices/carsSlice';
import { Field, Formik } from 'formik';
import { BtnResetSearch } from 'components/Buttons/BtnResetSearch';
import {
  notifyCarSearch,
  notifyCarSearchError,
} from 'components/Toastify/Toastify';
import * as Yup from 'yup';
import { nanoid } from '@reduxjs/toolkit';
import { FormStyled } from './FormStykled';

export const SearchForm = () => {
  const dispatch = useDispatch();
  const carsCatalog = useSelector(selectCarsCatalog);
  const filteredCars = useSelector(selectFilteredCars);

  const handlerOnSubmit = values => {
    function capitalizeString(str) {
      return str.charAt(0).toUpperCase() + str.slice(1);
    }
    
    const capitalizedModel = capitalizeString(values.model);
    const carPrice = `$${values.rentalPrice}`;

    const filteredCars = capitalizedModel
      ? carsCatalog.filter(car => car.make === capitalizedModel)
      : carsCatalog.filter(car => car.rentalPrice === carPrice);
    
    if (!filteredCars?.length > 0) {
      notifyCarSearchError();
      return;
    } else {
      dispatch(searchCars(filteredCars));
      notifyCarSearch(filteredCars?.length);
    }
    // resetForm()
  };
  const prices = [
    10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170,
    180, 190, 200,
  ];

  const validationSchema = Yup.object({
    //model: Yup.string().required('Required model name'),
    //rentalPrice: Yup.string().required('Please select a car price'),
  });

  return (
    <Formik
      initialValues={{
        model: '',
        rentalPrice: '',
        fromMileage: '',
        toMileage: '',
      }}
      onSubmit={values => {
        handlerOnSubmit(values);
      }}
      validationSchema={validationSchema}
    >
      {formik => (
        <FormStyled onSubmit={formik.handleSubmit}>
          <label>
            Car brand
            <div>
              <input
                onChange={formik.handleChange}
                values={formik.values.model}
                type="text"
                name="model"
                placeholder="enter car brand"
                // required
              />
            </div>
          </label>

          <label htmlFor="rentalPrice">
            Price/ 1hour
            <Field as="select" id="rentalPrice" name="rentalPrice">
              <option value="">Select a price ($)</option>
              {prices.map(price => (
                <option key={nanoid()}>{price}</option>
              ))}
            </Field>
          </label>

          <label>
            Car mileage / km
            <div>
              <input
                onChange={formik.handleChange}
                values={formik.values.fromMileage}
                type="number"
                name="fromMileage"
                placeholder="from"
              />
              <input
                onChange={formik.handleChange}
                values={formik.values.toMileage}
                type="number"
                name="toMileage"
                placeholder="to"
              />
            </div>
          </label>
          <button type="submit">Search</button>
          {filteredCars?.length > 0 && <BtnResetSearch />}
        </FormStyled>
      )}
    </Formik>
  );
};
