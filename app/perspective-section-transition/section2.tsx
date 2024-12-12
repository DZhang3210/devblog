import Image from "next/image";
import KitaImage from "@/public/kita-image.webp";
import { motion, MotionValue, useTransform } from "framer-motion";

const Section2 = ({
  scrollYProgress,
}: {
  scrollYProgress: MotionValue<number>;
}) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [180, 0]);
  return (
    <motion.div className="relative h-screen" style={{ scale, rotate }}>
      <Image
        src={KitaImage}
        alt="img"
        placeholder="blur"
        fill
        style={{ objectFit: "cover" }}
      />
    </motion.div>
  );
};

export default Section2;
