import React from 'react'

const ClientReview = () => {
  return (
    <>
        <div className='clientReviews my-4'>
            <ul className='flex justify-between items-center max-w-3xl mx-auto'>
                <li>
                    <div className='flex flex-col'>
                        <span>Love Southcrew!</span>
                        <div>🌟🌟🌟🌟🌟</div>
                        <span>-Hemanth</span>
                    </div>
                </li>
                <li>
                    <div className='flex flex-col'>
                        <span>Helped us grow!</span>
                        <div>🌟🌟🌟🌟🌟</div>
                        <span>-Jeevan</span>
                    </div>
                </li>
                <li>
                    <div className='flex flex-col'>
                        <span>The Real deal</span>
                        <div>🌟🌟🌟🌟🌟</div>
                        <span>-Vivek</span>
                    </div>
                </li>
            </ul>
        </div>
    </>
  )
}

export default ClientReview