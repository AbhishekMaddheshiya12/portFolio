import React from "react"
import NavBar from "./NavBar.jsx"
import Footer from "./Footer.jsx"

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