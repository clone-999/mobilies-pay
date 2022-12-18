import React from 'react';

const TopNav = () => {
  return (
    <header id="header" className="fixed-top ">
        <div className="container d-flex align-items-center">
            <h1 className="logo me-auto"><a href="#">Mobilies Pay</a></h1>
            <nav id="navbar" className="navbar">
                <ul>
                    <li><a className="nav-link scrollto" href="https://mobilies.io/">BACK TO HOME</a></li>
                    <li><a className="getstarted scrollto" href="/#contact">Make Payment</a></li>
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default TopNav