import React,{useState} from 'react'
import { BrowserRouter as Router,Route,Link,Switch ,withRouter} from 'react-router-dom'
import About from './components/layout/About';
import Contact from './components/layout/Contact';
import Home from './components/Home';
import Navbar from './components/Navbar';
import ViewUser from './components/ViewUser';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
import Login from './components/Login';
import Register from './components/Register';
import FrontPage from './components/FrontPage';
import DeleteUser from './components/DeleteUser';


export default function App() {
  const [mode, Setmode] = useState('light')
  const toggleMode = () => {
    if (mode === 'light') {
        Setmode('dark');
        document.body.style.backgroundColor = '#042743';
   
    }
    else {
        Setmode('light');
        document.body.style.backgroundColor = 'white';
 
    }
}

  return (
      
      <Router>
         <Navbar mode={mode} toggleMode={toggleMode} />
        <Switch>
        <Route exact path="/" render={(props) => (
     <FrontPage {...props} mode={mode} />
   )}/>
        <Route exact path="/login" render={(props) => (
     <Login {...props} mode={mode} />
   )}/>
          <Route exact path="/register" render={(props) => (
     <Register {...props} mode={mode} />
   )}/>

<Route exact path="/about" component={About }/>
          <Route exact path="/contact" component={Contact}/>
        <Route exact path="/:id" render={(props) => (
     <Home {...props} mode={mode} />
   )}/>
          <Route exact path="/add/:id" render={(props) => (
     <AddUser {...props} mode={mode} /> )} />
          <Route exact path="/edit/:id/:index"  render={(props) => (
     <EditUser {...props} mode={mode} />
   )}/>
          <Route exact path="/view/:id/:index" render={(props) => (
     <ViewUser {...props} mode={mode} />
   )}/>
          <Route exact path="/delete/:id/:index" render={(props) => (
     <DeleteUser {...props} mode={mode} />
   )}/>
          
        
        
        
        </Switch>
      </Router>
  )
}
