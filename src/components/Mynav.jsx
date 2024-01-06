import React from 'react'

const Mynav = () => {
    return (

        <div className="">
            <nav className=' bg-danger'>
                <div className="container">
                    <div className='d-flex justify-content-between align-items-center '>
                        <p className='text-white'>logo</p>
                
                        <ul className='d-flex gap-4 mobileView justify-content-center align-items-center '>
                            <li className=' list-unstyled '><a className='text-decoration-none  text-white ' href="#">link</a></li>
                            <li className=' list-unstyled '><a className='text-decoration-none  text-white ' href="#">link</a></li>
                            <li className=' list-unstyled '><a className='text-decoration-none  text-white ' href="#">link</a></li>
                            <li className=' list-unstyled '><a className='text-decoration-none  text-white ' href="#">link</a></li>
                            <li className=' list-unstyled '><a className='text-decoration-none  text-white ' href="#">link</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>

    )
}

export default Mynav
