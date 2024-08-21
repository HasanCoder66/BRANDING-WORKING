import ButtonTwo from "./ButtonTwo.jsx";
import styles from "./styles/style.js";

const CTA = () => (
  <section
    data-aos="zoom-in-right"
    className={`w-[80%] bg-white ${styles.flexCenter} ${styles.marginY} ${styles.padding} sm:flex-row flex-col rounded-[20px] box-shadow`}
  >
    <div className="flex-1 flex flex-col">
      <h2 className={`${styles.heading2} font-bold uppercase`}>
        Let’s try our service now!
      </h2>
      <p className={`${styles.paragraph} max-w-[500px] mt-5`}>
        Everything you need to accept card payments and grow your business
        anywhere on the planet.
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <ButtonTwo link="/contact" />
    </div>
  </section>
);

export default CTA;
