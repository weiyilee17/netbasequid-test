import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Content from '../components/Content';
import SecondHeader from '../components/SecondHeader';

export const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path={'/'} element={
        <>
          <SecondHeader />
          <Content />
        </>
      } />
      <Route path={'*'} element={<><SecondHeader /></>} />
    </Routes>
  </BrowserRouter>
);