import React from 'react'

function header({filterCountry}) {


  return (
      <header className='bg-primary py-1 row px-2'>
        <div className='col-6'>
        <h2 className='text-white col-6'><a href="/" style={{textDecoration:"none", color:"white"}}>Countries</a>
        </h2>
        </div>
        <div className='col-6'>
        <input onKeyUp={filterCountry} style={{float:"right", width:"50%"}} type="text" id="txtsearch" className= 'px-3 py-1 col-2' placeholder='Search'></input>

        </div>

      </header>

    
  )
}

export default header