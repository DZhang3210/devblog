"use client";
import Lenis from "lenis";
import React, { useEffect } from "react";

import Footer1 from "./footer1";
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
      <Intro />
      <Footer1 />
    </main>
  );
};

export default StickyFooter;
