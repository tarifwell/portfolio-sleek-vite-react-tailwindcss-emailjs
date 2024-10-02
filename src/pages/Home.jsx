// import React from 'react';
import { Suspense, useEffect, useRef, useState } from "react";
import Loader from "../components/Loader";
import HomeInfo from "../components/HomeInfo";
import sakura from "../assets/sakura.mp3";
import { soundoff, soundon } from "../assets/icons";

const Home = () => {
  const [currentStage, setCurrentStage] = useState(2);

  // setTimeout(() => {
  //   alert('Thank you. I will get back to you as soon as possible.');
  // }, 3000);

  const audioRef = useRef(new Audio(sakura));
  audioRef.current.volume = 0.4;
  audioRef.current.loop = true;
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    }

    return () => {
      audioRef.current.pause();
    };
  }, [isPlayingMusic]);

  return (
    <section className="w-full h-screen relative">
      <div className='absolute top-28 left-0 right-0 z-10 flex items-center justify-center'>
        <HomeInfo currentStage={currentStage} />
      </div>
      {/* <Suspense fallback={<div>Loading...</div>}></Suspense> */}
      <Suspense fallback={<Loader />}></Suspense>

      <div className='absolute bottom-2 left-2'>
        <img
          src={!isPlayingMusic ? soundoff : soundon}
          alt='jukebox'
          onClick={() => setIsPlayingMusic(!isPlayingMusic)}
          className='w-10 h-10 cursor-pointer object-contain'
        />
      </div>
      
    </section>
  );
};

export default Home;