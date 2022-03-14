import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import MainApp from '../components/MainApp';

export const AppRouter = () => (
  <BrowserRouter>
    <Routes>
      <Route path={'/'} element={<MainApp />} />
      <Route path={'*'} element={<p>Page not found in app</p>} />
    </Routes>
  </BrowserRouter>
);