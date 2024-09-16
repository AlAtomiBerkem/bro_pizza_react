import ReactPaginate from 'react-paginate';
import styles from './pogination.module.scss'
const Pogination = ({onChangePage}) => {
    return (
        <>
        <ReactPaginate
        className={styles.root}
        breakLabel="..."
        nextLabel=">"
        onPageChange={(event) => onChangePage(event.selected + 1)}
        pageRangeDisplayed={4}
        pageCount={3}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
      </>
    )
}

export default Pogination;