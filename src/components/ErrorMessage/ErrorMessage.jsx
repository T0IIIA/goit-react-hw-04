import s from './ErrorMessage.module.css'

const ErrorMessage = () => {
  return (
    <p className={s.error}>Oops...something went wrong!</p>
  )
}

export default ErrorMessage