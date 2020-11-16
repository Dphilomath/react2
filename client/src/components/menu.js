import React, { Component } from "react"
import Desc from "./desc"
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

export default class Menu extends Component
{
    constructor(props){
        super(props)
        this.state={
            items:[]
        }
    }
    componentDidMount() {
        fetch("/api/items")
        .then(response => response.json())
        .then( responseJson=> {
          this.setState({ items : responseJson });
        }
      )}

      render(){
          
            const products = this.state.items.map((item) => {
                let path  = "/menu/" + item._id
                return(
                    
                    <div key={item._id}>
                        <figure style={{textAlign:"center"}}>
                            <Link to={path}>
                                <img src={item.imgurl} className="thumbnail" alt="my img"/>   
                            </Link>
                            <figcaption>{item.name}</figcaption>
                        </figure>
                  </div>
                )
            })

        return( 
            <Router>
                <Switch>
                    <Route exact path="/menu">
                        <div className="menu">
                        {products}
                        </div>
                    </Route>
                    <Route exact path="/menu/:id" component={Desc} />
                </Switch>
            </Router>           
        )
      }   

}
