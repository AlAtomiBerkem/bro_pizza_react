import ReactPaginate from 'react-paginate';
import styles from './pogination.module.scss'
const Pogination = () => {
    return (
        <>
        <ReactPaginate
        className={styles.root}
        breakLabel="..."
        nextLabel="next >"
        onPageChange={(event) => console.log(event)}
        pageRangeDisplayed={8}
        pageCount={3}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
      </>
    )
}

export default Pogination;