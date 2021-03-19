import React from 'react'

import firstImg from '../images/workerTwo.png'
import secondImg from '../images/newWorker.jpg'
import thirdImg from '../images/worker.png'

const Sidebar = (props) => {

  const imgPath = {
    'first' : firstImg,
    'second' : secondImg,
    'third' : thirdImg
  }

  console.log(imgPath[props.imgId])
    
    function openNav(){
      console.log(props.openNavigation)
    document.querySelector("." + props.openNavigation).style.width ="500px";
    document.querySelector(".main-bg").style.marginRight = "500px";
    }

    function closeNav (){
    document.querySelector("." + props.openNavigation).style.width ="0px";
    document.querySelector(".main-bg").style.marginRight= "0px";
    }

    return(
        <div>
           <button className='openButton' id={props.sideId} onClick={openNav}></button>
           
           <div className='sidebar-filter'>
            <div className={props.openNavigation} id='my-sidebar'>

              <button className='close-sidebar' onClick={closeNav}>-</button>
               <h4 className='h4-sidebar'>Nature/ Establish Ricola Biodiversity Principles</h4>
              <h2 className='h3-sidebar'>{props.sideId}</h2>
               <div className='text'> 
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas dignissim quis lacus
                     volutpat pellentesque.
                     </div> 

                <div className='image'>
                  <img className='img-sidebar' src={imgPath[props.imgId]}/>
                </div>

                 <div className="sidebar-D">
                   <p className='sidebar-p'>
                    Ut vel ex pharetra, rhoncus tellus at, ornare nibh. Nam vitae nunc non purus eleifend faucibus. Ut fringilla quis nisl in consequat. Nunc a finibus nisi. Nunc diam mauris, pretium nec aliquam non, pulvinar eget turpis,In et dolor efficitur, tincidunt lacus non, luctus ex. Cras sit amet
                   vestibulum eros. Pellentesque tempor, justo
                   <br></br> <br></br>
                   quis dictum posuere, justo lacus consequat lorem, vitae suscipit arcu ligula eget nisl. Duis non
                   elementum neque. Praesent dui orci euismod ac porta sed, porta eget ipsum. Nam augue est, rhoncus a tempor in, laoreet sit amet purus. 
                   <br></br> <br></br>
                   In et dolor efficitur, tincidunt lacus non, luctus ex. Cras sit amet vestibulum eros. Pellentesque tempor, justo quis dictum posuere, justo lacus consequat lorem, vitae suscipit arcu ligula eget nisl. Duis non elementum neque. Praesent dui orci, euismod ac porta sed,</p> 
                 </div>
               
            </div>
            </div>
        </div>
    )



}

export default Sidebar