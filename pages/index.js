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
    "data-client-token": "abc123xyz==",
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
                  <h2>About The Residency</h2>
                </div>

                <div className="row content">
                  <div className="col-lg-6">
                    <p>
                      Tahmeen Group is a group of companies composed of multiple licenses for different business sectors such as IT, Business & Company Setup, Human Resources, Documents Clearing Services, Real Estate / Holiday homes. 
                    </p>
                    <p>
                      This advert is based on the Human Resourses sector as we are partners to different companies in Dubai requesting for employees. So far we have setup over 50 companies and businesses and over 100 residencies in Dubai over the years. This is why we able to provide this opportunity to you.
                    </p>

                    <p>
                      Benefits: Please the full benefits are mentioned bellow
                    </p>
                    <ul>
                      <li>* You can travel in and out of Dubai/UAE without visa at any time.</li>
                      <li>* NOC Bank Account</li>
                      <li>* You can travel to some countries without visa at any time</li>
                      <li>* No Objection Certificate (NOC) will be given to you to work in any company in UAE or to
  freelance.</li>
                      <li>* Getting visa and travelling to Canada, USA, Australia and other countries will be very easy
  with your Emirates ID.</li>
                      <li>* Managerial or Middlecareer level position will be mentioned on your residence to enable you
  travel and add your family members to the visa at some additional cost.</li>
                      
                    </ul>
                  </div>

                  <div className="col-lg-6 pt-4 pt-lg-0">
                    <ul>
                    <li>* A salary/commission of 5,000 AED and above will be indicated on your residence to enable
  you travel. It is advisable to deposit minimum of 5,000 AED to our company if you want to
  build your account to enable you enjoy full benefits of travelling and salary commission to be
  indicated in your account.</li>
                      <li>* It means you are entitled to sponsor your family on your visa and free consultancy service
  pertaining to your happy stay in UAE.</li>
                      <li>* NOC Driver&apos;s license.</li>
                      <li>* You will be allowed to travel to the following countries without visa: the below countries
  without visa: Georgia, Armenia, Azerbaijan and Thailand.</li>
                    </ul>

                    <p>Requirements: The following is what will be required of you;</p>
                    <ul>
                      <li>* You are to pay the cost of your own 2 years residency visa. this gives you more advantage since major companies here give more priority to candidates with their own residency. This is a freelance visa which doesn&apos;t tie you to any job you work for, which means you are at liberty to change jobs at any time if you are unsatisfied with current job.</li>
                      <li>* Send your international passport</li>
                      <li>* Your photo passport with white background</li>
                      <li>* Your last living school certificate with attestation (if available)</li>
                    </ul>
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
                                            value: "1.99",
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
