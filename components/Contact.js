import { useState } from 'react';
import { ToastContainer, toast, Flip } from 'react-toastify';
import { AiOutlineLoading3Quarters, AiOutlineCheckCircle, AiOutlineCloseCircle } from 'react-icons/ai';
import Typewriter from 'typewriter-effect';
import 'react-toastify/dist/ReactToastify.css';

export const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [fail, setFail] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    // get the form data
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');

    const data = {
      name,
      email,
      message,
    };

    try {
      // Make a request to send the message using API.
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      // Display a success message.
      if (response.status === 200) {
        toast.success('Successfully sent message!', {
          position: toast.POSITION.TOP_RIGHT
        });
        setSuccess(true);
        event.target.reset();
      } else {
        toast.error('An error occurred while trying to send the message, please try again later.', {
          position: toast.POSITION.TOP_RIGHT
        });
        setFail(true);
      }
    } catch (error) {
      toast.error('An error occurred while trying to send the message, please try again later.', {
        position: toast.POSITION.TOP_RIGHT
      });
      setFail(true);
    } finally {
      setLoading(false);
    }
  };

  // Reset the state after 3 seconds
  if (success) {
    setTimeout(() => {
      setSuccess(false);
      setLoading(false);
    }, 3000);
  } else if (fail) {
    setTimeout(() => {
      setFail(false);
      setLoading(false);
    }, 3000);
  }

  return (
    <div className='py-10'>
      <h1 className='text-left pb-5 text-4xl md:text-6xl lg:text-7xl'>
        <nobr>
          <Typewriter
            options={{
              strings: 'Contact Me',
              autoStart: true,
              loop: false,
              delay: 75,
            }}
          />
        </nobr>
      </h1>

      <p className='mx-auto text-left text-xl'>
        If you have any questions or would like to get in touch, please feel free to send me a message either by using the form or through one of my socials which are located at the bottom of the page.
      </p>

      <form onSubmit={handleSubmit} className='bg-transparent rounded pt-6 pb-8 mb-4'>
        <div className='mb-4'>
          <label className='block text-sm font-bold mb-2' htmlFor='name'>
            Name
          </label>
          <input className='bg-transparent shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline' id='name' type='text' name='name' placeholder='Your Name' required />
        </div>
        <div className='mb-4'>
          <label className='block text-sm font-bold mb-2' htmlFor='email'>
            Email
          </label>
          <input className='bg-transparent shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline' id='email' type='email' name='email' placeholder='email@example.com' required />
        </div>
        <div className='mb-4'>
          <label className='block text-sm font-bold mb-2' htmlFor='message'>
            Message
          </label>
          <textarea className='bg-transparent shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline' id='message' name='message' rows='6' placeholder='Message' required />
        </div>
        <div className='w-24 flex items-center justify-between'>
          {loading ? (
            <button className='w-24 bg-gray-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' type='submit' disabled={loading}>
              <AiOutlineLoading3Quarters className='inline-block w-6 h-6 animate-spin' />
            </button>
          ) : success ? (
            <button className='w-24 bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' type='submit' disabled={success}>
              <AiOutlineCheckCircle className='inline-block w-6 h-6' />
            </button>
          ) : fail ? (
            <button className='w-24 bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' type='submit' disabled={fail}>
              <AiOutlineCloseCircle className='inline-block w-6 h-6' />
            </button>
          ) : (
            <button className='w-24 bg-gray-400 hover:bg-gray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' type='submit'>
              <p>Send</p>
            </button>
          )}
        </div>
      </form>
      <ToastContainer transition={Flip} autoClose={2500} />
    </div>
  )
}