import { useEffect, useState, useRef } from "react"
import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const vehiculosBack = [
  {
    nombre: "corola",
    marca: "toyota",
    modelo: 2014,

  },

  {
    nombre: "Fiesta",
    marca: "Ford",
    modelo: 2012,
    
  },

  {
    nombre: "Renault",
    marca: "Rise",
    modelo: 2011,
    
  },

  {
    nombre: "Stone",
    marca: "toyota",
    modelo: 2018,
    
  },
  {
    nombre: "Jul",
    marca: "BMW",
    modelo: 2024,
    
  }
]

const Vehiculos = () => {
  const[mostrarTabla, setMostrarTabla] = useState(true)
  const[textoBoton, setTextoBoton] = useState("Crear nuevo vehiculo")
  const[vehiculos, setVehiculos] = useState([])
  const[colorBoton, setColoBoton] = useState("indigo")

  


  useEffect(()=>{
    setVehiculos(vehiculosBack)
  }, [])

  useEffect(()=>{ 
    if(mostrarTabla){
      setTextoBoton("crear nuevo vehiculo")
      setColoBoton("indigo")
    }else{
      setTextoBoton("ver vehiculos creados")
      setColoBoton("green")
    }
  },[mostrarTabla])

  return (


    <div className="flex h-full w-full flex-col items-center p-8">
      <div className="flex flex-col">
        <h2 className="text-3xl font-extrabold text-gray-900 "> Pagina de administracion de vehiculos </h2>
        <button onClick={()=>{ setMostrarTabla(!mostrarTabla)}} className={`text-white rounded-full m-6 w-28 self-end bg-${colorBoton}-500 p-5` }>{textoBoton}</button>
        {mostrarTabla ? <TablaVehiculos listaVehiculos={vehiculos}/>: <FormularioVehiculos showTable={setMostrarTabla} addVehiculo={setVehiculos} listaVehiculos={vehiculos}/>}
        <ToastContainer position="top-right"
        autoClose={5000} />
      </div>
    </div>


    
  )
}

const TablaVehiculos = ({listaVehiculos}) => {
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
        {listaVehiculos.map((vehiculo)=>{
          return(
        <tr>
          <td>{vehiculo.nombre}</td>
          <td>{vehiculo.marca}</td>
          <td>{vehiculo.modelo}</td>
        </tr>
          )
        })}
      </tbody>
    </table>
    </div>
  )
}

const FormularioVehiculos = ({showTable, listaVehiculos, addVehiculo}) =>{

    const form = useRef(null)
 
    const submitForm = (e)=>{
        e.preventDefault()
        let fd = new FormData(form.current)
        const nuevoVehiculo = {}
        fd.forEach((value, key ) => {
          
          nuevoVehiculo[key] = value
          showTable(true)
        });
        toast.success("Vehiculo agregado con exito!")
        addVehiculo([...listaVehiculos, nuevoVehiculo])
        
    }

  return(
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-2xl font-extrabold text-gray-800">Crear nuevo vehiculo</h2>
      <form className="flex flex-col" onSubmit={submitForm} ref={form}>        

      <label className="flex flex-col" htmlFor="nombre"> Nombre del vehiculo
       <input required
       
       name="nombre" className="bg-gray-50 border border-gray-100 p-2 rounded-lg m-2" type="text" />
      </label>
       
       <label className="flex flex-col" htmlFor="marca"> Marca del vehiculo
        <select required 
       className="bg-gray-50 border border-gray-100 p-2 rounded-lg m-2" type="text"  name="marca" id="">
          <option >Renault</option>
          <option >Toyota</option>
          <option >Ford</option>
          <option >Mazda</option>
          <option >Chevrolet</option>
        </select>
       </label>

       <label className="flex flex-col"  htmlFor="modelo">Modelo del vehiculo
       <input required 
    type="number" min={1992} max={2023} name="modelo"  className="bg-gray-50 border border-gray-100 p-2 rounded-lg m-2"  />
       </label>
    
        <button type="submit" onSubmit={submitForm} className="col-span-2 bg-green-500 p-2 rounded-full shadow-md hover:bg-green-700">Guardar vehiculo</button>
      </form>
    </div>
  )
}

export default Vehiculos