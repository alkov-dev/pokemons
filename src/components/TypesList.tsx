import React, { FC } from 'react'
import styles from './TypeList.module.css'

interface TypesListProps {
  types: string[];
  handleTypeOf: (index: number) => void;
  typeFilter: string;
}

const TypesList: FC<TypesListProps> = ({types, handleTypeOf, typeFilter}) => {
  return (
    <ul className={styles.list}>
      {
        types.map((type, index) => (
          <li className={styles.item} key={type}>
            <button className={typeFilter === type ? styles.active : styles.btn} onClick={() => handleTypeOf(index)}>{type}</button>
          </li>
        ))
      }
    </ul>
  )
}

export default TypesList
