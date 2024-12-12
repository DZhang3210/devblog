"use client";
import { useEffect } from "react";
import Footer from "./footer";
import Lenis from "lenis";

export default function Home() {
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
      <div className="h-[100vh] flex justify-center items-center">
        Scroll down
      </div>
      <Footer />
    </main>
  );
}
