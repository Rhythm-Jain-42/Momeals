import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import "./OurStoryPage.css";

export const OurStoryPage = () => {
  const [isClicked, setIsClicked] = useState(true);

  useEffect(() => {
    document.body.addEventListener("click", () => {
      setIsClicked(false);
    });
  }, []);

  return (
    <main>
      <section className="fixed inset-0 grid h-screen grid-cols-2">
        <AnimatePresence>
          {isClicked && (
            <>
              <Rect1 />
              <Rect2 />
            </>
          )}
        </AnimatePresence>
      </section>
      <section className="parent_container">
        <div className="main_container">
          <div className="heading">M.O.M</div>
          <div className="brake">
            <br className="line_break"></br>
          </div>
          <div className="full">
            <span>M</span>AN <span>O</span>N <span>M</span>ISSION
          </div>
          <div className="para">
            <p className="paragraph">
              Welcome to our community of like minded human beings, united by a
              common goal of benefiting humanity. We are dedicated to raising
              awareness about the harmful effects of food waste and food
              insecurity nationwide. Our mission involves rescuing surplus food
              and distributing it to those in need, while also utilizing
              bio-waste to protect our environment from contamination.
            </p>
          </div>
          <div className="end_line"><b>Together We Can Bring Difference</b></div>
        </div>
      </section>
    </main>
  );
};

const Rect1 = () => {
  return (
    <motion.div
      exit={{ x: "-100%" }}
      transition={{ type: "tween", duration: 1 }}
      className="rect1"
    >
      <div className="left_txt">BE DIFFERENT<br />MAKE A DIFFERENCE</div>
    </motion.div>
  );
};

const Rect2 = () => {
  return (
    <motion.div
      exit={{ x: "100%" }}
      transition={{ type: "tween", duration: 1 }}
      className="rect2"
    >
      <div className="right_txt"><h2 className="intro">At Momeals, our mission is to combat hunger and reduce food waste.</h2></div>
    </motion.div>
  );
};
