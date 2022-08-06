import { createContext } from 'react'

export type SideBarContextType = {
    isOpenModalSideBar: boolean
    setIsOpenModalSideBar: () => void
}
export const ContextSideBar = createContext<SideBarContextType>({} as SideBarContextType)
export const ContextSideBarProvider = ContextSideBar.Provider

export type AddonsContextType = {
    isOpenModalAddons: boolean
    setIsOpenModalAddons: () => void
}
export const ContextAddons = createContext<AddonsContextType>({} as AddonsContextType)
export const AddonsContextProvider = ContextAddons.Provider
