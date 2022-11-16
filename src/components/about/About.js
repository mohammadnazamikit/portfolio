import React, { Component } from "react";
import classes from "./About.module.css";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

class About extends Component {
  render() {
    return (
      <div className={classes.box} id="about">
        <ScrollAnimation
          offset={0}
          animateIn="fadeInLeft"
          duration={2.4}
          animateOnce={true}
          initiallyVisible={true}
        >
          <span className={classes.head}>ABOUT ME</span>
          <h2 className={classes.heading}>Who Am I?</h2>
          <div className={classes.About}>
            <p>
              {" "}
              My name is <b>Mohammad Jan</b> and I am currently working as
              Software Developer Engineer at{" "}
              <a target="_blank" href="https://www.kit.edu/">
                <b>karlsruhe institute of Technology</b>
              </a>
              . I completed my degree in Master degree of Technology in
              Electrical Engineering from Taiyuan university of technology
              Institute. I am much interested in developing new things which
              excite me a lot. :){" "}
            </p>
          </div>
        </ScrollAnimation>
      </div>
    );
  }
}

export default About;
