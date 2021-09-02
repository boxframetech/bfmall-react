import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-lg-4 contact-box pt-1 d-md-block d-lg-flex d-flex">
                        <div className="contact-box__icon">
                            {/* <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-phone-calling"  viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                                <line x1="15" y1="7" x2="15" y2="7.01" />
                                <line x1="18" y1="7" x2="18" y2="7.01" />
                                <line x1="21" y1="7" x2="21" y2="7.01" />
                              </svg> */}
                        </div>
                        <div className="contact-box__info">
                            <a href className="contact-box__info--title">+233506791404</a>
                            <p className="contact-box__info--subtitle">Mon - Fri 9am - 6pm</p>
                        </div>
                    </div>
                    <div className="col-md-4 col-lg-4 contact-box pt-1 d-md-block d-lg-flex d-flex">
                        <div className="contact-box__icon">
                            {/* <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-mail-forward"  viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M12 18h-7a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v7.5" />
                                <path d="M3 6l9 6l9 -6" />
                                <path d="M15 18h6" />
                                <path d="M18 15l3 3l-3 3" />
                              </svg> */}
                        </div>
                        <div className="contact-box__info">
                            <a href className="contact-box__info--title">boxframe@protonmail.com</a>
                            <p className="contact-box__info--subtitle">Online Support</p>
                        </div>
                    </div>
                    <div className="col-md-4 col-lg-4 contact-box pt-1 d-md-block d-lg-flex d-flex ">
                        <div className="contact-box__icon">
                            {/* <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-map-pin"  viewBox="0 0 24 24" stroke-width="1.5" fill="none" stroke-linecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <circle cx="12" cy="11" r="3" />
                                <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                              </svg> */}
                        </div>
                        <div className="contact-box__info">
                            <Link to='' className="contact-box__info--title">14 Batsonaa Highway</Link>
                            <p className="contact-box__info--subtitle">Spintex Accra</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- SOCIAL MEDIA SECTION --> */}
            <div className="footer-sm" style={{backgroundColor: '#082941'}}>
                <div className="container">
                    <div className="row py-4 text-center text-white align-items-center">
                        <div className="col-lg-5 col-md-6 mb-4 mb-md-0">
                            connect with us on social media
                        </div>
                        <div className="col-lg-7 col-md-6 my-3 my-sm-0">
                          <Link to=""><i className="fab fa-twitter"></i></Link>
                          <Link to=""><i className="fab fa-github"></i></Link>
                          <Link to=""><i className="fab fa-linkedin"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
            {/* <!-- End od Social media --> */}

            {/* <!-- copyright info --> */}
            <div className="footer-bottom py-4">
                <div className="container">
                    <div className="row text-center text-white">
                        <div className="col-12">
                            <div className="footer-bottom__copyright">
                                &copy; Copyright 2021 | <Link to=''>Boxframe Technologies</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
