import React from 'react'
import HomeSection from '../../HomeSection'
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './data'

export default function Home() {
  return (
    <>
      <HomeSection {...homeObjOne} />
      <HomeSection {...homeObjThree} />
      <HomeSection {...homeObjTwo} />
      <HomeSection {...homeObjFour} />
    </>
  )
}
