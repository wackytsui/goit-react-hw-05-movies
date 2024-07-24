import { lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import SharedLayout from './Shared/SharedLayout';

const HomePage = lazy(() => import('pages/Home/HomePage'));
const MoviesPage = lazy(() => import('pages/Movies/MoviesPage'));
const MovieDetailsPage = lazy(() => import('pages/Movie/MovieDetailsPage'));
const CastList = lazy(() => import('./Cast/CastList'));
const ReviewList = lazy(() => import('./Reviews/ReviewsList'));


 const App = () => {
   return (
     <Routes>
       <Route path="/" element={<SharedLayout />}>
         <Route index element={<HomePage />} />
         <Route path="movies" element={<MoviesPage />} />
         <Route path="movies/:movieId" element={<MovieDetailsPage />} >
           <Route path="cast" element={<CastList />} />
           <Route path="reviews" element={<ReviewList />} />
         </Route>
         <Route path="*" element={<Navigate to="/" />} />
       </Route>
    </Routes>
   );
};
export default App;