import React, {Component} from 'react';
import Grid from './Grid.jsx';
import Home from './Home/Home';
import {BrowserRouter as Router,Link} from "react-router-dom";
import '../style/styles.css'
import './App';
import $ from 'jquery';
window.jQuery = $;
window.$ = $;
global.jQuery = $;

class App extends Component{
  render(){
    return(
      <Router>
        <div className="header">
          <div className="container warna">
            <nav className="navbar navbar-expand-lg navbar-light warna">
              <Link className="navbar-brand" to="#"> <img className="logo" src={require('../logo/logo.png')}/></Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
              aria-label="Toggle navigation">
              <span className="collapse navbar-collapse" id="navbarSupportedContent"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                  <li class="nav-item dropdown">
                    <Link class="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    PROMO
                    </Link>
                
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <Link class="dropdown-item" to="#">PROMO</Link>
                    <Link class="dropdown-item" to="#">Partnership</Link>
                    </div>
                </li>
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                PAKET & ADD-ON
                  </Link>
                  <div className="dropdown-menu" arialabelledby="navbarDropdown">
                    <Link className="dropdown-item" to="#">Action</Link>
                    <Link className="dropdown-item" to="#">Another Action</Link>
                  <div className="dropdown-divider"></div>
                    <Link className="dropdown-item" to="#">something else here</Link>
                  </div>
              </li>
              <li className="nav-item">
              <Link className="nav-link">Pusat Bantuan</Link>
              </li>

              </ul>
            </div>
          </nav>
        </div>
        <div className="">
          {/*<Grid/>*/}
        <Home/>
        </div>
      </div>
    </Router>

    )
  }
}

export default App;
