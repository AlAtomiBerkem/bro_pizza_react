import './App.css';
import React from 'react';

import Header from './components/header';
import Categories from './components/Categories';
import Sort from './components/sort';
import Pizzablock from './components/pizzablock';
import Pizzas from './assets/pizzaz.json';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {Pizzas.map((items) => (
              <Pizzablock
                key={items.id}
                title={items.title}
                price={items.price}
                image={items.imageUrl}
                sizes={items.sizes}
                types={items.types}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
