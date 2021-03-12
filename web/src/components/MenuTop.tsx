import React from 'react';

import Link from 'next/link';

import styles from '../styles/components/MenuTop.module.css';

export function MenuTop(): JSX.Element {
  return (
    <div className={styles.container}>
      <div className={styles.menucontainer}>
        <span className={styles.logo}>
          <img src="/assets/images/logo.svg" alt="Logo" />
        </span>
        <div className={styles.menu}>
          <ul>
            <li>
              <Link href="/">
                <a>Início</a>
              </Link>
            </li>
            <li>
              <Link href="/categories">
                <a>Categorias</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>Sobre</a>
              </Link>
            </li>
            <li>
              <Link href="/account">
                <a>Conta</a>
              </Link>
            </li>
            <li>
              <Link href="/help">
                <a>Ajuda</a>
              </Link>
            </li>
          </ul>
          <div>
            <button className={styles.buttonAds}>Anunciar</button>
            <button className={styles.buttonSearch}>
              <img src="/assets/icons/search.svg" alt="Search button" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
