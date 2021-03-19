
import React, { useState, useEffect } from 'react'
import Modal from 'react-modal'

import Suggestion from '../images/suggestion.svg'

const ModalSuggestion = (props) => {

    const [modalIsOpen, setmodalIsOpen] = useState(false)

  function alertme(){
    alert('jeje')
  }

    return(
        
        <div>

      
      <div className='suggestion' onClick={()=> {setmodalIsOpen(true)}}>
          <img className='legendInfo' src={Suggestion}/>
          <p>Suggestion</p>
          </div>

      <Modal isOpen={modalIsOpen}
      onRequestClose={() => setmodalIsOpen(false)}
      className='modalSuggestion'
      style={
        {
          overlay : {
            backgroundColor: 'rgba(255, 255, 255, 0)'
          }
        }
      }
      >
     <div className="App">
      <div className='header-suggestion'>
        <button className='close-info' onClick={() => setmodalIsOpen(false) }>-</button>
        <h4>Suggestion</h4>
      </div>
      <div className='form-center'>
      <form className="form" >
        
        <input type="text" name="name" placeholder="Name" className="submit-name" />
        <label className='submit-label'>Footsteps</label>
        <div class="custom-select">
        <select className="submit-footstep">
          <option>Ricola</option>
          <option>Nature</option>
          <option>People</option>
          <option>Business</option>
        </select>
</div>
        <textarea className='submit-area' rows="8" cols="25" placeholder="Message"></textarea>
        <input className="submit-button" type="submit" value="SEND" />
    </form>
    </div>


          
        

    </div>
      
      </Modal>
    
        </div>
    )
}



export default ModalSuggestion
