import React, { useState } from 'react'
import { AddonsContextProvider } from '../../ModalContext'
import { ModalAddons } from '../ModalAddons/ModalAddons'
interface Data {
    name: string
}

interface OrderProps {
    data: Data[]
}

export const OrderMainContent = ({ data }: OrderProps) => {
    const [isOpenModalAddons, setIsOpen] = useState(false)

    const toggleChangeModalAddons = () => setIsOpen((prev) => !prev)

    if (!data) return null
    return (
        <AddonsContextProvider
            value={{
                isOpenModalAddons: isOpenModalAddons,
                setIsOpenModalAddons: toggleChangeModalAddons,
            }}
        >
            {data.map((item, index) => {
                return (
                    <div key={index}>
                        <p>{item.name}</p>
                        <button onClick={toggleChangeModalAddons}>Open Modal Addons</button>
                    </div>
                )
            })}
            <ModalAddons />
        </AddonsContextProvider>
    )
}
