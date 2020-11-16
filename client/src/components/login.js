// import react from "react"

import { Component } from "react";

export default class Login extends Component{
    constructor(props){
        super(props)
        this.state={
            email:"email",
            password:"password"
        }
        this.onInputChange = this.onInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    onInputChange(event){
        const target = event.target
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]:value
        })

    }
    
    handleSubmit(event){
            const body = this.state
            fetch("https://react--backend.herokuapp.com/user/login", {
                method:"POST",
                body: JSON.stringify(body),
                headers:{
                    "Content-Type":"application/json"
                }
            }).then(res=>{
                if(res.status===200){
                    this.props.history.push("/user/me")
                }
            })
            event.preventDefault()
        }


    render(){
        return(
            <div className="form">
                <form method="post" onSubmit={this.handleSubmit}>
                <label htmlFor="email">email </label>
                <input onChange={this.onInputChange} placeholder="email" type="text" id="email" name="email"></input>
                <label htmlFor="pass">password </label>
                <input onChange={this.onInputChange} id="pass" placeholder="password" type="password" name="password"></input>
                <br/>
                <input type="submit"></input>
                <button> <a href="/user/register">Register</a> </button>
            </form>
            </div>
            
        )
    }
    
}
