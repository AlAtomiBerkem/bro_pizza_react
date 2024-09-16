import React from "react";
import { useSelector, useDispatch } from 'react-redux'

import Categories from '../components/Categories';
import Sort from '../components/sort';
import Pizzablock from '../components/pizzablock';
import Sceleton from '../components/pizzablock/sceleton';
import Pagination from '../components/pogination/index'
import { searchContext } from "../App";
import { setCategoryId } from "../redux/slises/filterSlice";
export const MainPage = () => {


  const {categori, sort} = useSelector((state) => state.filters);
  const sortItems = sort.sort;

  const dispatch = useDispatch();
  const oneClickCategory = (id) => {
        dispatch(setCategoryId(id));
  }

  
  const {searchValue} = React.useContext(searchContext);
  const [pizzas, setPizzas] = React.useState([]);
  const [isLauding, setIsLauding] = React.useState(true);
  const [correntPage, setCurrentPage] = React.useState(1 )
  
    React.useEffect(() => {
      const sortBy = sortItems.replace('-', '');
      const order = sortItems.includes('-') ? 'asc' : 'desc';
      const category = categori > 0 ? `category=${categori}` : '';
  

      setIsLauding(true);
      fetch(`https://66bfe071ba6f27ca9a554a5b.mockapi.io/items?page=${correntPage}&limit=4&${category}&sortBy=${sortBy}&order=${order}`)
      .then((res) => res.json())
      .then((json) => {
        setPizzas(json);
          setIsLauding(false)});
          window.scroll(0, 0);
        }, 
    [categori, sortItems, correntPage]); 

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
        <Categories value={categori} oneClickCategory={oneClickCategory}/>
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLauding ? sceletons : pizzs }
      </div>
      <Pagination onChangePage={number => setCurrentPage(number)}/>
      </> 
    );
}

export default MainPage