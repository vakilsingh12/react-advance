import React from 'react'
import { IMG_CDN_URL } from '../constants'
import { addItem } from '../utils/cartSlice'
import { useDispatch } from 'react-redux'

const ItemList = ({ items, dummy }) => {
    const dispatch = useDispatch();
    const addItemHandler = (item) => {
        dispatch(addItem(item))
    }
    return (
        <div>
            {items.map((item) => {
                return (
                    <div key={item.card.info.id} className='p-2 m-2  border-b-2 text-left flex justify-between' data-testid="menu">
                        <div className='w-9/12'>
                            <div className='py-2'>
                                <h1>{dummy}</h1>
                                <span className='font-medium'>{item.card.info.name}</span>
                                <span > - ₹ {(item.card.info.price || item.card.info.defaultPrice) / 100}</span>
                            </div>
                            <p className='text-xs'>{item.card.info.description}</p>
                        </div>
                        <div className='w-3/12 p-4'>
                            <div className='absolute'>
                                <button className='p-2 rounded mx-8 bg-white shadow-lg m-auto ' onClick={() => addItemHandler(item.card.info)} data-testid="add-btn"> ADD + </button>
                            </div>
                            <img src={`${IMG_CDN_URL}/${item.card.info.imageId}`} alt="" className='w-40 text-right' />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default ItemList