import BocchiImage from "@/public/bocchi-image.jpg";
import { motion, MotionValue, useTransform } from "framer-motion";
import Image from "next/image";

const Section1 = ({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.2]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, -180]);

  return (
    <motion.div
      className="h-screen bg-[#C72626] text-[3.5vw] flex flex-col items-center justify-center text-white pb-[10vh] sticky top-0"
      style={{ scale, rotate }}
    >
      <p>Scroll Perspective</p>
      <div className="flex gap-4">
        <p>Section</p>
        <div className="relative w-[12.5vw]">
          <Image
            src={BocchiImage}
            alt="img"
            placeholder="blur"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <p>Transition</p>
      </div>
    </motion.div>
  );
};

export default Section1;
