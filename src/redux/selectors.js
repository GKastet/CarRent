export const selectCarsCatalog = state => state.cars.cars;
export const selectCarsPerPage = state => state.cars.carsPerPage;
export const selectFilteredCars = state => state.cars.filter;

export const selectModalOpen = state => state.modal.isOpen;
export const selectModalCar = state => state.modal.carModal;

export const selectFavoriteCars = state => state.favorite.favoriteCars;
