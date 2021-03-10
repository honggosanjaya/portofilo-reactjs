import React, { Fragment } from 'react';
import './Skill.css';

const Service = (props) => {
    return ( 
        <Fragment>
            <div className="col-md-4 service__card text-center">
				<h2>{props.judul}</h2> 
				<p>{props.paragraf1}</p>
                <p>{props.paragraf2}</p>
            </div>
        </Fragment>
     );
}
 
export default Service;