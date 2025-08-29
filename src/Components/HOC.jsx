import React from "react"
import NavBar from "./NavBar"
import Footer from "./Footer"

const HighOrderComponet = (WrappedComponent) => {
    return (props) => {
        return (
            <div>
                <NavBar/>
                <WrappedComponent {...props} />
                <Footer/>
            </div>
        )
    }
}
export default HighOrderComponet