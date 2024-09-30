// import React from 'react';
import { Suspense, useEffect, useRef, useState } from "react";
import Loader from "../components/Loader";
import HomeInfo from "../components/HomeInfo";

const Home = () => {
  const [currentStage, setCurrentStage] = useState(2);

  // setTimeout(() => {
  //   alert('Thank you. I will get back to you as soon as possible.');
  // }, 3000);

  return (
    <section className="w-full h-screen relative">
      <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        <HomeInfo currentStage={currentStage} />
      </div>
      {/* <Suspense fallback={<div>Loading...</div>}></Suspense> */}
      <Suspense fallback={<Loader />}></Suspense>
      
    </section>
  )
}

export default Home;