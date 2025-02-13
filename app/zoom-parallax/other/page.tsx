"use client";
import styles from "../styles.module.scss";
import Bocchi from "@/public/bocchi-image.jpg";
import Image from "next/image";
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Index() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale1 = useTransform(scrollYProgress, [0, 1], [1, 1]);
  const scale2 = useTransform(scrollYProgress, [0, 1], [1, 2]);
  const scale3 = useTransform(scrollYProgress, [0, 1], [1, 3]);
  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
  const scale7 = useTransform(scrollYProgress, [0, 1], [1, 7]);

  const pictures = [
    {
      src: Bocchi,

      scale: scale1,
    },
    {
      src: Bocchi,

      scale: scale2,
    },
    {
      src: Bocchi,

      scale: scale3,
    },
    {
      src: Bocchi,

      scale: scale4,
    },

    {
      src: Bocchi,

      scale: scale5,
    },

    {
      src: Bocchi,

      scale: scale6,
    },
    {
      src: Bocchi,

      scale: scale7,
    },
  ];
  return (
    <div
      ref={container}
      className="h-[300vh] relative w-full border-4 border-red-500"
    >
      <div className="sticky top-0 h-[100vh] border-4 border-blue-500 w-full overflow-hidden">
        <motion.div
          style={{ scale }}
          className="border-4 border-green-500 w-full h-full absolute top-0 left-0 flex items-center justify-center"
        >
          {pictures.map(({ src, scale }, index) => {
            return (
              <motion.div
                key={index}
                style={{ scale }}
                className="relative w-[25vw] h-[25vh] border-4 border-yellow-500"
              >
                <div className={styles.imageContainer}>
                  <Image src={src} fill alt="image" placeholder="blur" />
                </div>
              </motion.div>
            );
          })}
          {/* <div className="relative w-[25vw] h-[25vh] border-4 border-yellow-500">
            <Image
              src={Bocchi}
              fill
              alt="image"
              placeholder="blur"
              objectFit="cover"
            />
          </div> */}
        </motion.div>
      </div>
    </div>
  );
}
