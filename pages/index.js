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
                      console.log('paymentData ' + paymentData);
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
          </section>
        </main>

        <Footer />
    </Layout>
  )
}
