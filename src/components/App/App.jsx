import css from "./App.module.css";
import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { refreshUser } from "../../redux/auth/operations";
import { selectIsRefreshing } from "../../redux/auth/selectors";
import RestrictedRoute from "../RestrictedRoute";
import PrivateRoute from "../PrivateRoute";
import Layout from "../Layout/Layout";

const HomePage = lazy(() => import('../../pages/Homepage/HomePage'))
const RegistrationPage = lazy(() => import('../../pages/RegistrationPage/RegistrationPage'))
const LoginPage = lazy(() => import('../../pages/LoginPage/LoginPage'))
const ContactsPage = lazy(() => import('../../pages/ContactsPage/ContactsPage'))
const ErrorPage = lazy(() => import('../../pages/ErrorPage/ErrorPage'))

export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
    useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ?
    (<div>Wait, please. Refreshing Data.</div>) :
    (
      <Layout>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<RestrictedRoute component={<RegistrationPage />} redirectTo='/' />} />
            <Route path="/login" element={<RestrictedRoute component={<LoginPage />} redirectTo='/contacts' />} />
            <Route path="/contacts" element={<PrivateRoute component={<ContactsPage />} redirectTo='/login' />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </Suspense>
      </Layout>
    )
}
