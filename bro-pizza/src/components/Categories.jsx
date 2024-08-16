import React from "react";


function Categories() {

  const [activIndex, setActivIndex] = React.useState(0);

  const catigories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

  const setOneClickCategory = (index) => {
    setActivIndex(index);
  }
    return (
      <div className="categories">
        <ul>
          {
            catigories.map((index, i) => [
              <li 
              key={i}
              onClick={()=> setOneClickCategory(i)} 
              className={activIndex === i ? 'active' : ''}>
              {index}
              </li>
            ])
          }
        </ul>
      </div>
    );
  }

  export default Categories;