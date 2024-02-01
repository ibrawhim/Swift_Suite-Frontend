import React from 'react';
import Revenue from '../components/Revenue';
// import Currentcustomer from '../Customers/Currentcustomer.jsx.jsx';
import Newcustomer from '../Customers/Newcustomer.jsx';
import Retargetcustomer from '../Customers/Retargetcustomer.jsx';
import Targetcustomer from '../Customers/Targetcustomer.jsx';
import Overview from '../components/Overview.jsx';
import Topproduct from '../Customers/Topproduct.jsx';
// import Rootlayout from '../layout/Rootlayout.jsx';




const Dashboard = () => {
  return (
    <>

    <section className='bg-green-100 h-100vh'>
    <div className='grid lg:grid-cols-2 lg:ms-[17%] md:grid-cols-2 grid-cols-1 p-5 lg:px-10 px-5 lg:w-[85%] w-[100%]  mt-15 gap-4'>
    <div>
    <Revenue />
          </div>

          <div className='grid rounded-lg border border-stroke bg-white px-5 pb-5 shadow-default sm:px-7.5 lg:grid-cols-2 md:grid-cols-2 grid-cols-2 gap-4'>
            <div>
            <Newcustomer />
              <h3 className='text-center text-sm font-bold'>Current Customers</h3>
              </div>
              <div>
              <Newcustomer />
              <h3 className='text-center text-sm font-bold'>New Customers</h3>
            </div>
            <div>
            <Retargetcustomer />
              <h3 className='text-center text-sm font-bold'>Retarget Customers</h3>
              </div>
            <div>
              <Targetcustomer />
              <h3 className='text-center text-sm font-bold'>Target Customers</h3>
            </div>
          </div>

        </div>
        <div className='grid lg:grid-cols-2 lg:ms-[17%] md:grid-cols-2 lg:px-10 px-5 lg:w-[85%] w-[100%] grid-cols-1 p-5 gap-4'>
        <div>
        <Topproduct />
          </div>
          <div>
            <Overview/>
          </div>
        </div>
     
        </section>
    </>
  );
};

export default Dashboard;
