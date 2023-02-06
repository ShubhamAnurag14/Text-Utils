
import About from './About';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import { useState } from 'react';
import Alert from './components/Alert'

function App() {

  const [mode, setmode] = useState('light')
  const [alert, setalert] = useState(null)

  const showAlert = (message , type) =>
  {
    setalert({
      msg:message,
      type : type
    })
    setTimeout(() => {
      setalert(null)
    }, 3000);
  }



  const toggleMode = () =>
  {
    if(mode=== 'light'){
      setmode('dark');
      document.body.style.background='#022344';
      showAlert("alert has been activated","SUCCESS");
    }
    else{
      setmode('light');
      document.body.style.background='white';
      showAlert("light mode has been activated","SUCCESS");
    }
  }

  return (
  <>
    
    
  <Navbar title = "My text box " mode = {mode} toggleMode = {toggleMode}></Navbar>
 <Alert alert = {alert}></Alert>
  <div className = "container">
    {/* <ReactCalendar></ReactCalendar> */}
    <Textform showAlert={showAlert} title = "enter the text to analyze" mode = {mode}> </Textform>
  {/* <About></About> */}
  </div>
    
  </>

  );
}

export default App;

// import './App.css';

// import React, { Component } from 'react';
// import NavBar from './components/Navbar';
// import News from './components/News';

// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
// } from "react-router-dom";

// export default class App extends Component {

//   render() {
//     return (
//       <div>
//         <Router>
//         <NavBar/> 
//         <Switch>
//           <Route exact path="/"><News key="general" pageSize={5} country="in" category="general"/></Route> 
//           <Route exact path="/business"><News key="business" pageSize={5} country="in" category="business"/></Route> 
//           <Route exact path="/entertainment"><News key="entertainment" pageSize={5} country="in" category="entertainment"/></Route> 
//           {/* <Route exact path="/general"><News key="general" pageSize={5} country="in" category="general"/></Route>  */}
//           {/* <Route exact path="/health"><News key="health" pageSize={5} country="in" category="health"/></Route> 
//           <Route exact path="/science"><News key="science" pageSize={5} country="in" category="science"/></Route> 
//           <Route exact path="/sports"><News key="sports" pageSize={5} country="in" category="sports"/></Route> 
//           <Route exact path="/technology"><News key="technology" pageSize={5} country="in" category="technology"/></Route>  */}
//         </Switch>
//         </Router>
//       </div>
//     )
//   }
// }
