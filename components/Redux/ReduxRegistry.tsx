"use client"
import Store from "./Store"
import { Provider } from "react-redux"



const ReduxRegistry: React.FC<React.PropsWithChildren> = ({ children }) => {

    return (
        <Provider store={Store}>
            {children}
        </Provider>
    )
}



export default ReduxRegistry