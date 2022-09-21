import React, { useState, forwardRef, useImperativeHandle} from 'react';

import ReactDOM from 'react-dom';




const MainModal = forwardRef((props, ref) => {
  
    const [display, setDisplay] = useState(false);
     
     useImperativeHandle(
         ref,
         () => {
              return{
             openModal: () => open(),
             close: () => close()
             }
         });

   const open = () => {
       setDisplay(true)
   }
 
   const close = () => {
     setDisplay(false)
 }
 
 
          if(display) {
             
           return ReactDOM.createPortal(<div className="modal-wrapper">
          
         <div onClick= {close} className="modal-backdrop" />
         <div className="modal-box d-flex justify-content-center w-75 h-50 overflow-scroll">
             <div className='d-flex justify-content-end'>
         <button  className ='closing-icon' onClick={close} > <i className="fa fa-window-close fa-2x" aria-hidden="true"></i> </button></div>
         {props.children}
         </div>
         </div>, document.getElementById('modal-root'))
  
          }
     
       return null;
     }
 )

export default MainModal