import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import Classes from './Modal.module.css';

const Backdrop=(props)=>{
    return <div className={Classes.backdrop} onClick={props.onClose}>

    </div>

}
const ModalOverlays=(props)=>{
    return<div className={Classes.modal}>
        <div className={Classes.content}>{props.children}</div>
    </div>

}

const PortalElement=document.getElementById("overlays");
const Modal=(props)=>{
return<Fragment>
    {ReactDOM.createPortal(<Backdrop onClose={props.onClose}></Backdrop>,PortalElement)}
    {ReactDOM.createPortal(<ModalOverlays>{props.children}</ModalOverlays>,PortalElement)}
</Fragment>


}
export default Modal;