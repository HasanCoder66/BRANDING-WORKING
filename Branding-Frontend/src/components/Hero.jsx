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
              className="subText text-[1.2rem] font-normal text-[#e5e5e5]"
            >
              Empower Your Presence with Branding Hopes
            </motion.p>
            <motion.div
              variants={item}
              className="landingTitle text-7xl font-bold text-white"
            >
              <span className="text-[#fca311]">
                Turning Your{" "}
                <span>
                  <TextEffect className="landingTitle" />{" "}
                </span>
                <br />{" "}
              </span>
              Into Brands
            </motion.div>
            <motion.p
              variants={item}
              className="subText text-[1.2rem] font-normal text-[#e5e5e5]"
            >
              Where Imagination Meets Innovation in Web Development, Design,
              SEO, and Digital Mastery
            </motion.p>
            <motion.div
              variants={item}
              className="btns flex justify-center gap-[20px]"
            >
              <Button text="Get Started" link="/" />
              <Button text="Our Services" link="/services" />
            </motion.div>
          </motion.div>
          {/* <div className="right flex-1 flex items-center justify-center ">
            <motion.div
              variants={imgVariant}
              initial="initial"
              animate="animate"
              className="imgContainer w-[600px]"
            >
              <motion.img
                src="https://res.cloudinary.com/dpvxkqhi8/image/upload/v1710879604/branding%20hopes/hero_img_png_cmc52t.png"
                alt=""
                className="w-[100%] object-contain"
              />
            </motion.div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Hero;
