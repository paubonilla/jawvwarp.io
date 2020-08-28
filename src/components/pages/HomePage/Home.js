import React from 'react'
import HomeSection from '../../HomeSection'
import { homeObjOne } from './Data'

export default function Home() {
  return (
    <>
      <HomeSection {...homeObjOne} />
    </>
  )
}
