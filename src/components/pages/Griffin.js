import React from 'react'
import styled from 'styled-components'

export const GrffContainer = styled.div`
  display: flex;
  justify-content: center;
`

export const GrffInner = styled.div`
  padding: 2rem;

  .headline > h1 {
    color: #ffa31a;
    font-size: 120px;
    @media (max-width: 480px) {
      font-size: 80px;
    }
    @media (max-width: 320px) {
      font-size: 65px;
    }
    font-family: 'Oswald', sans-serif;
    text-transform: uppercase;
  }

  .story-time {
    color: #808080;
    letter-spacing: 2px;
    word-spacing: 2px;
    font-size: 18px;
    @media (max-width: 480px) {
      font-size: 16px;
    }
    @media (max-width: 320px) {
      font-size: 14px;
    }
    font-family: 'Cardo', serif;
  }
`

export default function Griffin() {
  return (
    <GrffContainer>
      <GrffInner>
        <div className="headline">
          <h1>Griffin Story</h1>
        </div>
        <div className="story-time">
          <p>1st year high school kami noong napagisipan naming makakita o mas higit pa, humili ng isang mythical creature tulad ng Griffin. Dahil nga mga isip bata pa kami. Isang araw, Lingo ng tanghali, napagkasunduan namin pumunta sa bahay nila Arnel at doon na din magkita kita para sa isang pagpupulong na magaganap sa araw na iyon. Naalala ko pa noong mga araw na yon, yung pakiramdam na di mo masabi sa mama mo kung ano ba talaga yung pakay namin kung bakit kami pupunta kanila Arnel, dahil nga manghuhuli kami ng Griffin. Yung pakiramdam na nagsinungaling ka pero parang wala din namang silbi. Hahahaha sarap lang balikan ang mga panahon. Ang mahalaga ngayon, sa dami naming pinagsamahan, kahit paulit ulit, di pa rin kami nagsasawang pagusapan at pagtawanan ang mga kalokohang pinaggagawa namin nung mga bata pa kami.</p>
        </div>
      </GrffInner>
    </GrffContainer>
  )
}
