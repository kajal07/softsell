import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', company: '', licenseType: '', message: '' });
  const [validated, setValidated] = useState(false);

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      alert('Form submitted!');
      setFormData({ name: '', email: '', company: '', licenseType: '', message: '' });
    }
    setValidated(true);
  };

  return (
    <section className="bg-light py-5">
      <div className="container">
        <h2 style={{ color: 'black' }} className="text-center mb-4 fw-semibold">Contact Us</h2>
        <form className={`row g-3 needs-validation ${validated ? 'was-validated' : ''}`} noValidate onSubmit={handleSubmit}>
          <div className="col-md-6">
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={handleChange}
            />
            <div className="invalid-feedback">Please enter your name.</div>
          </div>

          <div className="col-md-6">
            <input
              type="email"
              name="email"
              className="form-control"
              placeholder="Your Email"
              required
              value={formData.email}
              onChange={handleChange}
            />
            <div className="invalid-feedback">Please enter a valid email.</div>
          </div>

          <div className="col-md-6">
            <input
              type="text"
              name="company"
              className="form-control"
              placeholder="Company"
              value={formData.company}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6">
            <select
              name="licenseType"
              className="form-select"
              required
              value={formData.licenseType}
              onChange={handleChange}
            >
              <option value="">Select License Type</option>
              <option value="software">Software</option>
              <option value="os">OS</option>
              <option value="productivity">Productivity Suite</option>
            </select>
            <div className="invalid-feedback">Please select a license type.</div>
          </div>

          <div className="col-12">
            <textarea
              name="message"
              className="form-control"
              placeholder="Your Message"
              rows="4"
              required
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <div className="invalid-feedback">Please enter a message.</div>
          </div>

          <div className="col-12 text-center">
            <button className="btn btn-primary px-5" type="submit">Send Message</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
