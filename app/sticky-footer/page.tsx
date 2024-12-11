"use client";
import Lenis from "lenis";
import React, { useEffect } from "react";

import Footer from "./footer";
import Footer1 from "./footer1";
import Footer2 from "./footer.2";
import Intro from "./intro";

const page = () => {
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
      <Footer2 />
    </main>
  );
};

export default page;
