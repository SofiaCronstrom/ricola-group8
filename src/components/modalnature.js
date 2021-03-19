
import React, { useState, useEffect } from 'react'
import Accordion from '../components/popup'
import Modal from 'react-modal'

import Leaf from '../components/leaf'
import { doc } from 'prettier'

import Sidebar from '../components/sidebar'

import One from '../images/goals/1.png'
import Three from '../images/goals/3.png'
import Twelve from '../images/goals/12.png'

const ModalOne = (props) => {

    const [modalIsOpen, setmodalIsOpen] = useState(false)

    const modal1 = document.querySelector('.modal-first')

    function changeAnimation(){
      
      document.querySelector('.leaf').style.visibility = 'visible';
    }

    function removeAnimation(){
      document.querySelector('.leaf').style.visibility = "hidden";
  
    }
    function viewButton(){
      
      document.querySelector('.openButton').style.visibility = 'visible';
    
    }

    function viewLine(){
      
      document.querySelector('.dottedLine1').style.visibility = 'visible';
    
    }
    
    //{props.children}
      
    return(
        
        <div>

      
      <button className='open-modal one' onClick={()=> {setmodalIsOpen(true) 
      viewButton()
      viewLine()
    }
      
      
      } onMouseOver={changeAnimation} onMouseLeave={removeAnimation} ></button>

      
      <Modal isOpen={modalIsOpen}
      onRequestClose={() => setmodalIsOpen(false)}
    
      className={props.cssClass}
      
      style={
        {
          overlay : {
            backgroundColor: 'rgba(255, 255, 255, 0)'
          }
        }
      }
      >

      <div className='header-modal'>
        <button className='close-modal' onClick={() => setmodalIsOpen(false) }>-</button>
        
        <h4>{props.title}</h4>

        <div className='goals-main'>
        <img className='goals' src={One} />
        <img className='goals' src={Three} />
        <img className='goals' src={Twelve} />
        </div>
        
      </div>

          
          <div className="App">
      <Accordion
        title="INTENTION"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        
      />
      <Accordion
        title="RESPONSIBLE"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
      <Accordion
        title="TARGET"
        content="
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </br>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
     
        "
      />
    </div>
      
      </Modal>

      
    
  
        </div>
    )
}



export default ModalOne
