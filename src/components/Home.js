import React from 'react'
import HomeSection from './HomeSection'
import { homeObjOne, homeObjThree, homeObjTwo } from './Data'

export default function Home() {
  return (
    <>
      <HomeSection {...homeObjOne} />
      <HomeSection {...homeObjTwo} />
      <HomeSection {...homeObjThree} />
    </>
  )
}
