import React, { Component } from 'react';
import { Fragment } from 'react';
import KnowledgeInfo from '../Knowledge/KnowledgeInfo';
import './Knowledge.css';

class Knowledge extends Component {
    render() { 
        return ( 
            <Fragment>
                <section className="knowledge">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h2 className="title">My Knowledge</h2>
                            </div>
                        </div>
                        <div className="row knowledge-content">
                            <div className="col-md-6 col-sm-12 mr-5">
                                <div className="knowledge__text">My knowledge & expertise.</div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum quidem provident, blanditiis sed unde cupiditate numquam voluptates natus? <br/>Officia quam temporibus, eos similique, iure impedit doloremque reiciendis exercitationem maiores sequi quod nesciunt laboriosam porro inventore cum sunt rem voluptas consectetur iste odio provident dolorem natus. Mollitia facere soluta nobis iure.</p>
                            </div>
                            <div className="col-md-5 col-sm-12">
                                    <KnowledgeInfo class="html" title="HTML" percentage="90%"/>
                                    <KnowledgeInfo class="css" title="CSS" percentage="80%"/>
                                    <KnowledgeInfo class="js" title="JS" percentage="70%"/>
                            </div>
                        </div>
                    </div>
                </section>
            </Fragment>
         );
    }
}
 
export default Knowledge;