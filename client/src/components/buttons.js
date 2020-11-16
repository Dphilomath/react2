import React from "react"

class LogoutButton extends React.Component{
    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this)

    }
    handleClick(){
        fetch("/user/logout", {
            method:"get"
        }).then(res=>res.json).then(res=>{
            if (res.status===200)  
                this.props.history.push("/")
            else console.log(res)
        })
    }
    render(){
        return(
            <a onClick={this.handleClick} style={{float:"right"}} href="/user/logout">Logout</a>
        )
    }
}

class LoginButton extends React.Component{
    render(){
        return(
            <a style={{float:"right"}} href="/user/login">Login</a>
        )
    }
    
}

export {LogoutButton, LoginButton}