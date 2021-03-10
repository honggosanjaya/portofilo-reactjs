import React from 'react';
import './Cards.css';

const Card = props => {
    return ( 
        <div className="card text-center shadow">
            <div className="overflow">
                <img src={props.imgsrc} alt="Image" className="card-img-top"/>
            </div>
            <div className="card-body text-dark">
                <h4 className="card-title">{props.title}</h4>
                <p className="card-text text-secondary">{props.desc}</p>
                <a href="#" className="btn btn-outline-success">Visit Project</a>
            </div>
        </div>
     );
}
 
export default Card;