import React, {Fragment } from 'react';
import './Jumbotron.css';

const Jumbotron = () => {
    return ( 
        <Fragment>
            <div className="jumbotron jumbotron-fluid">
            <div className="container">
                <h1 className="display-4">
                    Hey, I'm <span>Honggo Sanjaya</span> <br/> and I'm a <span>Frontend </span>Developer
                </h1>
            </div>
            </div>
        </Fragment>
     );
}
 
export default Jumbotron;