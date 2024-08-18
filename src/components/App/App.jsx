import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from "../Layout/Layout";
import React from 'react';
import { refreshUser } from "../../redux/auth/operations";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectIsRefreshing } from "../../redux/auth/selectors";
import RestrictedRoute from '../RestrictedRoute/RestrictedRoute';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

const HomePage = lazy(() => import('../../pages/Homepage/Homepage'))
const RegistrationPage = lazy(() => import('../../pages/RegistrationPage/RegistrationPage'))
const LoginPage = lazy(() => import('../../pages/LoginPage/LoginPage'))
const ContactsPage = lazy(() => import('../../pages/ContactsPage/ContactsPage'))
const NotFoundPage = lazy(() => import('../../pages/NotFoundPage/NotFoundPage'))

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return isRefreshing ? (<>Refreshing user data. Wait, please.</>) :
    (
    <>
      <Layout>
          <Suspense fallback={null}>
            <Routes>
              <Route path='/'
                element={<HomePage />} />
              <Route path="/register"
                element={<RestrictedRoute component={<RegistrationPage />}
                  redirectTo='/' />} />
              <Route path="/login"
                element={<RestrictedRoute component={<LoginPage />}
                  redirectTo='/contacts' />} />
              <Route path="/contacts"
                element={<PrivateRoute component={<ContactsPage />}
                  redirectTo='/login' />} />
              <Route path="*"
                element={<NotFoundPage />} />
            </Routes>
          </Suspense>    
      </Layout>
    </>
  );
};
export default App;