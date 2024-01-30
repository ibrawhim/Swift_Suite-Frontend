import React from 'react';

const Overview = () => {
  const womenPercentage = 60;
  const menPercentage = 30;
  const kidsPercentage = 20;

  return (
    <section className=' rounded-lg p-5 h-[100%] lg:h-[70%] bg-white shadow-lg'>
    <div style={{ marginRight: '20px', position: 'relative' }}>
      <p>Stats Overview</p>
      <p>Information about store visits</p>
      <div style={{ justifyContent: 'center', padding: '20px' }}>
      <h1>Women</h1>
          <div className='lg:w-[200px] w-[200px]'
            style={{
              height: '20px',
              
              backgroundColor: 'gray',
              margin: '2px',
              borderRadius: '10px',
              border: '1px solid gray',
              position: 'absolute',
              top: '100px',
            }}
          ></div>
          <div className='lg:w-20 w-[100px]'
            style={{
              height: '20px',
             
              backgroundColor: 'green',
              margin: '2px',
              borderRadius: '10px',
              position: 'absolute',
              zIndex: 1,
              top: '100px',
            }}
          ></div>

          <h1 className='mt-10'>Men</h1>
          <div className='lg:w-[200px] w-[200px]'
            style={{
              height: '20px',
              
              backgroundColor: 'gray',
              margin: '2px',
              borderRadius: '10px',
              border: '1px solid #ccc',
              position: 'absolute',
              top: '150px',
            }}
          ></div>
          <div className='lg:w-20 w-[100px]'
            style={{
              height: '20px',
              
              backgroundColor: 'orange',
              margin: '2px',
              borderRadius: '10px',
              position: 'absolute',
              zIndex: 1,
              top: '150px',
            }}
          ></div>

          <h1 className='mt-5'>Kids</h1>
          <div className='lg:w-[200px] w-[200px]'
            style={{
              height: '20px',
             
              backgroundColor: 'gray',
              margin: '2px',
              borderRadius: '10px',
              border: '1px solid #ccc',
              position: 'absolute',
              top: '200px',
            }}
          ></div>
          <div className='lg:w-20 w-[100px]'
            style={{
              height: '20px',
              
              backgroundColor: 'green',
              margin: '2px',
              borderRadius: '10px',
              position: 'absolute',
              zIndex: 1,
              top: '200px',
            }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
