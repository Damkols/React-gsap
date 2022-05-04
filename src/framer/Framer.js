import "../App.scss";
import { motion } from "framer-motion";

import imgGirl from "../images/girl.webp";
import imgBoy from "../images/boy.webp";
import arrow from "../images/arrow-right.svg";

function Framer() {
  const easing = [0.6, -0.05, 0.01, 0.99];

  const fadeInUp = {
    initial: {
      y: 1280,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.2,
        // type: "Springy",
        ease: easing,
      },
    },
  };

  const scaleUpDown = {
    initial: {},
  };
  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.8,
      },
    },
  };

  const fadeUp = {
    initial: {
      y: 44,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 1.3,
        // type: "Springy",
        ease: easing,
        delay: 1.5,
      },
    },
  };

  const staggerChild = {
    animate: {
      transition: {
        staggerChildren: 1.4,
        delay: 1.5,
      },
    },
  };

  return (
    <motion.div animate="animate" initial="initial" className="hero">
      <div className="container">
        <div className="hero-inner">
          <div className="hero-content">
            <div className="hero-content-inner">
              <motion.h1 variants={staggerChild}>
                <motion.div
                  variants={staggerChild}
                  className="hero-content-line"
                >
                  <motion.div
                    variants={fadeUp}
                    className="hero-content-line-inner"
                  >
                    Relieving the burden
                  </motion.div>
                </motion.div>

                <motion.div
                  variants={staggerChild}
                  className="hero-content-line"
                >
                  <motion.div
                    variants={fadeUp}
                    className="hero-content-line-inner"
                  >
                    of disease caused
                  </motion.div>
                </motion.div>

                <motion.div
                  variants={staggerChild}
                  className="hero-content-line"
                >
                  <motion.div
                    variants={fadeUp}
                    className="hero-content-line-inner"
                  >
                    by behaviors.
                  </motion.div>
                </motion.div>
              </motion.h1>
              <motion.p variants={fadeUp}>
                Better treats serious cardiometabolic diseases to transform
                lives and reduce healthcare utilization through the use of
                digital therapeutics.
              </motion.p>
              <div className="btn-row">
                <button className="explore-button">
                  Explore
                  <div className="arrow-icon">
                    <img src={arrow} alt="row" />
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className="hero-images">
            <motion.div variants={stagger} className="hero-images-inner">
              <motion.div variants={fadeInUp} className="hero-image girl">
                <motion.img variants={scaleUpDown} src={imgGirl} alt="girl" />
              </motion.div>
              <motion.div variants={fadeInUp} className="hero-image boy">
                <img src={imgBoy} alt="boy" />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Framer;
