import "./styles/hero.css";
import { motion } from "framer-motion";
import Button from "./Button";
import TextEffect from "./TextEffects";

const container = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

const imgVariant = {
  initial: {
    x: 500,
  },
  animate: {
    x: 0,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  },
};

const Hero = () => {
  return (
    <>
      <div className="landingContainer overflow-x-hidden w-[100%]">
        <div className="wrapper w-[100%] px-[80px]  flex xl:flex-row flex-col item-center justify-between text-center uppercase font-['Poppins', sans-serif'] mt-[80px]">
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="left flex-1 flex flex-col items-center justify-center gap-[30px]"
          >
            <motion.p
              variants={item}
              className="subText text-[1.5rem] font-normal text-[#e5e5e5]"
            >
              Build Your Brand with Branding Hopes
            </motion.p>
            <motion.div
              variants={item}
              className="landingTitle text-7xl font-bold text-[#fca311]"
            >
              <span className="text-[#fca311]">
                Turning Your <br />
                <span className="">
                  <TextEffect className="landingTitle " />{" "}
                </span>
                <br />{" "}
              </span>
              Into Brands
            </motion.div>
            <motion.p
              variants={item}
              className="subText text-[1.5rem] font-normal text-[#e5e5e5] mb-[-35px]"
            >
              Where Imagination Meets Innovation in
            </motion.p>
            <motion.p
              variants={item}
              className="subText text-[1.5rem] font-normal text-[#e5e5e5]"
            >
              Web Development, Design, SEO, and Digital Mastery
            </motion.p>
            <motion.div
              variants={item}
              className="btns flex justify-center gap-[20px]"
            >
              <Button text="Get Started" link="/" />
              <Button text="Our Services" link="/services" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default Hero;
