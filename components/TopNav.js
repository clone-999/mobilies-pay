import React from 'react';
import Link from 'next/link';

const TopNav = () => {
  return (
    <header id="header" className="fixed-top ">
        <div className="container d-flex align-items-center">
            <h1 className="logo me-auto"><Link href="/">Mobilies Pay</Link></h1>
            <nav id="navbar" className="navbar">
                <ul>
                    <li><Link className="nav-link scrollto" href="https://mobilies.io/">BACK TO HOME</Link></li>
                    <li><Link className="getstarted scrollto" href="/#contact">Make Payment</Link></li>
                </ul>
            </nav>
        </div>
    </header>
  )
}

export default TopNav