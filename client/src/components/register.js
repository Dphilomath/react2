import { Component } from "react";

export default class Register extends Component{
    constructor(props){
        super(props)
        this.state={
            name:"name",
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
        // const user = 
         fetch("https://react--backend.herokuapp.com/user/register", {
            method:"POST",
            
            body: JSON.stringify(body),
            headers:{
                "Content-Type":"application/json"
            }
        }).then((data) => data.json()).then((data)=>{
            this.props.history.push("/user/me")
        }
          


        );
    // this.setState({
    //     isLoggedIn:loginStatus
    // })
    // console.log(this.state.isLoggedIn)
    event.preventDefault()

  }



    render(){
        
        return(

            // <div>
            //     <RegisterForm isLoggedIn={isLoggedIn} onSubmit={this.handleSubmit} onChange={this.onInputChange}/>
            // </div>
            <form className="form" onSubmit={this.handleSubmit}>
                <label htmlFor="name">Name</label>
                <input onChange={this.onInputChange} type="text" name="name" placeholder="name" required></input>
                <label htmlFor="email">E-mail</label>
                <input type="text" onChange={this.onInputChange} required name="email" placeholder="username"></input>
                <label>password</label>
                <input type="password" onChange={this.onInputChange} required name="password" placeholder="password"></input>
                <br/>
                <input type="submit"/>
        </form>
        )
    }  
}


// function RegisterForm(props){
//     // if(!props.isLoggedIn){
//         return(
//             <form className="form" onSubmit={props.onSubmit}>
//                         <label htmlFor="name">Name</label>
//                         <input onChange={props.onChange} type="text" name="name" placeholder="name" required></input>
//                         <label htmlFor="email">E-mail</label>
//                         <input type="text" onChange={props.onChange} required name="email" placeholder="username"></input>
//                         <label>password</label>
//                         <input type="password" onChange={props.onChange} required name="password" placeholder="password"></input>
//                         <br/>
//                         <input type="submit"/>
//                     </form>
//         )
//     }
//     // else{
//     //     return(
//     //         <BrowserRouter>
//     //             <Route exact path="/user/me" component={Success} />
//     //             <Redirect to="/user/me" />     
//     //         </BrowserRouter>
            
       
//     //     )
        
// //     }
    
// // }

// function Success() {
//     return(
//         <div>You can now post comments</div>
//     )
// }