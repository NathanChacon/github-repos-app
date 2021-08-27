import './Card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function Card(props:CardProps){
    return (
        <div className="card text-primary">
            <div className="card__main-content">
                <h1 className="card__header">
                    <a href={props.link} target="blank">{props.title}</a>
                </h1>
                <p className="card__description">{props.description}</p>
            </div>
            <div className="card__footer">
                {
                    props.footer.map((data) => {
                        return <h5 className="card__footer-content">
                                    <FontAwesomeIcon icon={data.icon} className="card__footer-content__icon"></FontAwesomeIcon>
                                    {data.label}
                                </h5>
                    })
                }
            </div>
        </div>
    )
}

export interface CardProps{
    title:string,
    description:string
    link:string,
    footer:Array<{icon:any, label:string}>
}

export default Card