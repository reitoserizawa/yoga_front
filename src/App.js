import React, { useEffect, useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar'
import Home from './components/Home'
import Profile from './components/Profile'
import Instructors from './components/Instructors'
import ClassSchedule from './components/ClassSchedule'
import Form from './components/Form'
import EditForm from './components/EditForm';

function App() {
  const [yogaClasses, setYogaClasses] = useState([])
  const [instructors, setInstructors] = useState([])
  const [editClass, setEditClass] = useState([])
  const history = useHistory()

  //Grabs instructors
  useEffect(() => { 
    fetch ('http://localhost:9292/instructors')
    .then(res => res.json())
    .then(data => setInstructors(data))
  }, [])

   //Grab all the yoga classes
   useEffect(() => { 
    fetch ('http://localhost:9292/classes')
    .then(res => res.json())
    .then(data => setYogaClasses(data))
}, [])

  //Handle deleting a specific yoga class
  const handleDelete = (yogaClassToDelete) => { 
    fetch(`http://localhost:9292/classes/${yogaClassToDelete.id}`, { 
        method: 'DELETE'})
    .then(res => res.json())
    .then(() => { 
        const modifiedYogaClasses = yogaClasses.filter(yogaClass => { 
            return yogaClass.id !== yogaClassToDelete.id
        })
        setYogaClasses(modifiedYogaClasses)
    })
  }

  //Handle change class button click
  const handleChange = (yogaClassToChange) => { 
    history.push('/edit')
    console.log(yogaClassToChange.schedule_date.strftime("%Y/%d/%m"))
    setEditClass(yogaClassToChange)
  }

  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/schedule'>
          <ClassSchedule instructors={instructors} yogaClasses={yogaClasses} handleDelete={handleDelete} handleChange={handleChange}/>
        </Route>
        <Route exact path='/profile'>
          <Profile />
        </Route>
        <Route exact path='/instructors'>
          <Instructors instructors={instructors}/>
        </Route>
        <Route exact path='/form'>
          <Form instructors={instructors} yogaClasses={yogaClasses} setYogaClasses={setYogaClasses}/>
        </Route>
        <Route exact path='/edit'>
          <EditForm editClass={editClass} instructors={instructors} yogaClasses={yogaClasses} setYogaClasses={setYogaClasses}/>
        </Route>
      </Switch>
    </div>
  );
}


export default App;
