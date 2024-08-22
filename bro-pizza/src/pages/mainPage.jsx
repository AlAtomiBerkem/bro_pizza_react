import React from "react";

import Categories from '../components/Categories';
import Sort from '../components/sort';
import Pizzablock from '../components/pizzablock';
import Sceleton from '../components/pizzablock/sceleton';




export const MainPage = () => {

  
  const [pizzas, setPizzas] = React.useState([]);
  const [isLauding, setIsLauding] = React.useState(true);
  const [categori, setClickCategory] = React.useState(0);
  const [sortItems, setSortItems] = React.useState(0);
  
  console.log(categori, sortItems, setSortItems);

    React.useEffect(() => {
      setIsLauding(true);
      fetch(`https://66bfe071ba6f27ca9a554a5b.mockapi.io/items?category=${categori ? categori : ''}`)
      .then((res) => res.json())
      .then((json) => {
        setPizzas(json);
          setIsLauding(false)});
          window.scroll(0, 0);
        }, 
    [categori]); 
    
    return (
        <>
               <div className="container">
        <Categories value={categori} oneClickCategory={(i) => setClickCategory(i)}/>
        <Sort  value={sortItems} clickchangeSort={(i) => setSortItems(i)}/>
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