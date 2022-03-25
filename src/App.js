import React from 'react';

import { AllProductsPanel, AddProductPanel, EditProductPanel } from 'components/panels'

import { Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Dashboard, LoginPage, PageNotFound} from './pages';

function App() {
 
  return (
    <>
      <Routes>
        <Route index element={<LoginPage/>}/>
        <Route path='dashboard' element={<Dashboard/>}>
          <Route index element={<AllProductsPanel/>}/>
          <Route path='add' element={<AddProductPanel/>} />
          <Route path='edit' element={<EditProductPanel/>} />
        </Route>
        <Route path='*' element={<PageNotFound/>}/>
      </Routes>
    </>
  );
}

export default App;

 
 