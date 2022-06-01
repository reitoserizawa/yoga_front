import React, {useState} from 'react';

function Form ({instructors}) {

    // const [formData, setFormData] = useState({yoga_type:  "", intensity: "", schedule_date: "", schedule_time: ""})
    const [yogaType, setYogaType] = useState("")
    const [intensity, setIntensity] = useState("")
    const [scheduleDate, setScheduleDate] = useState ("")
    const [timeStart, setTimeStart] = useState("")
    const [instructor, setInstructor] = useState()
    const [length, setLength] = useState("")

    // function handleChange (e) {
    //     let name = e.target.name
    //     let value = e.target.value

    //     setFormData({
    //         ...formData,
    //         [name]: value,
    //         schedule_time: timeStart + "-" + timeEnd
    //     })

    // }

    function handleLength (e) {
        setLength(e.target.value)
    }

    function handleChangeType (e) {
        setYogaType(e.target.value)
    }

    function handleChangeIntensity (e) {
        setIntensity(e.target.value)
    }

    function handleChangeDate (e) {
        setScheduleDate(e.target.value)
    }

    function handleChaneOne (e) {
        setTimeStart(e.target.value)
    }

    function handleInstructor (e) {
        setInstructor(e.target.value)
    }

    function handleSubmit (e) {
        e.preventDefault()

        fetch ("http://localhost:9292/classes", {
            method: "POST",
            headers: {"Content-Type": "application/json",
                'Accept': 'application/json'
                },
            body: JSON.stringify({
                yoga_type: yogaType,
                intensity: intensity,
                schedule_date: scheduleDate,
                schedule_start_time: timeStart,
                class_length: length,
                instructor_id: parseInt(instructor)
            })
        })
        .then(r => r.json())
        .then(data => console.log(data))

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
                        <input value={yogaType} onChange={handleChangeType} className="form-control" type="text" name="yoga_type" placeholder="ex. Vinyasa Yoga"/>
                    </div>

                </div>

                <hr />

                <div className="row justify-content-center" style={{padding:"15px"}}>

                    <label className="col-sm-1 col-form-label" for="name">Intensity</label>

                    <div className="col-sm-5">
                        <select value={intensity} onChange={handleChangeIntensity} className="form-control" name="intensity">
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
                        <input value={scheduleDate} onChange={handleChangeDate} placeholder="Select date" name="schedule_date" type="date" className="form-control"/>
                    </div>

                </div>

                <hr />

                <div className="row justify-content-center" style={{padding:"15px"}}>

                    <label className="col-sm-1 col-form-label" for="name">Start</label>

                    <div className="col-sm-2">
                        <input value={timeStart} onChange={handleChaneOne} type="time" id="example" className="form-control" min="7:00" max="21:00" step="60"/>
                    </div>

                    <label className="col-sm-1 col-form-label" for="name">Length</label>

                    <div className="col-sm-2">
                    <select value={length} onChange={handleLength} className="form-control" name="length">
                            <option value="45 minutes">45 min</option>
                            <option value="1 hour">1 hour</option>
                        </select>
                    </div>

                </div>

                <hr />

                <div className="row justify-content-center" style={{padding:"15px"}}>

                    <label className="col-sm-1 col-form-label" for="name">Instructor</label>

                    <div className="col-sm-5">
                        <select value={instructor} onChange={handleInstructor} className="form-control" name="instructor_id">
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