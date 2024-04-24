import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import FoodItem from './FoodItem'
import { clearCart } from '../utils/cartSlice'

const Cart = () => {
    const cartItem = useSelector(state => state.carts.items)
    const dispatch = useDispatch()
    const clearCartHandler = () => {
        dispatch(clearCart())
    }
    return (
        <>
            {cartItem.length ? <div>
                <div className='flex items-center '>
                    <h1 className='font-bold text-3xl'>Cart Items</h1>
                    <button className='bg-green-500 text-white mx-5 font-bold px-2 mt-2' onClick={clearCartHandler}>Clear Cart</button>
                </div>
                <div className='flex'>
                    {cartItem.map(item => {
                        return <FoodItem key={item.id} {...item} />
                    })}
                </div>
            </div> :
                <div>
                    <h1 className='font-bold text-3xl'>Item Not found</h1>
                </div>
            }
        </>
    )
}

export default Cart