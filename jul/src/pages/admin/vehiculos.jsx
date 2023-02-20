import { useEffect } from "react"
import React from 'react'

const Vehiculos = () => {
  useEffect( () => {
    console.log("hola")
  }
    ,[])
  
  return (

    

    <div>
      <form className='flex flex-col'>
        <h2>Formulario creacion vehiculos</h2>
        <input type="text" placeholder='nombre del vehiculo' />
        <input type="text" placeholder='marca del vehiculo' />
        <input type="text" placeholder='modelo del vehiculo' />
        <button className='bg-indigo-500 text-white'>Enviar datos</button>
      </form>
    </div>
  )
}

export default Vehiculos