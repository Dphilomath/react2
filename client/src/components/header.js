import React from "react"
import {LogoutButton, LoginButton} from "./buttons"
import {BrowserRouter as Router, Route} from "react-router-dom"


class Button extends React.Component{
    constructor(props){
        super(props)
        this.state={
            isLogedIn:{
              type:Boolean
            }
        }
    }
    componentDidMount(){
        fetch("https://react--backend.herokuapp.com/user/check").then(res=>{
          if(res.status===200){
            this.setState({
              isLoggedIn:true
            })
          }
        })
      }
    render(){
        let button
        if(this.state.isLoggedIn)
          button = <LogoutButton />
        else button = <LoginButton />
        return(button)

    }
}

class Header extends React.Component{
      render(){
        return(
            <div>
            <div className="topnav">
                <a href="/">Home</a>
                <a href="/about">About Us</a>
                <a href="/menu">Menu</a>
                <a href="/contact">Contact</a>
                <Router>
                  <Route component={Button} />
                </Router>
                
          </div>
          <div className="container">
          <h2>Welcome to Chocolate Room</h2>
        </div>
        </div>
        )
      }
    
}


export default Header