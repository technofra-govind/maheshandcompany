import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function GenContactForm() {
  const initialFormData = {
    firstname: '',
    lastname: '',
    number: '',
    email: '',
    message: '',
  };

  const [formData, setFormData] = useState(initialFormData);
  const [submitting, setSubmitting] = useState(false);
  const [submissionError, setSubmissionError] = useState(null);
  const [submissionSuccess, setSubmissionSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setSubmitting(true);

      const response = await fetch('https://maheshandcompany-backend.onrender.com/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Form submitted successfully');
        console.log("Frontend console is printed")
        setSubmissionSuccess(true);
        setFormData(initialFormData); // Clear the form
      } else {
        console.error('Failed to submit form');
        // setSubmissionError('Failed to submit form. Please try again later.');
        toast.error("Failed to submit form. Please try again later.")
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmissionError('An unexpected error occurred. Please try again later.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <section className="contact__section section--padding">
        <div className="container">
          <div className="section__heading text-center mb-40">
            <h2 className="section__heading--maintitle text__secondary mb-10">
              Get In Touch
            </h2>
            <p className="section__heading--desc">
              Beyond more stoic this along goodness this sed wow manatee mongos
              flusterd impressive man farcrud opened.
            </p>
          </div>
          <div className="main__contact--area">
            <div className="row align-items-center row-md-reverse">
              <div className="col-lg-5">
                <div className="contact__info border-radius-10">
                  <div className="contact__info--items">
                    <h3 className="contact__info--content__title text-white mb-10">
                      Contact Us
                    </h3>
                    <div className="contact__info--items__inner d-flex">
                      <div className="contact__info--icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="31.568"
                          height="31.128"
                          viewBox="0 0 31.568 31.128"
                        >
                          <path
                            id="ic_phone_forwarded_24px"
                            d="M26.676,16.564l7.892-7.782L26.676,1V5.669H20.362v6.226h6.314Zm3.157,7a18.162,18.162,0,0,1-5.635-.887,1.627,1.627,0,0,0-1.61.374l-3.472,3.424a23.585,23.585,0,0,1-10.4-10.257l3.472-3.44a1.48,1.48,0,0,0,.395-1.556,17.457,17.457,0,0,1-.9-5.556A1.572,1.572,0,0,0,10.1,4.113H4.578A1.572,1.572,0,0,0,3,5.669,26.645,26.645,0,0,0,29.832,32.128a1.572,1.572,0,0,0,1.578-1.556V25.124A1.572,1.572,0,0,0,29.832,23.568Z"
                            transform="translate(-3 -1)"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                      <div className="contact__info--content">
                        <p className="contact__info--content__desc text-white">
                          Call Us <br />{" "}
                          <a href="tel:+918657455815">+91 86574 55815</a>{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="contact__info--items">
                    <h3 className="contact__info--content__title text-white mb-10">
                      Email Address
                    </h3>
                    <div className="contact__info--items__inner d-flex">
                      <div className="contact__info--icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="31.57"
                          height="31.13"
                          viewBox="0 0 31.57 31.13"
                        >
                          <path
                            id="ic_email_24px"
                            d="M30.413,4H5.157C3.421,4,2.016,5.751,2.016,7.891L2,31.239c0,2.14,1.421,3.891,3.157,3.891H30.413c1.736,0,3.157-1.751,3.157-3.891V7.891C33.57,5.751,32.149,4,30.413,4Zm0,7.783L17.785,21.511,5.157,11.783V7.891l12.628,9.728L30.413,7.891Z"
                            transform="translate(-2 -4)"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                      <div className="contact__info--content">
                        <p className="contact__info--content__desc text-white">
                          <a
                            href="mailto:admin@maheshandco.in"
                          >
                            admin@maheshandco.in
                          </a>{" "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="contact__info--items">
                    <h3 className="contact__info--content__title text-white mb-10">
                      Office Location
                    </h3>
                    <div className="contact__info--items__inner d-flex">
                      <div className="contact__info--icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="31.57"
                          height="31.13"
                          viewBox="0 0 31.57 31.13"
                        >
                          <path
                            id="ic_account_balance_24px"
                            d="M5.323,14.341V24.718h4.985V14.341Zm9.969,0V24.718h4.985V14.341ZM2,32.13H33.57V27.683H2ZM25.262,14.341V24.718h4.985V14.341ZM17.785,1,2,8.412v2.965H33.57V8.412Z"
                            transform="translate(-2 -1)"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                      <div className="contact__info--content">
                        <p className="contact__info--content__desc text-white">
                          Gala No.1, 2, & 3, Patel Baug, Marve Rd, near Nutan
                          High School, Dasha Shrimali Nagar, Malad West, Mumbai,
                          Maharashtra 400064, India.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="contact__info--items">
                    <h3 className="contact__info--content__title text-white mb-10">
                      Follow Us
                    </h3>
                    <ul className="contact__info--social d-flex">
                      <li className="contact__info--social__list">
                        <a
                          className="contact__info--social__icon"
                          target="_blank"
                          href="https://www.facebook.com/"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="8.239"
                            height="15.984"
                            viewBox="0 0 11.239 20.984"
                          >
                            <path
                              id="Icon_awesome-facebook-f"
                              data-name="Icon awesome-facebook-f"
                              d="M11.575,11.8l.583-3.8H8.514V5.542A1.9,1.9,0,0,1,10.655,3.49h1.657V.257A20.2,20.2,0,0,0,9.371,0c-3,0-4.962,1.819-4.962,5.112V8.006H1.073v3.8H4.409v9.181H8.514V11.8Z"
                              transform="translate(-1.073)"
                              fill="currentColor"
                            />
                          </svg>
                          <span className="visually-hidden">Facebook</span>
                        </a>
                      </li>
                      <li className="contact__info--social__list">
                        <a
                          className="contact__info--social__icon"
                          target="_blank"
                          href="https://twitter.com/"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14.497"
                            height="14.492"
                            viewBox="0 0 19.497 19.492"
                          >
                            <path
                              id="Icon_awesome-instagram"
                              data-name="Icon awesome-instagram"
                              d="M9.747,6.24a5,5,0,1,0,5,5A4.99,4.99,0,0,0,9.747,6.24Zm0,8.247A3.249,3.249,0,1,1,13,11.238a3.255,3.255,0,0,1-3.249,3.249Zm6.368-8.451A1.166,1.166,0,1,1,14.949,4.87,1.163,1.163,0,0,1,16.115,6.036Zm3.31,1.183A5.769,5.769,0,0,0,17.85,3.135,5.807,5.807,0,0,0,13.766,1.56c-1.609-.091-6.433-.091-8.042,0A5.8,5.8,0,0,0,1.64,3.13,5.788,5.788,0,0,0,.065,7.215c-.091,1.609-.091,6.433,0,8.042A5.769,5.769,0,0,0,1.64,19.341a5.814,5.814,0,0,0,4.084,1.575c1.609.091,6.433.091,8.042,0a5.769,5.769,0,0,0,4.084-1.575,5.807,5.807,0,0,0,1.575-4.084c.091-1.609.091-6.429,0-8.038Zm-2.079,9.765a3.289,3.289,0,0,1-1.853,1.853c-1.283.509-4.328.391-5.746.391S5.28,19.341,4,18.837a3.289,3.289,0,0,1-1.853-1.853c-.509-1.283-.391-4.328-.391-5.746s-.113-4.467.391-5.746A3.289,3.289,0,0,1,4,3.639c1.283-.509,4.328-.391,5.746-.391s4.467-.113,5.746.391a3.289,3.289,0,0,1,1.853,1.853c.509,1.283.391,4.328.391,5.746S17.855,15.705,17.346,16.984Z"
                              transform="translate(0.004 -1.492)"
                              fill="currentColor"
                            />
                          </svg>
                          <span className="visually-hidden">Instagram</span>
                        </a>
                      </li>
                      <li className="contact__info--social__list">
                        <a
                          className="contact__info--social__icon"
                          target="_blank"
                          href="https://www.skype.com/"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="14.419"
                            height="14.419"
                            viewBox="0 0 19.419 19.419"
                          >
                            <path
                              id="Icon_awesome-linkedin-in"
                              data-name="Icon awesome-linkedin-in"
                              d="M4.347,19.419H.321V6.454H4.347ZM2.332,4.686A2.343,2.343,0,1,1,4.663,2.332,2.351,2.351,0,0,1,2.332,4.686ZM19.415,19.419H15.4V13.108c0-1.5-.03-3.433-2.093-3.433-2.093,0-2.414,1.634-2.414,3.325v6.42H6.869V6.454H10.73V8.223h.056A4.23,4.23,0,0,1,14.6,6.129c4.075,0,4.824,2.683,4.824,6.168v7.122Z"
                              fill="currentColor"
                            />
                          </svg>
                          <span className="visually-hidden">Linkedin</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="contact__form">

                  {submissionSuccess ? (

                    <div>
                      <p style={{ color: 'green' }}>Contact form submitted successfully. Thank you!</p>
                      <form
                        className="contact__form--inner"
                        onSubmit={handleSubmit}
                      >
                        <div className="row">
                          <div className="col-lg-6 col-md-6">
                            <div className="contact__form--list mb-20">
                              <label
                                className="contact__form--label"
                                htmlFor="input1"
                              >
                                First Name{" "}
                                <span className="contact__form--label__star">
                                  *
                                </span>
                              </label>
                              <input
                                className="contact__form--input"
                                name="firstname"
                                id="input1"
                                placeholder="Your First Name"
                                type="text"
                                value={formData.firstname} // Add this line to bind value to state
                                onChange={handleChange} // Add this line to handle changes
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="contact__form--list mb-20">
                              <label
                                className="contact__form--label"
                                htmlFor="input2"
                              >
                                Last Name{" "}
                                <span className="contact__form--label__star">
                                  *
                                </span>
                              </label>
                              <input
                                className="contact__form--input"
                                name="lastname"
                                id="input2"
                                placeholder="Your Last Name"
                                type="text"
                                value={formData.lastname}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="contact__form--list mb-20">
                              <label
                                className="contact__form--label"
                                htmlFor="input3"
                              >
                                Phone Number{" "}
                                <span className="contact__form--label__star">
                                  *
                                </span>
                              </label>
                              <input
                                className="contact__form--input"
                                name="number"
                                id="input3"
                                placeholder="Phone number"
                                type="text"
                                value={formData.number}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                          <div className="col-lg-6 col-md-6">
                            <div className="contact__form--list mb-20">
                              <label
                                className="contact__form--label"
                                htmlFor="input4"
                              >
                                Email{" "}
                                <span className="contact__form--label__star">
                                  *
                                </span>
                              </label>
                              <input
                                className="contact__form--input"
                                name="email"
                                id="input4"
                                placeholder="Email"
                                type="text"
                                value={formData.email}
                                onChange={handleChange}
                              />
                            </div>
                          </div>
                          <div className="col-12">
                            <div className="contact__form--list mb-10">
                              <label
                                className="contact__form--label"
                                htmlFor="input5"
                              >
                                Write Your Message{" "}
                                <span className="contact__form--label__star">
                                  *
                                </span>
                              </label>
                              <textarea
                                className="contact__form--textarea"
                                name="message"
                                id="input5"
                                placeholder="Write Your Message"
                                value={formData.message}
                                onChange={handleChange}
                              ></textarea>
                            </div>
                          </div>
                        </div>
                        <div className="account__login--remember position__relative mb-15">
                          <input
                            className="checkout__checkbox--input"
                            id="check2"
                            type="checkbox"
                          />
                          <span className="checkout__checkbox--checkmark"></span>
                          <label
                            className="checkout__checkbox--label login__remember--label"
                            htmlFor="check2"
                          >
                            Accept Terms & Condition
                          </label>
                        </div>
                        <button
                          className="contact__form--btn primary__btn"
                          type="submit"
                          disabled={submitting}
                        >
                          Submit Now
                        </button>
                        {submissionError && <p style={{ color: 'red' }}>{submissionError}</p>}
                      </form>
                    </div>
                  ) : (
                    <form
                      className="contact__form--inner"
                      onSubmit={handleSubmit}
                    >
                      <div className="row">
                        <div className="col-lg-6 col-md-6">
                          <div className="contact__form--list mb-20">
                            <label
                              className="contact__form--label"
                              htmlFor="input1"
                            >
                              First Name{" "}
                              <span className="contact__form--label__star">
                                *
                              </span>
                            </label>
                            <input
                              className="contact__form--input"
                              name="firstname"
                              id="input1"
                              placeholder="Your First Name"
                              type="text"
                              value={formData.firstname} // Add this line to bind value to state
                              onChange={handleChange} // Add this line to handle changes
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="contact__form--list mb-20">
                            <label
                              className="contact__form--label"
                              htmlFor="input2"
                            >
                              Last Name{" "}
                              <span className="contact__form--label__star">
                                *
                              </span>
                            </label>
                            <input
                              className="contact__form--input"
                              name="lastname"
                              id="input2"
                              placeholder="Your Last Name"
                              type="text"
                              value={formData.lastname}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="contact__form--list mb-20">
                            <label
                              className="contact__form--label"
                              htmlFor="input3"
                            >
                              Phone Number{" "}
                              <span className="contact__form--label__star">
                                *
                              </span>
                            </label>
                            <input
                              className="contact__form--input"
                              name="number"
                              id="input3"
                              placeholder="Phone number"
                              type="text"
                              value={formData.number}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <div className="contact__form--list mb-20">
                            <label
                              className="contact__form--label"
                              htmlFor="input4"
                            >
                              Email{" "}
                              <span className="contact__form--label__star">
                                *
                              </span>
                            </label>
                            <input
                              className="contact__form--input"
                              name="email"
                              id="input4"
                              placeholder="Email"
                              type="text"
                              value={formData.email}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="contact__form--list mb-10">
                            <label
                              className="contact__form--label"
                              htmlFor="input5"
                            >
                              Write Your Message{" "}
                              <span className="contact__form--label__star">
                                *
                              </span>
                            </label>
                            <textarea
                              className="contact__form--textarea"
                              name="message"
                              id="input5"
                              placeholder="Write Your Message"
                              value={formData.message}
                              onChange={handleChange}
                            ></textarea>
                          </div>
                        </div>
                      </div>
                      <div className="account__login--remember position__relative mb-15">
                        <input
                          className="checkout__checkbox--input"
                          id="check2"
                          type="checkbox"
                        />
                        <span className="checkout__checkbox--checkmark"></span>
                        <label
                          className="checkout__checkbox--label login__remember--label"
                          htmlFor="check2"
                        >
                          Accept Terms & Condition
                        </label>
                      </div>
                      <button
                        className="contact__form--btn primary__btn"
                        type="submit"
                        disabled={submitting}
                      >
                        Submit Now
                      </button>
                      {submissionError && <p style={{ color: 'red' }}>{submissionError}</p>}
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
      </section>
      {/* <!-- Start contact map area --> */}
      <div className="contact__map--area section--padding pt-0 pb-0">
        <iframe className="contact__map--iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.1356595758903!2d72.84299307596719!3d19.189276248405154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7c6ff755669%3A0xe838676f71dc30c6!2sMahesh%20%26%20Co!5e0!3m2!1sen!2sin!4v1698758723318!5m2!1sen!2sin" style={{ border: "0" }} allowFullScreen="" loading="lazy"></iframe>
      </div>

      {/* <!-- End contact map area --> */}
    </>
  );
}

export default GenContactForm;
