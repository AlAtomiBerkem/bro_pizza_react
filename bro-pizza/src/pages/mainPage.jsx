import React from "react";

import Categories from '../components/Categories';
import Sort from '../components/sort';
import Pizzablock from '../components/pizzablock';
import Sceleton from '../components/pizzablock/sceleton';




export const MainPage = () => {
    const [pizzas, setPizzas] = React.useState([]);
    const [isLauding, setIsLauding] = React.useState(true);
  
    React.useEffect(() => {
      fetch('https://66bfe071ba6f27ca9a554a5b.mockapi.io/items')
        .then((res) => res.json())
        .then((json) => {
          setPizzas(json);
          setIsLauding(false)});
    }, []);

    return (
        <>
        <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLauding
          ? [...new Array(10)].map((_, index) => <Sceleton key={index} />)
          : pizzas.map((items) => (
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
      </>
    );
}

export default MainPage