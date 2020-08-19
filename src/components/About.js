import React from 'react'
import styled from 'styled-components'

export const AboutStyle = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  background: blueviolet;
`

export default function About() {
  return (
    <div>
      <AboutStyle>
        AboutStyle
      </AboutStyle>
    </div>
  )
}
