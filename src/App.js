import './App.css';
import React, { Fragment } from 'react';
import Nav from './Components/Nav/Nav'
import Skills from './Components/Skill/Skills';
import Jumbotron from './Components/Jumbotron/Jumbotron';
import Project from './Components/Project/Cards';
import Footer from './Components/Footer/Footer';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';

function App() {
  return (
      <Fragment>
        <Nav />
        <Jumbotron />
        <div className="container-fluid">
          <div className="row">
            <div className="col content__title">
                <strong>Skills</strong>
                <p>- Some Things I'm Good At -</p>
            </div>
          </div>
        </div>
        <Skills />
        <div className="container-fluid">
          <div className="row">
            <div className="col content__title">
                <strong>Project</strong>
                <p>- Recently Done Project -</p>
            </div>
          </div>
        </div>
        <Project />
        <Footer />
      </Fragment>
  );
}

export default App;
