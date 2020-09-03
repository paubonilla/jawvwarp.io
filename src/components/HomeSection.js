import React from 'react'
import { Button } from './layout/Button/Button'
import { Link } from 'react-router-dom'
import './HomeSection.scss'

export default function HomeSection({
  lightBg,
  topLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  imgStart,
  to
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
                <Link to={to}>
                  <Button buttonSize='btn--wide' buttonColor='black'>{buttonLabel}</Button>
                </Link>
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
