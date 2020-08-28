import React from 'react';
import AboutSection from './AboutSection';
import { aboutObjThree } from './data';
import Pricing from '../../Pricing'

function About() {
  return (
    <>
      <AboutSection {...aboutObjThree} />
      <Pricing />
    </>
  );
}

export default About;