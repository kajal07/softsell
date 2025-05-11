// components/Testimonials.js
import React from 'react';

const testimonials = [
  { name: "John Doe", role: "CEO", company: "TechCorp", review: "SoftSell made it easy to get rid of our unused licenses and get paid quickly!" },
  { name: "Jane Smith", role: "CTO", company: "Innovate Ltd.", review: "The process was seamless. We got a great valuation and fast payment." }
];

const Testimonials = () => {
  return (
    <section className="py-5">
      <div className="container text-center">
        <h2 className="mb-4 fw-semibold">Customer Testimonials</h2>
        <div className="row justify-content-center">
          {testimonials.map((t, i) => (
            <div key={i} className="col-md-5 mb-4">
              <div className="border rounded shadow-sm p-4 h-100">
                <p className="fst-italic">"{t.review}"</p>
                <p className="fw-bold mt-3 mb-0">{t.name}</p>
                <small className="text-muted">{t.role}, {t.company}</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
