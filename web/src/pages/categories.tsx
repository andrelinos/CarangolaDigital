import React from 'react';

import styles from '../styles/pages/Categories.module.css';

export default function Categories(): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.containerItens}>
        <h1>Todas as categorias</h1>

        <div className={styles.homeBoxInputs}>
          <input type="text" placeholder="Pesquisar locais por nome" />
          <input type="text" placeholder="Pesquisar por distância (KM)" />
          <button>
            <img src="/assets/icons/search.svg" alt="Search" />
          </button>
        </div>

        <div className="container-filter">
          <select value="" onChange={() => {}}>
            <option value="1">Todos os locais</option>
            <option value="1">Teste 1</option>
            <option value="1">Teste 1</option>
            <option value="1">Teste 1</option>
          </select>
        </div>
      </div>
      <div className="container-map"></div>
    </div>
  );
}
