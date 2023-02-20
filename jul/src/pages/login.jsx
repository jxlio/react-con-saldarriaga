import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='w-full flex flex-col justify-center items-center'>
      <h2 className='m-3 text-center text-3xl font-extrabold'>Inicia sesion</h2>
      <form className='mt-8 max-w-md'>
        <div>
        <input className='appearance-out relative block w-full focus:outline-none px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm' type="email" placeholder='micorreo@bla.com' required/>
        <input className='appearance-out relative block w-full  focus:outline-none px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm' placeholder='micorreo@bla.com' type="password" />

        </div>

        <div className='flex justify-between'>

        <div>
          <label htmlFor="recuerdo"> Recuerdame
          <input type="checkbox" name="recuerdo" />
          </label>
        </div>
        <div>
          <Link to={"/"}>
            Olvidaste tu contraseña
          </Link>
        </div>

        </div>

        <div>
          <Link to={"/admin"}>
          <button type='submit'>Iniciar sesion</button>
          </Link>
        </div>
        <div>
          o
        </div>

        <div>Continua con Google</div>
      </form>
    </div>
  )
}

export default Login