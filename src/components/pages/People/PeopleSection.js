import React from 'react'
import '../../HomeSection.scss'

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
    </>
  )
}
