import { Component } from "react"
import "./index.css"

class Mode extends Component{
    state={isDarkMode:true}
    
    change=()=>{
        this.setState(prevState=>({
            isDarkMode:!prevState.isDarkMode
        }))
    }

    render(){
        const {isDarkMode}=this.state
        const modeClassName=isDarkMode ? "dark-mode":"light-mode"
        const buttontext=isDarkMode ? "Light Mode":"Dark Mode"
        return(
            <div className="app-container">
                <div className={`container ${modeClassName}`}> 
                    <h1 className="heading">Click To Change Mode</h1>
                    <button type="button" className="button" onClick={this.change}>{buttontext}</button>
                </div>
            </div>
        )
    }
}

export default Mode