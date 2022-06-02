import React, {useState} from 'react';
import { useHistory } from "react-router-dom"

function Form ({instructors, yogaClasses, setYogaClasses}) {
    const history = useHistory()
    const [form, setForm] = useState({
        yoga_type:  "", 
        intensity: "", 
        schedule_date: "", 
        schedule_start_time: "", 
        instructor_id: parseInt(""), 
        student_id: 1,
        class_length: ""
    })

    //Handle form changes
    function handleChange(e) { 
        const {name, value} = e.target
        setForm((prevForm => ({...prevForm, [name]: value})))
      }

    //Handle form submit
    function handleSubmit (e) {
        e.preventDefault()
        fetch ("http://localhost:9292/classes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
                },
            body: JSON.stringify(form)
        })
        .then(r => r.json())
        .then(data => setYogaClasses([...yogaClasses, data]))
            setForm({yoga_type:  "", 
            intensity: "", 
            schedule_date: "", 
            schedule_start_time: "", 
            instructor: "", 
            class_length: "", 
            student_id: 1
            })
        history.push('/')
    }

    let eachInstructor = instructors.map(instructor =>
        <option value={instructor.id}>{instructor.first_name + " " + instructor.last_name}</option>
        )
    
    return (
        <div className="main">
            <h1 style={{padding:"15px"}}>New Class</h1>
            <hr />
            <form className="form" id='form' onSubmit={handleSubmit}>
                <div className="row justify-content-center" style={{padding:"15px"}}>
                    <label className="col-sm-1 col-form-label" for="name">Type</label>
                    <div className="col-sm-5">
                        <input value={form.yoga_type} onChange={handleChange} className="form-control" type="text" name="yoga_type" placeholder="ex. Vinyasa Yoga"/>
                    </div>
                </div>
                <hr />
                <div className="row justify-content-center" style={{padding:"15px"}}>
                    <label className="col-sm-1 col-form-label" for="name">Intensity</label>
                    <div className="col-sm-5">
                        <select value={form.intensity} onChange={handleChange} className="form-control" name="intensity">
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
                        <input value={form.schedule_date} onChange={handleChange} placeholder="Select date" name="schedule_date" type="date" className="form-control"/>
                    </div>
                </div>
                <hr />
                <div className="row justify-content-center" style={{padding:"15px"}}>
                    <label className="col-sm-1 col-form-label" for="name">Start</label>
                    <div className="col-sm-2">
                        <input value={form.schedule_start_time} onChange={handleChange} type="time" id="example" className="form-control" min="7:00" max="21:00" step="60"/>
                    </div>
                    <label className="col-sm-1 col-form-label" for="name">Length</label>
                    <div className="col-sm-2">
                    <select value={form.class_length} onChange={handleChange} className="form-control" name="length">
                            <option value="45 minutes">45 min</option>
                            <option value="1 hour">1 hour</option>
                        </select>
                    </div>
                </div>
                <hr />
                <div className="row justify-content-center" style={{padding:"15px"}}>
                    <label className="col-sm-1 col-form-label" for="name">Instructor</label>
                    <div className="col-sm-5">
                        <select value={form.instructor} onChange={handleChange} className="form-control" name="instructor_id">
                        {eachInstructor}
                        </select>
                    </div>
                </div>
                <hr />
                <button type="submit" className="btn btn-outline-primary">Submit</button>
            </form>
        </div>
    )
}

export default Form