import './App.css';
import Navbar from './components/Navbar';
import Login from "./components/Login"
import Aboutus from "./components/About";
import Signup from "./components/Signup";
import Home from "./components/Home";
import Footer from "./components/Footer";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import {Route,BrowserRouter, Switch, Redirect} from "react-router-dom";



function App(props) {
  return (
    <div>
      <BrowserRouter>
      <Navbar />
  
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/aboutus" component={Aboutus} />
            <Route  exact path="/signup" component={Signup} />
            <Redirect to="/"/>
      
        
        
            </BrowserRouter>
      
    </div>
  );
}

export default App;
