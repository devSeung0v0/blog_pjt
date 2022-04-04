import React from 'react';

export default function Modal(props) {
    return(
            <div className='modal'>
                <h2>{props.title[props.modalTitle]}</h2>
                <p>date</p>
                <p>contents</p>
            </div>
    )
}
