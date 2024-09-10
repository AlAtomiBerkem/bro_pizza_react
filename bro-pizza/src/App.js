import './App.css';
import React from 'react';

import Header from './components/header';
import MainPage from './pages/mainPage';
import BasketPage from './pages/basketPage';
import { Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFount'

function App() {
  const [searchValue, setSearchValue] = React.useState('');

  console.log(searchValue, 'INPUT VALUE');

  return (
    <div className="wrapper">
      <Header searchValue={searchValue} setSearchValue={setSearchValue}/>
      <div className="content">
        <div className="container">
          <Routes>
            <Route path="/" element={<MainPage searchValue={searchValue} />}/>
            <Route path='/basket' element={<BasketPage/>}/>
            <Route path="*" element={<NotFound/>}/>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;



