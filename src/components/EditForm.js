import React, {useState } from 'react';
import { useHistory } from "react-router-dom"

function EditForm({instructors, editClass, yogaClasses, setYogaClasses}) {

  const history = useHistory()
  const [editForm, setEditForm] = useState({
      yoga_type: editClass.yoga_type, 
      intensity: editClass.intensity, 
      schedule_date: editClass.schedule_date, 
      schedule_start_time: editClass.schedule_start_time, 
      instructor_id: parseInt(editClass.instructor_id), 
      student_id: editClass.student_id,
      class_length: editClass.class_length
  })

  //Handle form changes
  function handleChange(e) { 
      const {name, value} = e.target
      setEditForm((prevForm => ({...prevForm, [name]: value})))
    }

  //Patch request to update yoga class information
  function handleEditSubmit (yogaClassToEdit, e) {
      e.preventDefault()
      fetch (`http://localhost:9292/classes/${yogaClassToEdit.id}`, {
          method: "PATCH",
          headers: {
              "Content-Type": "application/json", 
              "Accept": "application/json"
              },
          body: JSON.stringify(editForm)
      })
      .then(r => r.json())
      .then(updatedClass => { 
        const modifiedClasses = yogaClasses.map(yogaClass => { 
          return yogaClass.id === updatedClass.id ? updatedClass : yogaClass
        })
        setYogaClasses(modifiedClasses)
      })
      setEditForm({yoga_type:  "", 
          intensity: "", 
          schedule_date: "", 
          schedule_start_time: "", 
          instructor: "", 
          class_length: "", 
          student_id: 1
          })
      history.push('/schedule')
  }

  let eachInstructor = instructors.map(instructor =>
      <option key={instructor.id} value={instructor.id}>{instructor.first_name + " " + instructor.last_name}</option>
      )
  
  return (
      <div className="main">
          <h1 style={{padding:"15px"}}>Edit Yoga Class</h1>
          <hr />
          <form className="form" id='form' onSubmit={(e)=> handleEditSubmit(editClass, e)}>
              <div className="row justify-content-center" style={{padding:"15px"}}>
                  <label className="col-sm-1 col-form-label" for="name">Type</label>
                  <div className="col-sm-5">
                      <input 
                      value={editForm.yoga_type} 
                      onChange={handleChange} 
                      className="form-control" 
                      type="text" 
                      name="yoga_type" 
                      placeholder="ex. Vinyasa Yoga"/>
                  </div>
              </div>
              <hr />
              <div className="row justify-content-center" style={{padding:"15px"}}>
                  <label className="col-sm-1 col-form-label" for="name">Intensity</label>
                  <div className="col-sm-5">
                      <select 
                      value={editForm.intensity} 
                      onChange={handleChange} 
                      className="form-control" 
                      name="intensity">
                          <option value="C2">C2</option>
                          <option value="C1">C1</option>
                          <option value="B2">B2</option>
                          <option value="B1">B1</option>
                          <option value="A2">A2</option>
                          <option value="A1">A1</option>
                      </select>
                  </div>
              </div>
              <hr />
              <div className="row justify-content-center" style={{padding:"15px"}}>
                  <label className="col-sm-1 col-form-label" for="name">Date</label>
                  <div className="col-sm-5">
                      <input 
                      value={editForm.schedule_date} 
                      onChange={handleChange} 
                      placeholder="Select date" 
                      name="schedule_date"
                      type="date" 
                      className="form-control"/>
                  </div>
              </div>
              <hr />
              <div className="row justify-content-center" style={{padding:"15px"}}>
                  <label className="col-sm-1 col-form-label" for="name">Start</label>
                  <div className="col-sm-2">
                      <input 
                      value={editForm.schedule_start_time} 
                      onChange={handleChange} 
                      type="time" 
                      id="example" 
                      name="schedule_start_time"
                      className="form-control" 
                      min="7:00" 
                      max="21:00" 
                      step="60"/>
                  </div>
                  <label className="col-sm-1 col-form-label" for="name">Length</label>
                  <div className="col-sm-2">
                  <select 
                  value={editForm.class_length} 
                  onChange={handleChange} 
                  className="form-control" 
                  name="length">
                          <option value="45 minutes">45 min</option>
                          <option value="1 hour">1 hour</option>
                      </select>
                  </div>
              </div>
              <hr />
              <div className="row justify-content-center" style={{padding:"15px"}}>
                  <label className="col-sm-1 col-form-label" for="name">Instructor</label>
                  <div className="col-sm-5">
                      <select 
                      value={editForm.instructor} 
                      onChange={handleChange} 
                      className="form-control" 
                      name="instructor_id">
                      {eachInstructor}
                      </select>
                  </div>
              </div>
              <hr />
              <button type="submit" className="btn btn-outline-primary">Submit changes</button>
          </form>
      </div>
  )
}

export default EditForm;