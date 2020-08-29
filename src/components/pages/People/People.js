import React from 'react';
import PeopleSection from './PeopleSection';
import { peopleObjOne } from './Data';

function People() {
  return (
    <>
      <PeopleSection {...peopleObjOne} />
    </>
  );
}

export default People;