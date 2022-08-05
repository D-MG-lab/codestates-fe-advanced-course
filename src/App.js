import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import Posts from './pages/posts';
import Detail from './pages/detail';
import './App.css';
import GlobalStyle from './GlobalStyle';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Nav />
      <Routes>
        <Route path='/' element={<Posts />} />
        <Route path='/detail/:id' element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
