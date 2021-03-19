import Ricola from '../images/ricola.jpg'
import { Link } from "gatsby"
import React from "react"

import Header from '../components/header'
import Farmer from '../images/nature1.jpg'
import People from '../images/people.jpg'
import Business from '../images/business.jpg'
import Main from '../images/nature.jpg'


const IndexPage = () => {

  function mainBackground(){
    document.querySelector('.main-bg').style.backgroundImage = `url(${Main})` 
    document.querySelector('.main-bg').style.transition = "all 1.5s ease-in-out";
    document.querySelector('.h1-home').style.visibility = "visible";
  }

  function changeBackground(){
    document.querySelector('.main-bg').style.backgroundImage = `url(${Farmer})` 
    document.querySelector('.main-bg').style.transition = "all 1.5s ease-in-out";
    document.querySelector('.h1-home').style.visibility = "hidden";
  }

  function changeBackgroundPeople(){
    document.querySelector('.main-bg').style.backgroundImage = `url(${People})` 
    document.querySelector('.main-bg').style.transition = "all 1.5s ease-in-out";
    document.querySelector('.h1-home').style.visibility = "hidden";
  }

  function changeBackgroundBusiness(){
    document.querySelector('.main-bg').style.backgroundImage = `url(${Business})` 
    document.querySelector('.main-bg').style.transition = "all 1.5s ease-in-out";
    document.querySelector('.h1-home').style.visibility = "hidden";
  }

  function changeBackgroundRicola(){
    document.querySelector('.main-bg').style.backgroundImage = `url(${Ricola})` 
    document.querySelector('.main-bg').style.transition = "all 1.5s ease-in-out";
    document.querySelector('.h1-home').style.visibility = "hidden";
  }

  return(

    <div className='main'>
      <div className='main-bg'  style={{ backgroundImage: `url(${Main})` }}>
        <Header/>
            <h1 className='h1-home'>
                Explore our <span className='span'>footsteps  employee initiatives</span> in the map bellow
            </h1>
        <div className='all-circles'>
          <Link to='/nature'>
            <div className='circle ' id='nature' onMouseOver={changeBackground} onMouseLeave={mainBackground}>
              <div className='circle-text'>
                <span>N</span>
                <br></br>
                Nature
              </div>
            </div>
          </Link>

          <Link to='/people'>
            <div className='circle' id='people' onMouseOver={changeBackgroundPeople} onMouseLeave={mainBackground}>
              <div className='circle-text' >
                <span>P</span>
                <br></br>
                People
                </div>
            </div>
          </Link>
    
          <Link to='/business'>
            <div className='circle' id='business' onMouseOver={changeBackgroundBusiness} onMouseLeave={mainBackground}>
              <div className='circle-text'>
                <span>B</span>
                <br></br>
                Business
              </div>
            </div>
          </Link>

          <Link to='/ricola'>
            <div className='circle' id='ricola' onMouseOver={changeBackgroundRicola} onMouseLeave={mainBackground}>
              <div className='circle-text'>
                <span>R</span>
                <br></br>
                Ricola
              </div>
            </div>
          </Link>

        </div>  
      </div>
    </div>
  )
}

export default IndexPage
