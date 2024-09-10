import React from "react";

import Categories from '../components/Categories';
import Sort from '../components/sort';
import Pizzablock from '../components/pizzablock';
import Sceleton from '../components/pizzablock/sceleton';
import Pagination from '../components/pogination/index'

export const MainPage = ({searchValue }) => {

  
  const [pizzas, setPizzas] = React.useState([]);
  const [isLauding, setIsLauding] = React.useState(true);
  const [categori, setClickCategory] = React.useState(0);
  const [sortItems, setSortItems] = React.useState({
    name: 'популярности', 
    sort: 'rating',
  });
  
    React.useEffect(() => {
      const sortBy = sortItems.sort.replace('-', '');
      const order = sortItems.sort.includes('-') ? 'asc' : 'desc';
      const category = categori > 0 ? `category=${categori}` : '';
  

      setIsLauding(true);
      fetch(`https://66bfe071ba6f27ca9a554a5b.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}`)
      .then((res) => res.json())
      .then((json) => {
        setPizzas(json);
          setIsLauding(false)});
          window.scroll(0, 0);
        }, 
    [categori, sortItems]); 

    const sceletons = [...new Array(10)].map((_, index) => <Sceleton key={index} />)

    const pizzs = pizzas.filter((items) => {
       if (items.title.toLowerCase().includes(searchValue.toLowerCase())) {
        return true;
       }
       return false;
    }).map((obj) => <Pizzablock key={obj.id} {...obj} image={obj.imageUrl} />)

    return (

        <>
               <div className="container">
        <Categories value={categori} oneClickCategory={(i) => setClickCategory(i)}/>
        <Sort  value={sortItems} clickchangeSort={(i) => setSortItems(i)}/>
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLauding ? sceletons : pizzs }
      </div>
      <Pagination/>
      </>
    );
}

export default MainPage