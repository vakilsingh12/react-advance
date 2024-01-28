import React, { useState } from 'react'
import ItemList from './ItemList'

const ResturantCategory = ({ data,showItems,itemHandler,dummy }) => {
    return (
        // Accordian Header
        <>
            <div className='w-1/2 mx-auto my-4 bg-gray-50 shadow-lg p-4'>
                <div className='flex justify-between cursor-pointer' onClick={itemHandler}>
                    <span className='font-bold text-lg'>{data.title} ({data.itemCards.length})</span>
                    {showItems ? <span>⬆️</span> : <span>⬇️</span>}
                </div>
                {showItems && <ItemList items={data.itemCards} dummy={dummy}/>}
            </div>
            {/* Accordian body */}
        </>
    )
}

export default ResturantCategory