import { createContext, useState } from "react"


interface ContextProps {
    children: React.ReactNode
}


export const ContextStore = createContext<any | null>(null)

export default function ContextProvider({children}:ContextProps) {
    const [name, setName] = useState<any>("")
    const [leavesFallen, setLeavesFallen] = useState<boolean>(false)
    const store = {
        leavesKey: [leavesFallen, setLeavesFallen],
    }
    return (
        <ContextStore.Provider value={store}>
        {children}
        </ContextStore.Provider>

    )
}