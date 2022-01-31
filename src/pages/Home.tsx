import React, { FC, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import Pagination from '../components/Pagination';
import PokeList from '../components/PokeList';
import Spinner from '../components/Spinner';
import TypesList from '../components/TypesList';
import { useTypeSelector } from '../hooks/useTypeSelector';
import { filterBy } from '../redux/actions/filter';
import { fetchPokemons } from '../redux/actions/pokemons';
import styles from './Home.module.css'

const Home: FC = () => {

  const types = ['All', 'Grass', 'Poison', 'Fire', 'Flying', 'Water', 'Bug', 'Normal', 'Electric', 'Ground', 'Fighting', 'Psychic', 'Rock', 'Ice', 'Ghost', 'Dragon']

  const [limit] = useState<number>(12)
  const [paginationPage, setPaginationPage] = useState<number>(1)

  const {pokemons, loading, error, totalCount} = useTypeSelector(state => state.pokemons)
  const {sortBy, typeFilter} = useTypeSelector(state => state.filter)
  const dispatch = useDispatch();


  useEffect( () => {
    dispatch(fetchPokemons(typeFilter, sortBy, paginationPage, limit))
  }, [typeFilter, sortBy, paginationPage, limit])

  useEffect( () => {
    setPaginationPage(1)
  }, [typeFilter])



  const handleTypeOf = (index: number) => {
    dispatch(filterBy(types[index]))
  }

  const selectPageNumber = (page: number) => {
    setPaginationPage(page)
  }


  if (error) {
    return <h3>{error}</h3>
  }


  return (
    <div className='container'>
      <div className={styles.wrapper}>
        <TypesList typeFilter={typeFilter} handleTypeOf={handleTypeOf} types={types}/>
        {!loading ? (<PokeList pokemons={pokemons} />) : <Spinner />}
      </div>
      <Pagination paginationPage={paginationPage} selectPageNumber={selectPageNumber} totalCount={Number(totalCount)} limit={limit}/>
    </div>
  )
}

export default Home
