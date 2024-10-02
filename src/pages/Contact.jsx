// creation of a contact form with implementation of the send email feature using emailjs library

import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

import img_contact from '../assets/images/img_contact_03.png';
// TODO:: import Loader from '../components/Loader';
import useAlert from '../hooks/useAlert';
import Alert from '../components/Alert';

const Contact = () => {
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  // state to track the loading state of the form / button
  const [isLoading, setIsLoading] = useState(false);

  const { alert, showAlert, hideAlert } = useAlert();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs.send(
      import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,      
      import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
      {
        from_name: form.name,
        to_name: 'Tarek',
        from_email: form.email, // customer email
        to_email: 'tarifwell@gmail.com', // my email
        message: form.message
      },
      import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
    ).then(() => {
      setIsLoading(false);
      // show success message
      showAlert({show: true, text: 'Message sent successfully!', type: 'success'});

      // clear form
      setTimeout(() => {
        // Hide an alert
        hideAlert();
        // reset form
        setForm({ name: '', email: '', message: '' });
      }, 3000);

    }).catch((error) => {      
      setIsLoading(false);
      console.log(error);
      console.log(error.text);
      // show error message (the alert)
      showAlert({show: true, text: 'I didnt receive your message.', type: 'danger'});
    })

  };

  return (
    // h-[100vh]
    <section className="relative flex lg:flex-row flex-col max-container h-[100vh]">

      {/* {alert.show && <div className={`alert ${alert.type}`}>{alert.text}</div>} */}
      {/* {alert.show && <Alert {...alert} /> } */}
      {alert.show && <Alert text={alert.text} type={alert.type} /> }
      
      {/* Testing Alerts
      <Alert text="Thank you. I will get back to you as soon as possible." type="success" />
      <Alert text="I didnt receive your message." type="danger" /> */}

      <div className="flex-1 min-w-[50%] flex flex-col">
        <h1 className="head-text">Get in Touch</h1>

        <form 
          className="w-full flex flex-col gap-7 mt-14"
          onSubmit={handleSubmit}
          ref={formRef}
        >
          <label htmlFor="" className="text-black-500 font-semibold">
            Name
            <input
              type="text"
              name="name"
              placeholder="John"
              className="input"
              required
              value={form.name}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="" className="text-black-500 font-semibold">
            Email
            <input
              type="email"
              name="email"
              placeholder="john@example.com"
              className="input"
              required
              value={form.email}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="" className="text-black-500 font-semibold">
            Your message
            <textarea
              name="message"
              placeholder="Let me know how can I help you"
              rows={4}
              className="textarea"
              required
              value={form.message}
              onChange={handleChange}
            />
          </label>
          <button
            type="submit"
            className="btn"
            disabled={isLoading}
          >
            { isLoading ? 'Sending...' : 'Send Message' }
          </button>
        </form>
      </div>

      <div className='lg:w-1/2 w-full lg:h-auto md:h-[550px] h-[350px]'>
        <img src={img_contact} className="w-full h-auto object-cover m-20 border-8 rounded-lg" alt="contact" />
      </div>
    </section>
  )
}

export default Contact;