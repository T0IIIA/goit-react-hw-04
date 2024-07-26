import ImageCard from '../ImageCard/ImageCard'
import s from './ImageGallery.module.css'

const ImageGallery = ({ items, onOpen }) => {

  return (
    <ul className={s.list}>
        {items.map(item => (
            <li key={item.id} className={s.item}>
                <ImageCard item={item} onOpen={onOpen} />
            </li>
        ))}
    </ul>
  )
}

export default ImageGallery