import React from 'react'

function header({filterCountry}) {


  return (
      <header className='bg-primary py-1 row'>
        <h2 className='text-white col-6'>Countries
        </h2>
        <input onKeyUp={filterCountry} type="text" id="txtsearch" className='ml-auto col-2' placeholder='Search'></input>

      </header>

    
  )
}

export default header