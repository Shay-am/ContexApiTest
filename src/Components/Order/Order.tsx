import React from 'react'
import { ModalAddons } from '../ModalAddons/ModalAddons'
import { OrderMainContent } from '../OrderMainContent/OrderMainContent'
interface Data {
    name: string
}

interface OrderProps {
    data: Data[]
}

export const Order = ({ data }: OrderProps) => {
    if (!data) return null
    return (
        <div>
            <h2>Order</h2>
            <OrderMainContent data={data} />
        </div>
    )
}
