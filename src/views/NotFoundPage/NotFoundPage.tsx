import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

function NotFoundPage(){
    return (
        <div className="bg-primary container d-flex col a-center j-center text-primary">
            <FontAwesomeIcon icon={faTimes} className="icon"></FontAwesomeIcon>
            <h1>404</h1>
        </div>
    )
}

export default NotFoundPage