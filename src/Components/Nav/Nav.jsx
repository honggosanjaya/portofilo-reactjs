import React from 'react';
import { Fragment } from 'react';
import {
    BrowserRouter,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";

import './Nav.css'

const Nav = () => {
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
                            <Link className="nav-link active" to="/">Home</Link>
                            <Link className="nav-link" to="/about">About</Link>
                            <Link className="nav-link" to="/contact">Contact</Link>    
                        </div>
                        {/* <Route path="/" exact component={Home} />
                            <Route path="/about" component={About} />
                            <Route path="/contact" component={Contact} /> */}
                    </div>
                </div>
            </nav>
      </Fragment>
      </BrowserRouter> 
     );
}
 
export default Nav;