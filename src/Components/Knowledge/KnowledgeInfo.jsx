import React from 'react';
import { Fragment } from 'react';
import './Knowledge.css';

const KnowledgeInfo = (props) => {
    return ( 
        <Fragment>
            <div className="info d-flex align-items-center justify-content-center">
                <span>{props.title}</span>
                <div id="progressbar">
                    <div className={props.class}>
                        <div></div>
                    </div>
                </div>
                <span>{props.percentage}</span>
            </div>
        </Fragment>

        
     );
}
 
export default KnowledgeInfo;