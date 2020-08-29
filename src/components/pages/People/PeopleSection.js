import React from 'react'
import '../../HomeSection.scss'
import sila from '../../../images/sila.jpg'
import silaUlit from '../../../images/sila-ulit.jpg'
import styled from 'styled-components'

export const PeopleSectionContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export default function PeopleSection({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  img,
  alt,
  imgStart
}) {
  return (
    <>
      <div className={lightBg ? 'home__section' : 'home__section darkBg'}>
        <div className="container">
          <div className="row home__row"
            style={{ display: 'flex', flexDirection: imgStart === 'start' ? 'row-reverse' : 'row' }}
          >
            <div className="col">
              <div className="home__text-wrapper">
                <div className="top-line">{topLine}</div>
                <h1 className={lightText ? 'heading' : 'heading dark'}>{headline}</h1>
                <p className={lightTextDesc ? 'home__subtitle' : 'home__subtitle dark'}>{description}</p>
              </div>
            </div>
            <div className="col">
              <div className="home__img-wrapper">
                <img src={img} alt={alt} className="home__img" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <PeopleSectionContainer>
        <img src={sila} alt="di kasama yung iba" />
        <img src={silaUlit} alt="di kasama yung iba" />
      </PeopleSectionContainer>
    </>
  )
}
