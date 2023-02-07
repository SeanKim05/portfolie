import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Slide from './pages/Slide/Slide';
import Main from './pages/Main/Main';
import Navigation from './components/UI/Layout/Navigation';
import HashTag from './components/MyName/HashTag';
import IDo from './pages/IDo/IDo';
import Overlay from './components/UI/Layout/Overlay';
import NavContext from './context/nav-context';

const Router = () => {
  const navCtx = useContext(NavContext);

  return (
    <BrowserRouter>
      {navCtx.clicked ? <Overlay /> : ''}
      <Navigation />
      <Routes>
        <Route path="/" element={<Slide />} />
        <Route path="/main" element={<Main />} />
        <Route path="/hash_detail/:tag_id" element={<HashTag />} />
        <Route path="/IDo" element={<IDo />} />
        {/* <Route path="/test" element={<Carousel />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
