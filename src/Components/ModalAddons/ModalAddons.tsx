import React, { useContext } from 'react'
import { ContextAddons } from '../../ModalContext'
import './ModalAddons.scss'

export const ModalAddons = () => {
    const { isOpenModalAddons } = useContext(ContextAddons)
    return <>{isOpenModalAddons && <div className="wrapper">Modal Addon</div>}</>
}
