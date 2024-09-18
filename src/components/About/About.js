import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  SectionWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <SectionWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="Card">
        <ScrollAnimation animateIn="fadeInLeft">
          
        </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
            Hello! My name is <strong>Shinichi Ishikawa</strong>, a recent Computer Science graduate from the University of British Columbia. During my time at UBC, I developed a strong foundation in software development, algorithms, and data structures, and worked on projects involving computer netowrking, relational database, distributed system, etc.
            </ScrollAnimation>

            <br /><br />
            
            <ScrollAnimation animateIn="fadeInLeft">
            I'm passionate about software development and machine learning, and I'm actively looking for opportunities where I can apply my skills and continue to grow. 
            I'm excited to connect with professionals in the industry to learn more about potential roles and how I can contribute to solve real life problems and hopefully get paid at the same time :).
            </ScrollAnimation>

            <br /><br />

            <ScrollAnimation animateIn="fadeInLeft">
            If you’re interested in my work, feel free to contact me! My contact information can be found on this website.
              <div className="tagline2">
                So far, I have become confident using the following technologies:
              </div>
            </ScrollAnimation>
            

            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>

        </div>
      </div>
    </SectionWrapper>
  );
}

export default About;
