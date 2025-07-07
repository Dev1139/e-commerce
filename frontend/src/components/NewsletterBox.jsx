import React from 'react';

const NewsletterBox = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className='text-center'>
      <p className='text-2xl font-medium text-gray-800'>
        Subscribe now & get 20% off
      </p>

      <p className='text-gray-400 mt-3'>
        Join our community and be the first to know about exclusive deals, new arrivals, and special offers. Sign up today and enjoy an instant 20% discount on your first purchase!
      </p>

      <form
        onSubmit={onSubmitHandler}
        className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border p-3 outline-none border-gray-400'
      >
        <input
          className='w-full sm:flex-1 outline-none pl-2'
          type='email'
          placeholder='Enter your email'
          required
        />
        <button
          type='submit'
          className='bg-black text-white text-xs px-10 py-4 cursor-pointer'
        >
          SUBSCRIBE
        </button>
      </form>
    </div>
  );
};

export default NewsletterBox;
