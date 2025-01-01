import React from 'react'
import model from '/src/assets/model.jpg'
function SubHome() {
  return (
    <div className=' grid grid-cols-1 lg:grid-cols-2 justify-between border shadow-md lg:mx-48 bg-slate-100'>
        <div className='uppercase font-serif space-y-2 m-auto  py-10 px-3'>
            <h3 className='text-xl'>----our bestSeller</h3>
            <h3 className='text-2xl md:text-3xl'>Latest Arrivals  </h3>
            <h3 className='text-xl'>Shop Now----</h3>
        </div>
        <div >
            <img src={model} alt="" className=''/>
        </div>
    </div>
  )
}

export default SubHome