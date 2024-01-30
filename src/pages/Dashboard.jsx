import React from 'react';
import Revenue from '../component/Revenue';
import Currentcustomer from '../Customers/Currentcustomer.jsx.jsx';
import Newcustomer from '../Customers/Newcustomer.jsx';
import Retargetcustomer from '../Customers/Retargetcustomer.jsx';
import Targetcustomer from '../Customers/Targetcustomer.jsx';
import Overview from '../component/Overview.jsx';
// import Rootlayout from '../layout/Rootlayout.jsx';




const Dashboard = () => {
  return (
    <>

    
        <div className='grid lg:grid-cols-2 lg:ms-[20%] md:grid-cols-2 grid-cols-1 p-5 lg:px-10 px-5 lg:w-[80%] w-[100%] mt-16 gap-4'>
          <div>
            <Revenue />
          </div>

          <div className='grid rounded-lg border border-stroke bg-white px-5 pb-5 shadow-default sm:px-7.5 lg:grid-cols-2 md:grid-cols-2 grid-cols-2 gap-4'>
            <div>
              <Currentcustomer />
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
        <div className='grid lg:grid-cols-2 lg:ms-[20%] md:grid-cols-2 grid-cols-1 p-5 gap-4'>
          <div>
            <Revenue />
          </div>
          <div>
            <Overview/>
          </div>
        </div>
     
    </>
  );
};

export default Dashboard;
