import React, { useState } from 'react'
import { ContextSideBarProvider } from '../../ModalContext'
import { ModalSideBar } from '../ModalSideBar/ModalSideBar'
import { Order } from '../Order/Order'

const data = [
    {
        name: 'order',
    },
]

export const OrderList = () => {
    const [isOpenModal, setIsOpen] = useState(false)

    const toggleChangeModal = () => setIsOpen((prev) => !prev)
    return (
        <>
            <ContextSideBarProvider
                value={{
                    isOpenModalSideBar: isOpenModal,
                    setIsOpenModalSideBar: toggleChangeModal,
                }}
            >
                <div>
                    <Order data={data} />
                    <ModalSideBar />
                </div>
            </ContextSideBarProvider>
        </>
    )
}
