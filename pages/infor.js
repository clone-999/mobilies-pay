import React from 'react';
import Layout from '../components/Layout';
import TopNav from '../components/TopNav';
import Hero from '../components/Hero';
import GooglePayButton from '@google-pay/button-react';
import { useRouter } from 'next/router';
import Footer from '../components/Footer';

export default function Home() {
  const router = useRouter();

  return (
    <Layout>
        <TopNav />
        <section id="hero" className="d-flex align-items-center">

            <div className="container">
                <div className="row">
                    <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" >
                        <h1>Tahmeen Document Clearing Services LLC</h1>
                        <br />
                        <h1>Thank You</h1>
                        <h2>Thank you for your payment. We will revert back to you as soon as possible on the next steps.</h2>
                        <div className="d-flex justify-content-center justify-content-lg-start">
                            <a href="/" className="btn-get-started scrollto">Back to Home</a>
                        </div>
                    </div>
                    <div className="col-lg-6 order-1 order-lg-2 hero-img">
                        <img src="/assets/img/hero-img.png" className="img-fluid animated" alt="" />
                    </div>
                </div>
            </div>

        </section>

        <section id="clients" className="clients section-bg">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 col-md-12 col-12 d-flex align-items-center justify-content-center">
                  <div style={{paddingTop: 40}}></div>
                </div>
              </div>
            </div>
        </section>

        <main id="main">

        </main>

        <Footer />
    </Layout>
  )
}
