"use client";
import React, { useState } from 'react';
import Layout from './layout';
import Navbar from '../../../components/Navbar';

function newuser() {

  return (
    <> 
    <Layout>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center">New user</h1>
      </div>
    </Layout>
    </>
  );
}

export default newuser;