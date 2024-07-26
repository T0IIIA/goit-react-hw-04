import s from './LoadMoreBtn.module.css'

const LoadMoreBtn = ({ onClick }) => {
  return (
    <button onClick={onClick} className={s.btn}> ⇧ Load More  ⇧</button>
  )
}

export default LoadMoreBtn