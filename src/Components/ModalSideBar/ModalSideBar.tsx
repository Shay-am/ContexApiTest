import React, { useContext } from 'react'
import { ContextAddons, ContextSideBar } from '../../ModalContext'
import './ModalSideBar.scss'

export const ModalSideBar = () => {
    const { isOpenModalSideBar, setIsOpenModalSideBar } = useContext(ContextSideBar)
    const { setIsOpenModalAddons } = useContext(ContextAddons)

    const handleOpenAddonsModal = () => {
        setIsOpenModalSideBar()
        setIsOpenModalAddons()
    }

    return (
        <>
            <div className="heading">
                <h2>Modal SideBar</h2>
                <button onClick={setIsOpenModalSideBar}>{isOpenModalSideBar ? 'Close Modal' : 'Open Modal'}</button>
            </div>

            {isOpenModalSideBar && (
                <div className="addons">
                    <h2>Modal Addons</h2>
                    <button onClick={handleOpenAddonsModal}>Open Modal addons</button>
                </div>
            )}
            {isOpenModalSideBar && <div className="modalSideBar" />}
        </>
    )
}
