import './App.css';
import { Component } from "react"
import Header from "./components/header"
import Footer from "./components/footer"
import About from "./components/About"
import Contact from "./components/contact"
import Login from "./components/login"
import Menu from "./components/menu"
import Register from "./components/register"
import User from "./components/user"
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      items : []
    }
  }
  
  
  render() {
    return(
      <div>
      <Header />
      <Router>
        <Switch>
            <Route path="/about">
                <About />
            </Route>
            <Route path="/menu">
                <Menu />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route exact path="/">
                <main>
                  <h1>you are on homepage!</h1>
                   < h1>Check out our menu</h1>
                  </main>
            </Route>
            <Route exact path="/user/login" component={Login} />
            <Route exact path="/user/register" component={Register} />
            <Route exact path="/user/me">
              <User />
            </Route>
        </Switch>
    </Router>
    <Footer />  
    </div>
    )
    }
    
}


export default App;
