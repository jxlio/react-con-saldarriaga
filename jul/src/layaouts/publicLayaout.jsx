
import Navbar from '../components/navbar'
import Footer from '../components/footer'



const PublicLayaout = ( { children } ) => {
  return (
    <div className='flex flex-col justify-between h-screen'>
        <Navbar/>
        <div className='h-full overflow-y-scroll bg-slate-400'>{children}</div>
        <Footer/>
    </div>
  )
}

export default PublicLayaout
