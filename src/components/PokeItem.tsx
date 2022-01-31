import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { PokListType } from '../types/pokemons'
import styles from './PokeItem.module.css'

interface PokeItemsProps {
  pokemon: PokListType;
}

const PokeItem: FC<PokeItemsProps> = ({pokemon}) => {
  const {id, img, name, type, num} = pokemon
  return (
    <li className={styles.item} id={`${id}`}>
      <Link className={styles.link} to={`/pokemon/${id}`}>
        <div className={styles.img_wrapper}>
          <img className={styles.img} src={img} alt={`${name} img`} />
        </div>
        <p className={styles.number}>№ {num}</p>
        <p className={styles.name}>{name}</p>
        <div className={styles.types}>
          {
          type.map((item, index) => (
            <span className={index === 0 ? styles.type : styles.type2} key={item}>{item}</span>
          ))
        }
        </div>
      </Link>
    </li>
  )
}

export default PokeItem
