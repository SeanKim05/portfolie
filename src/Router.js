import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Slide from './pages/Slide/Slide';
import Main from './pages/Main/Main';
import Navigation from './components/UI/Navigation';
import HashTag from './components/HashTagDetail/HashTag';

const Router = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Slide />} />
        <Route path="/main" element={<Main />} />
        <Route path="/hash_detail/:id" element={<HashTag />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
