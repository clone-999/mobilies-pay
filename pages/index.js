import React from 'react';
import Layout from '../components/Layout';
import TopNav from '../components/TopNav';
import Hero from '../components/Hero';
import GooglePayButton from '@google-pay/button-react';
import { useRouter } from 'next/router';
import Footer from '../components/Footer';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export default function Home() {
  const router = useRouter();
  const initialOptions = {
    "client-id": "AS82j75vmsBnfQIRVvMBSH_fCxnLp-QgnKPS-CXTLz88_LiSNsUnQqoWN6LJQsIaEe-txHk4xXdYIzf3",
    currency: "USD",
    intent: "capture",
  };

  return (
    <PayPalScriptProvider options={initialOptions}>
      <Layout>
        <TopNav />
        <Hero />
          <main id="main">
            <section id="clients" className="clients section-bg">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12 col-md-12 col-12 d-flex align-items-center justify-content-center">
                    <div style={{paddingTop: 40}}></div>
                  </div>
                </div>
              </div>
            </section>

            <section id="about" className="about">
              <div className="container">
                <div className="section-title">
                  <h2>ALL-INCLUSIVE PACKAGE WITH UAE VISA FOR LIFE!</h2>
                </div>

                <div className="row content">
                  <di className="col-lg-12" style={{textAlign: "center"}}>
                    <div style={{color: "#37517e", marginBottom: 35}}>
                      <h4>FOR ONLY</h4>
                      AED 12,000 FOR 2 YEARS
                    </div>

                    <p style={{fontSize: 25}}>Introducing our all-inclusive package with <strong>UAE Visa for 2 years</strong> for only <strong>AED 12,000</strong> (no hidden fees). The package is designed to offer you all the support you need to work and live in the UAE.</p>
                  </di>
                </div>
              </div>
            </section>

            <section id="services" class="services section-bg">
              <div class="container">
                <div class="section-title">
                  <h2>PACKAGE INCLUDES</h2>
                </div>

                <div class="row" style={{textAlign: "center"}}>
                  <div class="col-xl-3 col-md-6 d-flex align-items-stretch">
                    <div class="icon-box">
                      <div class="icon"><i class="bx bxl-dribbble"></i></div>
                      <h4><a href="">UAE residence visa</a></h4>
                    </div>
                  </div>

                  <div class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
                    <div class="icon-box">
                      <div class="icon"><i class="bx bx-file"></i></div>
                      <h4><a href="">NOC For Bank Account</a></h4>
                    </div>
                  </div>

                  <div class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0">
                    <div class="icon-box">
                      <div class="icon"><i class="bx bx-tachometer"></i></div>
                      <h4><a href="">No Travel Restrictions</a></h4>
                    </div>
                  </div>

                  <div class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0">
                    <div class="icon-box">
                      <div class="icon"><i class="bx bx-layer"></i></div>
                      <h4><a href="">Emirates ID/Medical</a></h4>
                    </div>
                  </div>



                  <div class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4">
                    <div class="icon-box">
                      <div class="icon"><i class="bx bxl-dribbble"></i></div>
                      <h4><a href="">NOC To Travel</a></h4>
                    </div>
                  </div>

                  <div class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4">
                    <div class="icon-box">
                      <div class="icon"><i class="bx bx-file"></i></div>
                      <h4><a href="">Managerial Or Mid Level Position</a></h4>
                    </div>
                  </div>

                  <div class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 ">
                    <div class="icon-box">
                      <div class="icon"><i class="bx bx-tachometer"></i></div>
                      <h4><a href="">Family Sponsorship</a></h4>
                    </div>
                  </div>

                  <div class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4">
                    <div class="icon-box">
                      <div class="icon"><i class="bx bx-layer"></i></div>
                      <h4><a href="">NOC for Driving License</a></h4>
                    </div>
                  </div>

                </div>

              </div>
            </section>

            <section id="cta" class="cta">
              <div class="container">

                <div class="row">
                  <div class="col-lg-9 text-center text-lg-start">
                    <h3>You Have Questions?</h3>
                    <p> We pride in giving you satisfactory services. For more clearifications and questions regarding our services, do not hesitate to contact us</p>
                  </div>
                  <div class="col-lg-3 cta-btn-container text-center">
                    <a class="cta-btn align-middle" href="#contact">Talk To Us</a>
                  </div>
                </div>

              </div>
            </section>

            <section id="contact" className="contact">
              <div className="container">
                <div className="section-title">
                  <h2>Pay Here</h2>
                </div>

                <div className="row">
                  <div className="col-lg-5 d-flex align-items-stretch">
                    <div className="info">
                      <div className="address">
                        <i className="bi bi-geo-alt"></i>
                        <h4>Location:</h4>
                        <p>Concord, Media City, Dubai - UAE</p>
                      </div>

                      <div className="email">
                        <i className="bi bi-envelope"></i>
                        <h4>Email:</h4>
                        <p>support@mobilies.io</p>
                      </div>

                      <div className="phone">
                        <i className="bi bi-phone"></i>
                        <h4>Call:</h4>
                        <p>+971 52 886 1121</p>
                      </div>
                      
                    </div>
                  </div>

                  <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch justify-content-center">
                    <div className='row'>
                      <div className='col-lg-12'>
                        <PayPalButtons 
                          style={{ layout: "horizontal" }}

                          createOrder={(data, actions) => {
                            return actions.order.create({
                                purchase_units: [
                                    {
                                        amount: {
                                            value: "1.00",
                                        },
                                    },
                                ],
                            });
                          }}
                          onApprove={(data, actions) => {
                              return actions.order.capture().then((details) => {
                                  const name = details.payer.name.given_name;
                                  alert(`Transaction completed by ${name}`);
                              });
                          }}
                        />
                      </div>
                      <div className='col-lg-12'>
                        <GooglePayButton
                          environment="TEST"
                          paymentRequest={{
                            apiVersion: 2,
                            apiVersionMinor: 0,
                            allowedPaymentMethods: [
                              {
                                type: "CARD",
                                parameters: {
                                  allowedAuthMethods: ["PAN_ONLY", "CRYPTOGRAM_3DS"],
                                  allowedCardNetworks: ["MASTERCARD", "VISA"],
                                },
                                tokenizationSpecification: {
                                  type: "PAYMENT_GATEWAY",
                                  parameters: {
                                    gateway: "example",
                                    gatewayMerchantId: "BCR2DN4TQS3PXTCP",
                                  },
                                },
                              },
                            ],
                            merchantInfo: {
                              merchantId: "BCR2DN4TQS3PXTCP",
                              merchantName: "Tahmeen Document Clearing Services LLC",
                            },
                            transactionInfo: {
                              totalPriceStatus: "FINAL",
                              totalPriceLabel: "Total",
                              totalPrice: "1",
                              currencyCode: "USD",
                              countryCode: "US",
                            },
                            shippingAddressRequired: true,
                            callbackIntents: ["PAYMENT_AUTHORIZATION"],
                          }}
                          onLoadPaymentData={(paymentRequest) => {
                            console.log(paymentRequest);
                          }}
                          onPaymentAuthorized={paymentData =>{
                            //console.log('paymentData ' + paymentData);
                            router.push('/infor');
                            return { transactionState: 'SUCCESS'}
                          }}
                          existingPaymentMethodRequired='false'
                          buttonColor="black"
                          buttonType="buy"
                        ></GooglePayButton>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </main>

          <Footer />
      </Layout>
    </PayPalScriptProvider>
  )
}
