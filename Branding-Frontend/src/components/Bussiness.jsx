import ButtonTwo from "./ButtonTwo.jsx";
import { features } from "./constant.js";
import styles, { layout } from "./styles/style.js";

const FeatureCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-4 sm:p-6 rounded-[20px]  hover:bg-[#fca311] ${
      index !== features.length - 1 ? "mb-4 sm:mb-6" : "mb-0"
    } feature-card`}
  >
    <div
      className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full ${styles.flexCenter} bg-[#fff]`}
    >
      <img
        width={32}
        height={32}
        src={icon}
        alt="icon"
        className="w-1/2 h-1/2 object-contain"
      />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-white text-base sm:text-lg leading-tight mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-white text-sm sm:text-base leading-relaxed">
        {content}
      </p>
    </div>
  </div>
);

const Business = () => (
  <section
    id="features"
    className={`${layout.section} p-4 sm:p-6 lg:p-8 rounded-lg bg-[#14213d]  w-full sm:w-[90%] lg:w-[80%] mx-auto`}
  >
    <div className={`${layout.sectionInfo}`}>
      <h2
        className={`${styles.heading2} text-white text-2xl sm:text-3xl lg:text-4xl`}
      >
        We drive the Business, <br className="hidden sm:block" /> while you
        focus on the digital journey.
      </h2>
      <p
        className={`${styles.paragraph} max-w-[470px] mt-3 sm:mt-5 text-sm sm:text-base text-white`}
      >
        Our comprehensive services provide everything you need to establish a
        strong online presence and achieve your business goals.
      </p>

      <ButtonTwo styles={`mt-6 sm:mt-10`} link="/contact" />
    </div>

    <div className={`${layout.sectionImg} flex-col mt-6 sm:mt-0 `}>
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
    </div>
  </section>
);

export default Business;
