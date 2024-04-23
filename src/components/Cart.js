import React from 'react'
import { useSelector } from 'react-redux'
import FoodItem from './FoodItem'

const Cart = () => {
    const cartItem = useSelector(state => state.carts.items)

    return (
        <div>
            <h1 className='font-bold text-3xl'>Cart Items</h1>
            <FoodItem {...cartItem[0]} />
        </div>
    )
}

export default Cart