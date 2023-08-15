import { Suspense, lazy } from 'react';
import Loader from './Loader/Loader';
import { Navigate, Route, Routes } from 'react-router-dom';
import { NavLayout } from './NavLayout/NavLayout';

const HomePage = lazy(()=>import('../pages/Home'))
const CarsPage = lazy(()=>import('../pages/Cars'))
const FavoritePage = lazy(()=>import('../pages/Favorite.jsx'))

export const App = () => {
  return (
   <Suspense fallback={<Loader/>}>
    <Routes>
      <Route path='/' element={<NavLayout/>}>
        <Route index element={<HomePage/>}/>
        <Route path='catalog' element={<CarsPage/>}/>
        <Route path='favorite' element={<FavoritePage/>}/>
        <Route path="*" element={<Navigate to="/" />} />
      </Route>
    </Routes>

   </Suspense>
  );
};
