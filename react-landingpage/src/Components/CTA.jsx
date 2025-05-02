import React from 'react'

function CTA() {
  return (
    <section className='bg-blue-500 py-16 text-white'>
        <div className="container mx-auto text-center">
            <h2 className='text-3xl font-semibold'>Ready to get started?</h2>
            <p className='text-lg mt-4'>Join us today and experience the best services.</p>
            <a href="#" className='bg-white text-blue-800 px-6 py-2 rounded-full mt-8 inline-block hover:bg-blue-100'>
                Get started
            </a>
        </div>
    </section>
  )
}

export default CTA