"use client";
import { motion, MotionValue, useScroll, useTransform } from "framer-motion";
import Lenis from "lenis";
import Image from "next/image";
import { useEffect, useRef } from "react";

const Slide = (props: {
  src: string;
  left: string;
  progress: MotionValue<number>;
  direction: "left" | "right";
}) => {
  const direction = 10 * (props.direction == "left" ? -1 : 1);
  const translateX = useTransform(
    props.progress,
    [0, 1],
    [150 * direction, -150 * direction]
  );
  return (
    <motion.div
      style={{ left: props.left, x: translateX }}
      className="relative flex whitespace-nowrap"
    >
      <Phrase src={props.src} />
      <Phrase src={props.src} />
      <Phrase src={props.src} />
    </motion.div>
  );
};

const Phrase = ({ src }: { src: string }) => {
  return (
    <div className={`px-5 flex gap-5 items-center`}>
      <p className="text-[7.5vw]">Front End Developer</p>
      <span className="relative h-[7.5vw] aspect-[4/2] rounded-full overflow-hidden">
        <Image src={src} style={{ objectFit: "cover" }} alt="image" fill />
      </span>
    </div>
  );
};

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  return (
    <main className="overflow-hidden">
      <div className="h-[80vh]" />
      <div ref={container}>
        <Slide
          direction="left"
          src={"/bocchi-image.jpg"}
          left={"-40%"}
          progress={scrollYProgress}
        />
        <Slide
          direction="right"
          src={"/kita-image.webp"}
          left={"-25%"}
          progress={scrollYProgress}
        />
        <Slide
          direction="left"
          src={"/test-image.jpg"}
          left={"-75%"}
          progress={scrollYProgress}
        />
      </div>
      <div className="h-[80vh]" />
    </main>
  );
}
