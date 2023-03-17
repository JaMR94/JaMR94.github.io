import Link from "next/link"; 
import styles from '../../styles/butomSelectProducts.module.css';
import React from 'react';

const menunav = (props) => {
  return (
    
    <ul class="nav justify-content-center">
      <li class="nav-item">
        <a class="nav-link" href="#" id={styles.linksDelMenuNav}>Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" id={styles.linksDelMenuNav}>Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" id={styles.linksDelMenuNav}>Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#" id={styles.linksDelMenuNav}>Link</a>
      </li>
    </ul>
  );
};



export default menunav; // Exportamos el componente Cardsection