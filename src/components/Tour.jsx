"use client"
import React from 'react'
const Tour = () => {
    function move(e) {
        const width = 400;
        const height = 400;
        const x = Math.floor(Math.random() * width)
        const y = Math.floor(Math.random() * height)
        e.target.style.left = x + "px"
        e.target.style.top = y + "px"
    }
    function view() {
        alert("thank you so much for yes")
    }
    function koina() {
        alert(`😒😒😒😒`)
    }
    return (
        <div>
            <div className='max-w-[1140px] mx-auto px-3 '>
                <h2 className=' text-[40px] font-bold'>chle ghumne :-</h2>
                <div className='flex gap-5'>
                    <button className='px-4 py-3 bg-[#02cdcf] rounded-2xl text-white text-[20px] font-bold' onClick={view}>yes</button>
                    <button className='px-4 py-3 bg-red-600 rounded-2xl text-white text-[20px] font-bold relative' onMouseEnter={move} onClick={koina}>no</button>
                </div>
            </div>
        </div>
    )
}

export default Tour