import './Card.scss';

const Card = (props) => {
    return(
        <div className="card">
            <img className="img-fluid" src={props.imgUrl !== null ? props.imgUrl : ''} alt={props.imgAlt !== null ? props.imgAlt : ''} loading='lazy' />
            <span className="card-img-text" aria-hidden="true">{props.imgText !== null ? props.imgText : 'N/A'}</span>
            <div className="card-body">
                {props.children}
            </div>
        </div>
    )
};

export default Card;