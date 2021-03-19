
import React, { useState, useEffect } from 'react'
import Modal from 'react-modal'

import LegendInfo from '../images/LegendInfo.svg'

import UN1 from '../images/goals/1.png'
import UN2 from '../images/goals/2.png'
import UN3 from '../images/goals/3.png'
import UN4 from '../images/goals/4.png'
import UN5 from '../images/goals/5.png'
import UN6 from '../images/goals/6.png'
import UN7 from '../images/goals/7.png'
import UN8 from '../images/goals/8.png'
import UN9 from '../images/goals/9.png'
import UN10 from '../images/goals/10.png'
import UN11 from '../images/goals/11.png'
import UN12 from '../images/goals/12.png'
import UN13 from '../images/goals/13.png'
import UN14 from '../images/goals/14.jpg'
import UN15 from '../images/goals/15.png'
import UN16 from '../images/goals/16.png'

import Line from '../images/goals/line.svg'
import DottedLine from '../images/goals/dottedline.svg'
import Circle from '../images/goals/circle.svg'

const ModalInfo = (props) => {

    const [modalIsOpen, setmodalIsOpen] = useState(false)

    return(
        
        <div>

      
      <div className='legend' onClick={()=> {setmodalIsOpen(true)}}>
          <img className='legendInfo' src={LegendInfo}/>
          <p>Legend</p>
          </div>

      <Modal isOpen={modalIsOpen}
      onRequestClose={() => setmodalIsOpen(false)}
      className='modalInfo'
      style={
        {
          overlay : {
            backgroundColor: 'rgba(255, 255, 255, 0)'
          }
        }
      }
      >

      <div>
        <button className='close-info' onClick={() => setmodalIsOpen(false) }>-</button>
      </div>

        <div className='infoTextMain'>
          <p className='infoText infoTextOne'>
          <img className='suggestingImg' src={Line}/>
          Ricola footsteps
          <br></br><br></br>
          <img className='suggestingImg' src={DottedLine}/>
          Initiatives
          <br></br><br></br>
          <img className='suggestingImg' src={UN1}/>
          No poverty
          <br></br><br></br>
          <img className='suggestingImg' src={UN2}/>
          Zero hunger
          <br></br><br></br>
          <img className='suggestingImg' src={UN3}/>
          Good health and well-being
          <br></br><br></br>
          <img className='suggestingImg' src={UN4}/>
          Quality education
          <br></br><br></br>
          <img className='suggestingImg' src={UN5}/>
          Gender Equality
          <br></br><br></br>
          <img className='suggestingImg' src={UN6}/>
          Clean water and sanitation
          <br></br><br></br>
          <img className='suggestingImg' src={UN7}/>
          Affordable and clean energy
          <br></br><br></br>
          <img className='suggestingImg' src={UN8}/>
          Decent work and economic growth
          </p>

          <p className='infoText'>
          <img className='suggestingImg' src={Circle}/>
          Categoty
          <br></br><br></br>
          <img className='suggestingImg' src={UN9}/>
          Industry, innovation and infrastructure
          <br></br><br></br>
          <img className='suggestingImg' src={UN10}/>
          Reduce inequakities
          <br></br><br></br>
          <img className='suggestingImg' src={UN11}/>
          Sustainable cities and communeties
          <br></br><br></br>
          <img className='suggestingImg' src={UN12}/>
          Responsible consumption and production
          <br></br><br></br>
          <img className='suggestingImg' src={UN13}/>
          Climate Action
          <br></br><br></br>
          <img className='suggestingImg' src={UN14}/>
          Life below water
          <br></br><br></br>
          <img className='suggestingImg' src={UN15}/>
          Life on land
          <br></br><br></br>
          <img className='suggestingImg' src={UN16}/>
          Peace, justice and strong institutions
         
          </p>
          </div>

          
          <div className="App">

    </div>
      
      </Modal>
    
        </div>
    )
}



export default ModalInfo
