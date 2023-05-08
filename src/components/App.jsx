import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home/Home';
import { SharedLayout } from 'pages/SharedLayout/SharedLayout';
import { Register } from 'pages/Register/Register';
import { Login } from 'pages/Login/Login';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="signup" element={<Register />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </>
  );
};
