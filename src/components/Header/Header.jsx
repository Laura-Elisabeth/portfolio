import React from 'react';

import styles from './Header.module.css';
import Logo from '../../images/Logo.png';

function Header({ user, setUser }) {

    return (
        <header className={styles.Header} id="header">
          <div className={styles.Container}>
            <div className={styles.Logo}>
              <a href='#home'>
              <img src={Logo} alt="Logo" />
              </a>
            </div>
            <div className={styles.Nav}>
              <ul>
                <li><a href="#home">Accueil</a></li>
                <li><a href="#about-me">Présentation</a></li>
                <li><a href="#skills">Compétences</a></li>
                <li><a href="#projects">Mes Projets</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
          </div>
        </header>
    );
}

export default Header;