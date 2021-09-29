import React, { useContext } from 'react';
import styles from './index.module.css';
import MenuContext from '../../MenuContext';

const Itemize = () => {
  const {categories} = useContext(MenuContext);
  console.log('categories',categories)
  let handleClick = (url) => {
    window.location.href = `/category/${url}`;
  };

  return (
      <div className={styles.itemizeWrap}>
        {
          (categories && (categories.length > 0)) && categories.map(res => {
            return (
              <span
                key={res.EngName}
                className={styles.item} onClick={() => handleClick(res.EngName)}>
                { res.name }
              </span>
            )
          })
        }
      </div>
  );
};

export default Itemize;

