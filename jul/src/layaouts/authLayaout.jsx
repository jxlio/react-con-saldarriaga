

const AuthLayaout = ({children}) => {
  return (
    <div className='flex flex-col items-center justify-center py-2 px-4  text-gray-900'>authLayaout
      <div className='w-full '>
        <main>{children}</main>
      </div>
        
    </div>
    
  )
}

export default AuthLayaout