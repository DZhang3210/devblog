"use client";
import Lenis from "lenis";
import React, { useEffect } from "react";

import Footer1 from "./footer1";
import Footer2 from "./footer2";
import Intro from "./intro";
const StickyFooter = () => {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);

      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <main>
      <div className="z-100">
        <Intro />
      </div>
      <Footer1 />
      {/* <Footer2 /> */}
    </main>
  );
};

export default StickyFooter;
