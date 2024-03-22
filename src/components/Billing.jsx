import { apple, bill, google } from "../assets";
import styles, { layout } from "../styles";

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <img src={bill} alt="billing" className="w-full h-full relative z-[5]" />
      <div className="absolute w-1/2 h-1/2 -left-1/2 top-0 white__gradient rounded-full z-[3]" />
      <div className="absolute w-1/2 h-1/2 -left-1/2 bottom-0 pink__gradient rounded-full z-[0]" />
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Easily control your <br className="sm:block hidden" /> billing &
        invoicing.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean
        neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.
      </p>
      <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
        <img
          src={apple}
          alt="Apple Store"
          className="w-32 h-[42px] object-contain mr-5 cursor-pointer"
        />
        <img
          src={google}
          alt="Google Play"
          className="w-32 h-[42px] object-contain cursor-pointer"
        />
      </div>
    </div>
  </section>
);

export default Billing;
