import React from 'react';

const steps = [
  { title: 'Upload License', desc: 'Submit your software license details.' },
  { title: 'Get Valuation', desc: 'We provide you with an instant valuation.' },
  { title: 'Get Paid', desc: 'Receive payment for your license transfer.' }
];

const HowItWorks = () => {
  return (
    <section className="container text-center py-5">
      <h2  className="mb-4 fw-semibold">How It Works</h2>
      <div className="row">
        {steps.map((step, index) => (
          <div key={index} className="col-md-4 mb-4">
            <div className="p-4 border rounded shadow-sm h-100">
              <h5 className="fw-bold mb-2">{index + 1}. {step.title}</h5>
              <p >{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;