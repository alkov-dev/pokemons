import React, { FC } from 'react'
import { Link } from 'react-router-dom';
import logo from '../assets/img/logo-pokemon.png'
import SortBy from './SortBy';
import styles from './Header.module.css'

const Header : FC = () => {
  return (
    <header className={styles.header} >
      <div className='container'>
        <div className={styles.wrapper}>
          <Link to='/'>
            <img src={logo} alt="" />
          </Link>
          <SortBy />
        </div>
      </div>
    </header>
  )
}

export default Header;
