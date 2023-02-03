import React, { useEffect } from 'react'
import Swal from 'sweetalert2'
import logo from './ws-icon.png'
import './DynamicIFrame.css'

const DynamicThanks = () => {
    useEffect(() => {
        Swal.fire({
        position: 'center',
        showCancelButton: false,
        showConfirmButton: false,
        imageUrl: logo,
        title: 'Gracias por usar nuestros servicios',
        timer: 85500
        })
    }, [ ])
    
  return (
    <>
        <div className="icon-web-container">
            <img className="icon-web-center-start" src={logo} alt="" />
            <img className="icon-web-center-ending" src={logo} alt="" />
            <video className='w-75 p-1' height="415" src="https://www.youtube.com/watch?v=FSSvrOxAwIY"></video>
        </div>
    </>
  )
}

export default DynamicThanks