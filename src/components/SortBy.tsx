import React, { FC, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useTypeSelector } from '../hooks/useTypeSelector'
import { sortByPopup } from '../redux/actions/filter'
import tringle from '../assets/img/tringle.png'
import styles from './SortBy.module.css'

const SortBy: FC = () => {
  const types: string[] = ['num', 'name', 'weight', 'height']

  const [visiblePopup, setVisiblePopep] = useState<boolean>(false)
  const {sortBy} = useTypeSelector(state => state.filter)
  const dispatch = useDispatch()

  const selectVisiblePopup = () => {
    setVisiblePopep(!visiblePopup)
  }
  const selectActivePoup = (name: string) => {
    dispatch(sortByPopup(name))
    setVisiblePopep(false)
  }

  return (
    <div className={styles.wrapper}>
        <img className={styles.img} src={tringle} alt="" />
        <span className={styles.sort} onClick={selectVisiblePopup}>{sortBy}</span>
      <div className={styles.sort_wrapper}>
        {visiblePopup &&
          <ul className={styles.list}>
          {
            types.map(type => (
              <li className={styles.item} onClick={() => selectActivePoup(type)} key={type}>{type}</li>
            ))
          }
        </ul>
        }
      </div>
    </div>
  )
}

export default SortBy
