import React from "react";
import styles from "./notFound.module.scss";

console.log(styles);

const NotFoundPage = () => {
    
    return (
        <div className={styles.root}>
        <h1>
          <span>😕</span>
          <br />
          Ничего не найдено
        </h1>
        <p  className={styles.discription}>
          К сожалени данная страница отсутствует в нашем интернет-магазине
        </p>
      </div>
    )
}

export default NotFoundPage;