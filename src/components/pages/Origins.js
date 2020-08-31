import React from 'react'
import birthdayNiTony from '../../images/birthdayNiTony.jpg'
import styled from 'styled-components'

export const OriginsContainer = styled.div`
  display: flex;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
  background: #292929;
  .img {
    width: 100%;
    height: 100%;
  }
  .wrapper {
    padding: 3rem;
    @media (max-width: 480px) {
      padding: 2rem;
    }
    display: flex;
    flex-direction: column;
    justify-content: center;
    .headline {
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
    p {
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
  }
`

export default function Origins() {
  return (
    <OriginsContainer>
      <img className="img" src={birthdayNiTony} alt="birthday ni tonying" />
      <div className="wrapper">
        <h1 className="headline">Simula</h1>
        <p>Hindi ko maalala lahat ng lubos kung paano nag simula ang lahat, dibale kapag nagkita-kita na naman kami ulit at kapag napagsama-sama namin lahat ng kuwento, maganda ang kalalabasan nito, pero ito yung kauna-unahang litrato naming mag kakaibigan. Kaarawan ng isa sa aming grupo na si Anntony. Ginanap sa Chowking, Subic. Naalala ko pa, isa sa amin ang nakasira ng gripo sa hugasan malapit sa banyo. Dahil wala namang masiyadong tao noong mga araw na yon kaya napagdiskitahan naming lahat mag laro sa loob ng banyo. Papatayin yung ilaw at pag katapos isa sa amin papasok para bukas ang ilaw. Pagkabukas ng ilaw, bawat isa sa amin ay nakapuwesto ng kung anu-ano. Sabay tawanan, kulitan, harutan. Sarap balikan ang mga alaala.</p>
      </div>
    </OriginsContainer>
  )
}
