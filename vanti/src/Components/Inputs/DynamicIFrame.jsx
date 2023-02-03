import React, { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import logo from './ws-icon.png'
import logoVivogas from './vivogas.png'
import './DynamicIFrame.css'

const DynamicIFrame = () => {
  const [footerCopyright, setFooterCopyright] = useState()
  useEffect(() => {
    setFooterCopyright(new Date().getFullYear())
    setTitle()
  }, [ ])
   
  function setTitle() {
    document.title = "Instalación Gas Vehicular Desde $450.000";
  }

  return (
    <>
        <section className="row m-0 w-100 position-relative" >
          <div className="w-100 p-3 mb-2">
          </div>
          <div className="col-md-5 col-sm-12 m-0 p-0 d-flex justify-content-center ">
            <div className="card card-shade w-75  p-2  d-flex justify-content-center">
              <iframe title='Vanti form register' className='d-block' src="https://www.cognitoforms.com/f/Ebjqwv_sR0KM92-QcqTG_w?id=1"  width={"100%"} height="900px" />

            </div>
          </div>
          <div className="col-md-6 col-sm-12 m-0 p-0 d-flex justify-content-center ">
            <div className="row p-0 m-0">
              <div className="col-12 p-2 card card-shade ">
                <div className="d-flex flex-column">
                  <h1 className="fw-bolder text-bg-warning text-primary rounded p-2 text-center">¿Quieres saber de nuestros servicios?</h1>
                  <p className="w-100 text-justify mt-1 fs-5">
                  <span className="fw-bolder text-primary fs-4">En el siguiente video</span> de 90 segundos te mostramos en detalle lo que haremos a tu vehículo al momento de hacer la instalación del sistema de gas natural
                  Ecopetrol junto a otras empresas entregan beneficios hasta por el 70% de valor total de la conversión a gas de tu vehículo, a través de nosotros podrás acceder a estos recursos, no lo pienses más y contáctanos hoy mismo,  <span className="fw-bolder text-primary fs-4">recibirás la asesoría de un experto.</span>
                  </p>
                </div>
                <div className="col-12 d-flex justify-content-center">
                  <iframe className='w-100 p-1 rounded-4' height="315" src="https://www.youtube.com/embed/ghjNd3k5grc">
                  </iframe>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex mt-4 w-100 bg-warning justify-content-center my-5 py-3">
            <h1>Instalación gas natural vehicular Bogotá, Soacha y Bucaramanga</h1>
          </div>
          <div className="d-flex my-1">
            <ul className="list-group w-50">
              <li className="list-group-item">
                - Revisión de compresión del motor y estado eléctrico de tu vehículo
              </li>
              <li className="list-group-item">
                - (Tres) 3 revisiones post venta al sistema de gas instalado
              </li>
              <li className="list-group-item">
                - Tu motor 100% seguro, Instaladores profesionales, marcas certificadas en sistemas de gas vehicular, 1 año de garantía y descuento de hasta el 70% del valor del equipo gracias a Ecopetrol y Vanti, financiación del 30% restante a través del recibo del gas, $0 de cuota inicial.
              </li>
            </ul>
            <div className="d-flex align-items-center justify-content-center w-50">
              <img width="40%" src={logoVivogas} alt="" />
            </div>
          </div>
          <div className='my-5'/>
          <div className="container d-flex justify-content-around">
            <div className="d-flex flex-column w-25 align-items-center justify-content-center my-1 border border-success rounded-2 overflow-hidden">
              <div className="w-100">
                <h2 className='bg-success text-light w-100 px-5 py-3 text-center fs-3'>DINERO</h2>
              </div>
              <div className="p-2">
                <p className='w-100 fs-5 bg-warning p-4 text-dark rounded'>¿Cuánto gastaras en gasolina el resto de tu vida?, El 55% de ese dinero ahora es tuyo si instalas GNV</p>
              </div>
            </div>
            <div className="vr vr-blurry h-100"></div>
            <div className="d-flex flex-column w-25 align-items-center justify-content-center my-1 border border-primary rounded-2 overflow-hidden">
              <div className="w-100">
                <h2 className='bg-primary text-light w-100 px-5 py-3 text-center fs-3'>MEJOR AIRE</h2>
              </div>
              <div className="p-2">
                <p className='w-100 fs-5 border-bottom border-info p-4 text-dark rounded'>Serás buena gente con el medio ambiente con hasta un 70% menos de gases contaminantes.</p>
              </div>
            </div>
            <div className="vr vr-blurry h-100"></div>
            <div className="d-flex flex-column w-25 align-items-center justify-content-center my-1 overflow-hidden">
              <h2 className='bg-primary text-light w-100 px-5 py-3 text-center fs-3'>SEGURIDAD</h2>
              <p className='w-100 fs-5'>Talleres y materiales certificados por ICONTEC y garantía de 1 año</p>
            </div>
          </div>
          <div className='my-5'/>
          <div className="d-flex mt-4 w-100 bg-success text-light align-items-center flex-column p-3">
            <h1><em> 1 Galón de gasolina=2,8 m³ de Gas=$4.480 Aprox </em></h1>
            <hr className='border w-100 mt-3 mb-2'/>
            <button onClick={window.open('https://api.whatsapp.com/send?phone=573105134665&text=Hola,%20deseo%20mas%20informaci%C3%B3n','_blank')} className='btn btn-light px-4 py-2'>¿SABER MÁS?</button>
          </div>
          <div className="mt-4 w-100 text-center p-3">
            <h1 className='text-center'>¿Cómo aplico a los recursos entregados por <br /> <span className="fw-bold text-success">ECOPETROL</span> para conversiones a gas?</h1>
          </div>
          <div className="d-flex mt-4 w-100 bg-warning align-items-center flex-column p-3">
            <h3>Apartes más importantes a tener en cuenta</h3>
            <ul className="list-group w-75">
              <li className="list-group-item d-flex align-items-center">
                <div><img src={logo} alt="" /></div>
                Firmar formato de solicitud para que le otorguen monto generado por el convenio establecido con el acuerdo del Fondo de Conversiones
              </li>
              <li className="list-group-item">
                Al firmar certifica que su vehículo opera en las siguientes zonas (Bucaramanga, Tunja, Bogotá, Zipaquirá, Facatativá, Soacha, Chía, Mosquera, Cota, Funza, La Calera, Sopo, Cogua, Cajica, Madrid y Sibaté y no en otras zonas del país)
              </li>
              <li className="list-group-item">
                Al firmar se compromete a cumplir con el compromiso de consumo (Para más información sobre este punto consultar al asesor que le está atendiendo)
              </li>
            </ul>
          </div>
          <div className="icon-web ">
            <a href="https://wa.me/573105134665?text=Me%20gustar%C3%ADa%20saber%20el%20precio%20de%20conversion%20a%20gas" target="_blank" class="btn-whatsapp">
              <img className="icon-web-start" src={logo} alt="" />
              <img className="icon-web-ending" src={logo} alt="" />
            </a>
          </div>
        </section>
        <footer className="w-100 bg-dark p-3 h-25 text-light">
        Copyright { footerCopyright } &#169; Diseño y desarrollo por GasVanti.com
        </footer>
    </>)
  }

export default DynamicIFrame