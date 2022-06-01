import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar'
import Profile from './components/Profile'
import Instructors from './components/Instructors'
import ClassSchedule from './components/ClassSchedule'
import Form from './components/Form'

function App() {
  const [instructors, setInstructors] = useState([])

  //Grabs instructors
  useEffect(() => { 
    fetch ('http://localhost:9292/instructors')
    .then(res => res.json())
    .then(data => setInstructors(data))
  }, [])

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path='/'>
          <ClassSchedule instructors={instructors}/>
        </Route>
        <Route exact path='/profile'>
          <Profile />
        </Route>
        <Route exact path='/instructors'>
          <Instructors instructors={instructors}/>
        </Route>
        <Route exact path='/form'>
          <Form instructors={instructors}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
