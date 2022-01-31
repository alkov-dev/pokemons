import React, { FC } from 'react'
import { PokListType } from '../types/pokemons'
import PokeItem from './PokeItem'
import styles from './PokeList.module.css'

interface PokeListProps {
  pokemons: PokListType[];
}

const PokeList: FC<PokeListProps> = ({pokemons}) => {
  return (
    <ul className={styles.list}>
      {
        pokemons.map(pokemon => (
          <PokeItem key={`${pokemon.name}_${pokemon.id}`} pokemon={pokemon}/>
        ))
      }
    </ul>
  )
}

export default PokeList
