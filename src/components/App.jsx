import s from './App.module.css'
import SearchBar from "./SearchBar/SearchBar"
import ImageGallery from './ImageGallery/ImageGallery'
import LoadMoreBtn from './LoadMoreBtn/LoadMoreBtn'
import { useEffect, useState } from 'react'
import apiImages from '../servises/api'
import Loader from './Loader/Loader'
import ErrorMessage from './ErrorMessage/ErrorMessage'
import ImageModal from './ImageModal/ImageModal'


// ---------------------------
function App() {
    const [ searchValue, setSearchValue ] = useState('')
    const [ hits, setHits ] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    const [page, setPage] = useState(1)
    const [totalPages, setTotalPages] = useState(0)
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalImage, setModalImage] = useState('')


// ---------------------------
    const loadMoreBtn = () => {
        setPage(prev => prev + 1)
    }

    const handleSetQuery = (query) => {
      setHits([])
      setPage(1)
      setSearchValue(query)
    }

    const openModal = (query) => {
      setModalIsOpen(true)
      setModalImage(query)
    }

    const closeModal = () => {
      setModalIsOpen(false)
      setModalImage('')
    }


// -----------API-------------
    useEffect(() => {
        if(!searchValue){
            return
        }
        const getData = async () => {
            try {
                setIsError(false)
                setIsLoading(true)
                const res = await apiImages(searchValue, page)
                setHits(prev => [...prev, ...res.results])
                setTotalPages(res.total_pages)
            } catch(err) {
                setIsError(true)
            } finally {
                setIsLoading(false)
            }
        }
        getData()
    }, [searchValue, page])

    
    return (
        <div className={s.container}>
            <SearchBar onSubmit={handleSetQuery} />
            <ImageGallery items={hits} onOpen={openModal} />
            {isError && <ErrorMessage /> }
            {isLoading && <Loader />}
            {totalPages > page && !isLoading && <LoadMoreBtn onClick={loadMoreBtn} />}
            <ImageModal isClose={closeModal} isOpen={modalIsOpen} modalImage={modalImage}/>
        </div>
    )
}


// ---------------------------
export default App