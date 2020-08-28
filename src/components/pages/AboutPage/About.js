import React from 'react';
import AboutSection from './AboutSection';
import { aboutObjOne, aboutObjThree } from './data';
import Pricing from '../../Pricing'

function About() {
  return (
    <>
      <AboutSection {...aboutObjThree} />
      <AboutSection {...aboutObjOne} />
      <Pricing />
    </>
  );
}

export default About;