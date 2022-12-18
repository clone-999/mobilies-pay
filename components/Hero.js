import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <section id="hero" className="d-flex align-items-center">

        <div className="container">
            <div className="row">
                <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" >
                    <h1>Tahmeen Document Clearing Services LLC</h1>
                    <h2>Official page for Dubai Residences payment. Please make your payments on this page only</h2>
                    <div className="d-flex justify-content-center justify-content-lg-start">
                        <Link href="#contact" className="btn-get-started scrollto">Get Started</Link>
                        <Link href="#contact" className="glightbox btn-watch-video"><i className="bi bi-play-circle"></i><span>Pay Here</span></Link>
                    </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 hero-img">
                    <img src="/assets/img/hero-img.png" className="img-fluid animated" alt="" />
                </div>
            </div>
        </div>

    </section>
  )
}

export default Hero