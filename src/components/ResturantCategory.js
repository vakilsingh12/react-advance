import React, { useState } from 'react'
import ItemList from './ItemList'

const ResturantCategory = ({ data }) => {
    const [acordnActive, setAcordnActive] = useState(false);
    const activeHandler = () => {
        setAcordnActive(!acordnActive)
    }
    return (
        // Accordian Header
        <>
            <div className='w-1/2 mx-auto my-4 bg-gray-50 shadow-lg p-4'>
                <div className='flex justify-between cursor-pointer' onClick={activeHandler}>
                    <span className='font-bold text-lg'>{data.title} ({data.itemCards.length})</span>
                    {acordnActive ? <span>⬆️</span> : <span>⬇️</span>}
                </div>
                {acordnActive && <ItemList items={data.itemCards} />}
            </div>
            {/* Accordian body */}
        </>
    )
}

export default ResturantCategory