import './App.css';
import React, { createContext } from 'react';

import Header from './components/header';
import MainPage from './pages/mainPage';
import BasketPage from './pages/basketPage';
import { Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFount'


 export const searchContext = React.createContext();

function App() {

  const [searchValue, setSearchValue] = React.useState('');

  console.log(searchValue, 'INPUT VALUE');

  return (
    <searchContext.Provider value={{searchValue, setSearchValue}}>
          <div className="wrapper">
      <Header/>
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
    </searchContext.Provider>
  );
}

export default App;




