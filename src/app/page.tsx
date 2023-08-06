import React from 'react';
import Layout from './layout';
import Navbar from '@/components/Navbar';

function Page() {
  return (
    <>

      <Navbar/>
      <div className="text-center">
        <h1 className="text-4xl font-bold">Home</h1>
      </div>

    </>
  );
}

export default Page;