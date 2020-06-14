import React from "react";
import AboutItems from "../components/AboutItems";
import Image1 from "./../images/img1.png";
import MainLayout from "../layouts/MainLayout"

const About = () => {
  return (
    <MainLayout id="about">
      <div className="grid l-grid-height">
        <AboutItems headshot={Image1} />

        <div className="l-grid-right u-padding-left-small u-padding-right-small u-margin-top-medium text-color-primary">
          <p className="u-justify-text u-text-height">
            Esther Itolima is a Frontend Web Developer based in Lagos, Nigeria.
            She is currently working with Cognideck.
          </p>

          <p className="u-margin-top-smaller u-justify-text u-text-height">
            In 2016, she became the Women Techmakers Ambassador Port Harcourt
            and co-organiser of Google Developers Group Port Harcourt where she
            have demonstrated in a leadership role building an inclusive and
            diverse tech community, planning, organizing and promoting events.
            She have volunteer as organizer in several tech communities like
            Django Girls Port Harcourt, TechInPink, Teenscancode etc.
          </p>

          <p className="u-margin-top-smaller u-justify-text u-text-height">
            Esther is a tech Advocate that is passionate about tech communities
            and involving more women in technology and she also speaks at
            meetups/conferences.
          </p>
        </div>
      </div>
    </MainLayout>
  );
};

export default About;
