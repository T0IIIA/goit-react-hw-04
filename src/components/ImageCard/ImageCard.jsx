import s from './ImageCard.module.css'

const ImageCard = ({item, onOpen}) => {
  
  return (
      <div className={s.imageCard}>
          <img 
          onClick={() => onOpen(item.urls.full)}
          src={item.urls.small} 
          alt={item.alt_description} 
          className={s.image} 
          />
      </div>
  )
}

export default ImageCard