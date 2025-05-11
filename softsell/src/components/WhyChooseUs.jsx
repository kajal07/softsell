// components/WhyChooseUs.js
import React from 'react';

const reasons = [
  { title: 'Fast Transactions', desc: 'Quick and efficient process to sell your licenses.' },
  { title: 'Competitive Prices', desc: 'We offer the best prices for your unused software.' },
  { title: 'Safe & Secure', desc: 'Your transaction details are always safe with us.' }
];

const WhyChooseUs = () => {
  return (
    <section className="bg-light py-5">
      <div className="container text-center">
        <h2 style={{color: 'black'}} className="mb-4 fw-semibold">Why Choose Us</h2>
        <div className="row">
          {reasons.map((reason, index) => (
            <div key={index} className="col-md-4 mb-4">
              <div className="p-4 border rounded shadow-sm h-100">
                <h5 style={{color: 'black'}} className="fw-bold">{reason.title}</h5>
                <p className="text-muted">{reason.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
