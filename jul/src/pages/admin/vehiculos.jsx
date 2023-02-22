import { useEffect, useState } from "react"
import React from 'react'

const Vehiculos = () => {
  const[mostrarTabla, setMostrarTabla] = useState(true)
  const[textoBoton, setTextoBoton] = useState("Crear nuevo vehiculo")

  useEffect(()=>{ 
    if(mostrarTabla){
      setTextoBoton("crear nuevo vehiculo")
    }else{
      setTextoBoton("ver vehiculos creados")
    }
  },[mostrarTabla])

  return (


    <div className="flex h-full w-full flex-col items-center p-8">
      <div className="flex flex-col">
        <h2 className="text-3xl font-extrabold text-gray-900 "> Pagina de administracion de vehiculos </h2>
        <button onClick={()=>{ setMostrarTabla(!mostrarTabla)}} className="text-white rounded-full m-6 w-28 self-end bg-indigo-500 p-5">{textoBoton}</button>
        {mostrarTabla ? <TablaVehiculos/>: <FormularioVehiculos/>}

      </div>
    </div>


    
  )
}

const TablaVehiculos = () => {
  return(
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-2xl font-extrabold text-gray-800">Todos los vehiculos</h2>
    <table>
      <thead>
        <tr>
          <th>Nombre del vehiculo</th>
          <th>Marca del vehiculo</th>
          <th>Modelo del vehiculo</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Toyota</td>
          <td>Sander</td>
          <td>2022</td>
        </tr>
        <tr>
          <td>Renault</td>
          <td>Sandero</td>
          <td>2020</td>
        </tr>
        <tr>
          <td>Renault</td>
          <td>Sandero</td>
          <td>2020</td>
        </tr>
      </tbody>
    </table>
    </div>
  )
}

const FormularioVehiculos = () =>{
  return(
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-2xl font-extrabold text-gray-800">Crear nuevo vehiculo</h2>
      <form className="grid grid-cols-2">        
        <input className="bg-gray-50 border border-gray-100 p-2 rounded-lg m-2" type="text" />
        <input className="bg-gray-50 border border-gray-100 p-2 rounded-lg m-2" type="text" type="text" />
        <input className="bg-gray-50 border border-gray-100 p-2 rounded-lg m-2" type="text" type="text" />
        <input className="bg-gray-50 border border-gray-100 p-2 rounded-lg m-2" type="text" type="text" />
        <button className="col-span-2 bg-green-500 p-2 rounded-full shadow-md hover:bg-green-700">Guardar vehiculo</button>
      </form>
    </div>
  )
}

export default Vehiculos