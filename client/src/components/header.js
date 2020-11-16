import React from "react"
import {LogoutButton, LoginButton} from "./buttons"


class Button extends React.Component{
    constructor(props){
        super(props)
        this.state={
            isLogedIn: false
        }
    }
    componentDidMount(){
        fetch("/user/check").then(res=>{
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
                <Button />
          </div>
          <div className="container">
          <h2>Welcome to our bakery</h2>
        </div>
        </div>
        )
      }
    
}


export default Header