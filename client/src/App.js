import React from "react";
import Navbar from "./components/Navbar";
import Main from './components/Questions/Main';
import Quizzes from "./pages/Quizzes.js"
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import './styles/quiztake.css';


function App() {
  return( 
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path = "/homepage" component = {Quizzes} />

        </Switch>
      </div>
    </Router>
  )
};
export default App;
