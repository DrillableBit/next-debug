"use client";
import React from "react";
import Layout from "./layout";
import Navbar from "@/components/Navbar";
import { getSession } from "next-auth/react";

async function Page() {
  const session = await getSession();
  const userSession = () => {
    console.log(session);
  };

  return (
    <>
      {/* <Layout> */}
        <Navbar />
        <div className="text-center">
          <h1 className="text-4xl font-bold">Protected</h1>
          <button
            onClick={() => {
              userSession();
            }}
            className="border-8"
          >
            {" "}
            Consol log user
          </button>
        </div>
      {/* </Layout> */}
    </>
  );
}

export default Page;
