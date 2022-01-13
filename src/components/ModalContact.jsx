import React from 'react'

const ModalContact = ({modalIsOpen, setModalIsOpen}) => {

    const handleClick = (e) => {
        if (e.tareg.classList.contains('dismiss')) {
            setModalIsOpen(null);
        }
    }


    return (
        <div>
            <div className="overlay dismiss" onClick={handleClick}>
                Hi
            </div>
        </div>
    )
}

export default ModalContact
