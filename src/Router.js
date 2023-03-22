import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Intro from './pages/Intro/Intro';
import Main from './pages/Main/Main';
import Navigation from './components/UI/Layout/Navigation';
import MyNameDetail from './components/MyNameComp/MyNameDetail';
import IDo from './pages/IDo/IDo';
import Overlay from './components/UI/Layout/Overlay';
import NavContext from './context/nav-context';
import Test from './Test/Test';
import MyName from './pages/MyName/MyName';
import NotFound from './pages/NotFound/NotFound';

const Router = () => {
  const { clicked } = useContext(NavContext);

  return (
    <BrowserRouter>
      {clicked ? <Overlay /> : ''}
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Intro />} />
        <Route path="/main" element={<Main />} />
        <Route path="/myName" element={<MyName />} />
        <Route path="/myname_detail/:tag_id" element={<MyNameDetail />} />
        <Route path="/iDo" element={<IDo />} />
        <Route path="/test" element={<Test />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
