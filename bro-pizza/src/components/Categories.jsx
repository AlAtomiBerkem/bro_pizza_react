import React from "react";


function Categories({value, oneClickCategory}) {
  
  const catigories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
    return (
      <div className="categories">
        <ul>
          {
            catigories.map((categiriaName, i) => [
              <li 
              key={i}
              onClick={()=> oneClickCategory(i)} 
              className={value === i ? 'active' : ''}>
              {categiriaName}
              </li>
            ])
          }
        </ul>
      </div>
    );
  }

  export default Categories;