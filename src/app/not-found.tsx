import React from 'react';
import Layout from './layout';
import Navbar from '@/components/Navbar';

function Page() {
  return (
    <Layout>
      <Navbar/>
      <div className="text-center">
        <h1 className="text-4xl font-bold">Page was not found.</h1>
      </div>
    </Layout>
  );
}

export default Page;