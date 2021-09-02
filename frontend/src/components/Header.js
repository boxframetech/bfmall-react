import React from 'react'
import logo from '../logo.png';
import {Link} from 'react-router-dom'


const Header = () => {
    return (
        // Navigation bar
        <nav className="navbar navbar-expand-lg navbar-dark menu shadow fixed-top">
            <div className="container">
              <Link className="navbar-brand" to="/">
                  <img src={logo} alt="boxframe-logo" width="60"/>
              </Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav">
                 
                  <li className="nav-item">
                    <Link className="nav-link" to="/cart">
                      <i className='fas fa-shopping-cart'></i>
                       Cart
                      </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">
                      <i className='fas fa-user'></i>
                        Sign in
                    </Link>
                  </li>
                 
                </ul>
                {/* <button type="button" class="rounded-pill btn-rounded">0547050720
                    <span>
                        <i class="fa fa-phone-alt"></i>
                    </span>
                </button> */}
              </div>
            </div>
          </nav>
        //   End of Navigation
    )
}

export default Header
