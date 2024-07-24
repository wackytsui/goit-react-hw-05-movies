import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { Header } from 'components/Header/Header';
import css from './SharedLayout.module.css';

const SharedLayout = () => {
  return (
    <>
      <div className={css.container}>
        <Header />

        <Suspense fallback={<Loader />}>
             <Outlet />
        </Suspense>
      </div>
    </>
  );
};

export default SharedLayout;
