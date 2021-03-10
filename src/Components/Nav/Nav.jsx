import React, {Component, Fragment} from 'react';
import {
    BrowserRouter,
    Route,
    Link
  } from "react-router-dom";

import './Nav.css';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Home from '../Home/Home';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
          warnaHome: "crimson",
          warnaAbout: "transparent",
          warnaContact: "transparent"
        }
      }

      homeDiClick = (e) => {
        this.setState({
            warnaHome: "crimson",
            warnaAbout: "transparent",
            warnaContact: "transparent"
        })
      }

      aboutDiClick = (e) => {
        this.setState({
            warnaHome: "transparent",
            warnaAbout: "crimson",
            warnaContact: "transparent"
        })
      }

      contactDiClick = (e) => {
        this.setState({
            warnaHome: "transparent",
            warnaAbout: "transparent",
            warnaContact: "crimson"
        })
      }

    render() { 
        return (
            <BrowserRouter>  
            <Fragment>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container">
                        <span className="navbar-brand">HONGGO</span>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav ml-auto">
                                <Link className="nav-link" to="/"
                                style={{backgroundColor: this.state.warnaHome}} 
                                onClick={
                                    this.homeDiClick   
                                }
                                >Home</Link>

                                <Link className="nav-link" to="/about" 
                                style={{backgroundColor: this.state.warnaAbout}} 
                                onClick={
                                    this.aboutDiClick  
                                }
                                >About</Link>

                                <Link className="nav-link" to="/contact"
                                style={{backgroundColor: this.state.warnaContact}} 
                                onClick={
                                    this.contactDiClick  
                                }
                                >Contact</Link>    
                            </div>
                        </div>
                    </div>
                </nav>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
          </Fragment>
          </BrowserRouter> 
         );
    }
}
 
export default Navbar;