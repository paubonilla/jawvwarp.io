import React from 'react';
import AboutSection from './AboutSection';
import { aboutObjOne } from './Data';
// import Pricing from '../../Pricing'

function About() {
  return (
    <>
      <AboutSection {...aboutObjOne} />
      {/* <Pricing /> */}
    </>
  );
}

export default About;