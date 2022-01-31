import React, { FC, useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { useNavigate } from 'react-router-dom';
import { useTypeSelector } from '../hooks/useTypeSelector';
import { fetchPok } from '../redux/actions/pokemon';
import styles from './PakePage.module.css'
import arrorLeft from '../assets/img/arrow-left.png'
import Spinner from '../components/Spinner';

const PokePage: FC = () => {
  const goBack = useNavigate();
  const {id} = useParams();
  const {pokemon, loading, error} = useTypeSelector(state => state.pokemon)
  const dispatch = useDispatch()




  useEffect( () => {
    dispatch(fetchPok(id))
  }, [])


  if(loading) {
    return <Spinner />
  }

  if (error) {
    return <h3>{error}</h3>
  }




  return (
    <div className='container'>
      {
        pokemon && (
          <div className={styles.wrapper}>
            <div className={styles.go_back} onClick={() => goBack('/')}>
              <img className={styles.arrow_left} src={arrorLeft} alt="" />
            </div>
            <h3 className={styles.name}>{pokemon.name}</h3>
            <div className={styles.inner}>
              <img className={styles.img} src={pokemon.img} alt="" />
              <div className={styles.info}>
                <p>№{pokemon.num}</p>
                <p>Height: {pokemon.height}</p>
                <p>Weight: {pokemon.weight}</p>
                <div className={styles.types}>
                  <p className={styles.type}>Type :</p>
                  {pokemon.type &&
                    (pokemon.type.map(item => <span className={styles.item_type}>{item}</span>))
                  }
                </div>
                <div className={styles.weaknesses}>
                  <p className={styles.weaknesse}>Weaknesses:</p>
                  <div className={styles.weaknesses_wrapper}>
                    {pokemon.weaknesses &&
                    (pokemon.weaknesses.map(item => <span className={styles.item_weaknesse}>{item}</span>))
                  }
                  </div>
                </div>
              </div>
            </div>
            <h3 className={styles.name}>Evolution</h3>
            <div className={styles.evolutions_wrapper}>
              {pokemon.next_evolution &&
              (pokemon.next_evolution.map(item => (
                <div className={styles.evolutions}>
                  <h4>Name: {item.name}</h4>
                  <p>№{item.num}</p>
                </div>
            )))}
            </div>
          </div>
        )
      }
    </div>
  )
}

export default PokePage
