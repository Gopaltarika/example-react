import React from 'react'
import { Link } from 'react-router-dom'

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
            <input type="search" />
            <input type="radio" />
            <input type="date" />
            <input type="checkbox" />
            <input type="file" />
            <input type="range" />
            <input type="week" />
            <input type="time" />
            <input type="color" />
        
        </div>

    )
}

export default Mynav
