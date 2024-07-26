import s from './Loader.module.css'
import {FallingLines} from 'react-loader-spinner'

const Loader = () => {
    return (
        <div className={s.loading}>
            <FallingLines
            color="#ffffff"
            width="65"
            visible={true}
            ariaLabel="falling-circles-loading"
            />
        </div>
    )
}

export default Loader