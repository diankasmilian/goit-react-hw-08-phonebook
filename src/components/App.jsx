import { Routes, Route, Navigate } from 'react-router-dom';
import { AppBar } from './AppBar/AppBar';

export const App = () => {
  return (
    <>
    <AppBar/>
    <Routes>
      <Route path='/' element={<div>Це домашня сторінка</div>}/>
      <Route path='/register' element={<div>Це форма регістрації</div>}/>
      <Route path='/login' element={<div>Це форма логіну</div>}/>
      <Route path='/contacts' element={<div>Це контакти</div>}/>
      <Route path='*' element={<Navigate to='/'/>}/>
    </Routes>
    </>
  )
}
