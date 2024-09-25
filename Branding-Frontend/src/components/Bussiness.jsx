import ButtonTwo from "./ButtonTwo.jsx";
import { features } from "./constant.js";
import styles, { layout } from "./styles/style.js";

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] hover:bg-[#fca311] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-[#14213d]`}
    >
      <img 
      width={32}
      height={33}
      src={icon} alt="star" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-black text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-black text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => (
    // className={`${layout.section}  bg-white w-[80%]`}
  <section id="features" className={`${layout.section} p-[2rem]  bg-white w-[80%]`}>
    <div className={`${layout.sectionInfo} `}>
      <h2 className={styles.heading2}>
        We drive the business, <br className="sm:block hidden" /> while you
        focus on the digital journey.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Our comprehensive services provide everything you need to establish a
        strong online presence and achieve your business goals.
      </p>

      <ButtonTwo styles={`mt-10`} link="/contact" />
    </div>

    <div className={`${layout.sectionImg} flex-col`}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;
