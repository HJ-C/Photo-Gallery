import React from "react";

const Modal = ({selectedImg})=> {
    return (
        <div className="backdrop">
            <img src={selectedImg}></img>    
        </div>
    )
}

export default Modal