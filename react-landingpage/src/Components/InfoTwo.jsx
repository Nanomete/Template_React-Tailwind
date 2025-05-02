import React from 'react'

function InfoTwo() {
    const img = 'https://plus.unsplash.com/premium_photo-1682140993556-f263e434000b?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

  return (
    <div className='container mx-auto flex items-center py-16'>
        
        <div className="w-1/2 px-6">
            <h2 className='text-3xl font-semibold'>Welcome to Our Website</h2>
            <p className='text-gray-600 mt-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, eaque!</p>
        </div>
        <div className="w-1/2">
            <img src={img} alt="" className='w-full h-auto rounded-lg'/>
        </div>
    </div>
  )
}

export default InfoTwo