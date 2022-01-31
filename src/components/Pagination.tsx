import React, { FC } from 'react'
import styles from './Pagination.module.css'

interface PaginationProps {
  totalCount: number;
  limit: number;
  paginationPage: number;
  selectPageNumber: (page : number) => void;
}

const Pagination: FC<PaginationProps> = ({totalCount, limit, selectPageNumber,paginationPage}) => {

  const totalPages: number = Math.ceil(totalCount / limit)
  const pages: number[] = []

  for(let i = 0; i < totalPages; i++) {
    pages.push(i+1)
  }



  return (
    <div className={styles.pagination}>
      {
        pages.map((page) => (
          <span className={page === paginationPage ? styles.active : styles.btn} key={`number_${page}`} onClick={() => selectPageNumber(page)}> {page} </span>
        ))
      }
    </div>
  )
}

export default Pagination
