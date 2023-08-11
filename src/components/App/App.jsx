import { Routes, Route, Navigate } from 'react-router-dom';
import { useEffect, lazy } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCurrentUser } from 'redux/auth/auth-operations';
import { PrivateRoute } from '../PrivateRoute';
import { Layout } from '../Layout/Layout';
import { RestrictedRoute } from '../RegistedRoute';
import { useAuth } from 'hooks/useAuth';
import { Container } from './App.styled';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Loader } from 'components/Loader/Loader';

const HomeView = lazy(() => import('../../views/HomeView'));
const ContactView = lazy(() => import('../../views/ContactsView'));
const LoginView = lazy(() => import('../../views/LoginView'));
const RegisterView = lazy(() => import('../../views/RegisterView'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Container>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeView />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegisterView />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginView />}
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactView />} />
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
      <ToastContainer />
    </Container>
  );
};
