import React, {Component, Fragment} from 'react';
import Footer from '../Footer/Footer';
import Jumbotron from '../Jumbotron/Jumbotron';
import Project from '../Project/Cards';
import Skills from '../Skill/Skills';
import './Home.css';


class Home extends Component {
    state = {  }
    render() { 
        return ( 
            <Fragment>
                <Jumbotron />
                <div className="container-fluid">
                <div className="row">
                    <div className="col content__title">
                        <strong>Skills</strong>
                        <p className="text-center">- Some Things I'm Good At -</p>
                    </div>
                </div>
                </div>
                <Skills />
                <div className="container-fluid">
                <div className="row">
                    <div className="col content__title">
                        <strong>Project</strong>
                        <p className="text-center">- Recently Done Project -</p>
                    </div>
                </div>
                </div>
                <Project />
                <Footer />
            </Fragment>
         );
    }
}
 
export default Home;
