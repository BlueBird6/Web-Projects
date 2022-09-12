import React, { useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from '../payment/CheckoutForm';

import Nav2 from './Nav2';
import Footer from './footer';

import './donation.css';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");

const successMessage = () => {
  return (
    <div className="success-msg">
      <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-check2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
      </svg>
      <div className="title">Payment Successful</div>
    </div>
  )
}

function Donation() {
  const [paymentCompleted, setPaymentCompleted] = useState(false);

  return (
    <div>
      <Nav2 />

      {/* <div className='container'>
        <div className='row'>
          <div className='col-lg-6'>
            <h2>Help our cause</h2>
            <p>Your support and contributions will enable us to meet our goals and improve conditions of community members.</p>
          </div>
          <div className='col-lg-6'>
            <img className='donate_img' src={donate} />
          </div>
        </div>
      </div> */}

      <div className='donate_section'>
        <div className='container'>
          <h2 className='donate_heading'>help our cause</h2>
          <p className='donate_desc'>Your support and contributions will enable us to meet our goals and improve conditions of our community members.</p>
        </div>
      </div>

      <div className='heading'>
        <h1>Donate Now</h1>
      </div>

      <div className="container payment_form" style={{"margin-bottom":"5rem"}}>

        <div className="py-5 text-center">
        </div>

        <div className="s-box">
          {paymentCompleted ? successMessage() : <React.Fragment>

            <div className="order-md-1">
              <Elements stripe={stripePromise}>
                <CheckoutForm setPaymentCompleted={setPaymentCompleted} />
              </Elements>
            </div>

          </React.Fragment>}
        </div>

      </div>

      <Footer />
    </div>
  );
}

export default Donation;