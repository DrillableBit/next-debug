"use client";
import React, { useState } from 'react';
import Layout from './layout';
import Navbar from '../../../components/Navbar';

function signout() {

  return (
    <> 
    <Layout>
      <Navbar />
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold text-center">Signout</h1>
      </div>
    </Layout>
    </>
  );
}

export default signout;