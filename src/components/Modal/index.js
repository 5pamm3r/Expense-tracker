import ReactDOM from 'react-dom';
import './Modal.css'
function Modal({ setOpenItemModal, children}) {
  const onClick = (e) => {
    if(e.target.id === 'itemModal'){
      setOpenItemModal(prevState=>!prevState)
    }
  }
  return ReactDOM.createPortal(
    <div id='itemModal' className="Modal__container" onClick={onClick}>
      {children}
    </div>,
    document.getElementById('modal')
  )
}
export default Modal;