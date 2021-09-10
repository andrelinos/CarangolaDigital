import React from 'react';

import styles from './styles.module.scss';

export default function SignUp(): JSX.Element {
  return (
    <div className={styles.container}>
      <form>
        <label>
          Nome completo
          <input type="text" />
        </label>
        <label>
          E-mail
          <input type="email" />
        </label>
        <label>
          Digite uma senha
          <input type="password" />
        </label>
        <label>
          Confirme sua senha
          <input type="password" />
        </label>
        <label>
          Força da senha
          <input />
        </label>
      </form>
    </div>
  );
}
