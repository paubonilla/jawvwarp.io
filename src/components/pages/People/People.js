import React from 'react';
import PeopleSection from './PeopleSection';
import { peopleObjOne } from './data';

function People() {
  return (
    <>
      <PeopleSection {...peopleObjOne} />
    </>
  );
}

export default People;