import React, { Children } from 'react'
import Sidebar from '../components/sidebar'

const PrivateLayaout = ({children}) => {
  return (
    <div className='flex w-screen h-screen'>
        <Sidebar/>
        <main className='flex w-full bg-slate-500 overflow-y-scroll items-center justify-center'>
            {children}
        </main>
    </div>
  )
}

export default PrivateLayaout