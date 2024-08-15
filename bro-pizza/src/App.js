import './App.css';

import React from 'react';

import Header from './components/header';
import Categories from './components/Categories';
import Sort from './components/sort';
import Pizzablock from './components/pizzablock';

function App() {
  return (
    <div class="wrapper">
      <Header />
      <div class="content">
        <div class="container">
          <div class="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 class="content__title">Все пиццы</h2>
          <div class="content__items">
          <Pizzablock title='Мексиканская пицца' price={350} />
          <Pizzablock title='Домашняя пицца' price={450} />
          <Pizzablock title='Обычная пицца' price={300}/>
          <Pizzablock title='Необычная пицца' price={301}/>
          <Pizzablock title='Дьявольская пицца' price={666}/>
          <Pizzablock title='Пицца Айтишник' price={404}/>
          <Pizzablock title='Голубая пицца ' price={609}/>
          <Pizzablock title='Гавайская пицца ' price={470}/>
          <Pizzablock title='Ананасовая пицца' price={520}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
