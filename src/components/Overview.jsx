import React from 'react';

const Overview = () => {
  const womenPercentage = 60;
  const menPercentage = 30;
  const kidsPercentage = 20;

  return (
    <section className=' rounded-lg p-5 h-screen bg-white shadow-lg'>
    <div style={{ marginRight: '20px', position: 'relative' }}>
      <p>Stats Overview</p>
      <p>Information about store visits</p>
      <div style={{ justifyContent: 'center', padding: '20px' }}>
          <div
            style={{
              height: '20px',
              width: '400px',
              backgroundColor: 'gray',
              margin: '2px',
              borderRadius: '10px',
              border: '1px solid gray',
              position: 'absolute',
              top: '100px',
            }}
          ></div>
          <div
            style={{
              height: '20px',
              width: `${womenPercentage}%`,
              backgroundColor: 'green',
              margin: '2px',
              borderRadius: '10px',
              position: 'absolute',
              zIndex: 1,
              top: '100px',
            }}
          ></div>

          {/* Men */}
          <div
            style={{
              height: '20px',
              width: '300px',
              backgroundColor: 'gray',
              margin: '2px',
              borderRadius: '10px',
              border: '1px solid #ccc',
              position: 'absolute',
              top: '150px',
            }}
          ></div>
          <div
            style={{
              height: '20px',
              width: `${menPercentage}%`,
              backgroundColor: 'orange',
              margin: '2px',
              borderRadius: '10px',
              position: 'absolute',
              zIndex: 1,
              top: '150px',
            }}
          ></div>

          {/* Kids */}
          <div
            style={{
              height: '20px',
              width: '300px',
              backgroundColor: 'gray',
              margin: '2px',
              borderRadius: '10px',
              border: '1px solid #ccc',
              position: 'absolute',
              top: '200px',
            }}
          ></div>
          <div
            style={{
              height: '20px',
              width: `${kidsPercentage}%`,
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
