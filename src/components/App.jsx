import { Routes, Route, Navigate } from 'react-router-dom';
import { ContactView } from 'views/ContactsView';
import { HomeView } from 'views/HomeView';
import { LoginView } from 'views/LoginView';
import { RegisterView } from 'views/RegisterView';
import {AppBar} from './AppBar/AppBar';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCurrentUser } from 'redux/auth/auth-operations';

export const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchCurrentUser())
  }, [dispatch])
  
  return (
    <>
    <AppBar/>
    <Routes>
      <Route path='/' element={<HomeView/>}/>
      <Route path='/register' element={<RegisterView/>}/>
      <Route path='/login' element={<LoginView/>}/>
      <Route path='/contacts' element={<ContactView/>}/>
      <Route path='*' element={<Navigate to='/'/>}/>
    </Routes>
    </>
  )
}
