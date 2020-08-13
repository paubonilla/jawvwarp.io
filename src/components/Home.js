import React from 'react'
import styled from 'styled-components'

export const HomeWrapper = styled.div`

`

export const HomeInner = styled.div`
  width: 100%;
`

export default function Home() {
  return (
    <HomeWrapper>
      <HomeInner>
        Home
      </HomeInner>
    </HomeWrapper>
  )
}
