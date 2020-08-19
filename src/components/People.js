import React from 'react'
import styled from 'styled-components'

export const PeopleContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export default function People() {
  return (
    <PeopleContainer>
      <span>Judel</span>
      <span>Arnel</span>
      <span>Wyne</span>
      <span>Van</span>
      <span>Walter</span>
      <span>Anntony</span>
      <span>Rydar</span>
      <span>Paulo</span>
      <span>Nester</span>
      <span>Miguel</span>
    </PeopleContainer>
  )
}
