import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css';
import './login.scss';
import Login from './component/Login';
import CourseMain from './component/CourseMain';
import reportWebVitals from './reportWebVitals';
import AuthCheck from './component/AuthCheck';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Login />} />
    <Route path='/auth' element={<AuthCheck />} />
    <Route path='/courseMain' element={<CourseMain />} />
  </Routes>
</BrowserRouter>  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
