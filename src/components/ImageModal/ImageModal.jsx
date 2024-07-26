import s from './ImageModal.module.css'
import Modal from 'react-modal';

Modal.setAppElement('#root')


const ImageModal = ({ isOpen, isClose, modalImage }) => {
  
  return (
        <Modal
          isOpen={isOpen}
          onRequestClose={isClose}
          shouldCloseOnOverlayClick={true}
          shouldCloseOnEsc={true}
          contentLabel={'Example Modal'}
          overlayClassName={s.overlay}
          className={s.content}
        >
            <img 
            className={s.image} 
            src={modalImage} 
            />
        </Modal>
  )
}

export default ImageModal