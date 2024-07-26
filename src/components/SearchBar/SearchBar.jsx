import { Field, Form, Formik } from 'formik';
import s from './SearchBr.module.css'

const SearchBar = ({ onSubmit }) => {

  const initValues = {
    search: ''
  }

  const handleSubmit = (values, actions) => {
    onSubmit(values.search)
    actions.resetForm()
  }

  return (
    <header className={s.header}>
      <Formik initialValues={initValues} onSubmit={handleSubmit}>
          <Form className={s.form}>
              <button type='submit' className={s.btn}>🔍</button>
              <Field
                type='search'
                name='search'
                autoComplete='off'
                autoFocus
                placeholder='Search images and photos'
                className={s.input}
              />
          </Form>
      </Formik>
    </header>
  )
}

export default SearchBar