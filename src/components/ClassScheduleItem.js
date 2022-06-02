import React, {useState} from 'react';

function ClassScheduleItem ({yogaClass, yoga_instructor, student, handleDelete, handleChange}) {
    const [showDiv, setShowDiv] = useState(false)
    const { class_length, intensity, schedule_date, schedule_start_time} = yogaClass

    const showStudentInformation = () => { 
        return ( 
            <div style={{align: 'left'}}> 
                <strong>Student name: </strong> {student.first_name} {student.last_name}
                <br></br>
                <strong>Bio: </strong> {student.bio}
                <br></br>
                <strong>Phone number: </strong>{student.phone_number}
                <br></br>
                <strong>Email: </strong> {student.email}
                <br></br>
                <strong>Currently enrolled in teacher training?: </strong> {student.in_training ? 'Yes!' : 'No'}
                <br></br>
            </div>
        )
    }

    return (
        <div class= "yoga-schedule"> 
            <div class="row">
                <h4>{schedule_date}</h4>
                <button type="button" class= 'button' onClick={() => handleDelete(yogaClass)}>Cancel Class</button>
                <button type="button" class= 'button' onClick={() => handleChange(yogaClass)}>Change Class</button>
            </div>
            <div class="column1">
                <div class="item">
                    <strong>Instructor: </strong>{yoga_instructor.first_name} {yoga_instructor.last_name}
                </div>
                <div class="item">
                    <strong>Class start: </strong>{schedule_start_time}, {class_length}
                </div>
                <div class="item">
                    <strong>Intensity:</strong> {intensity}
                </div>
                {}
            </div>
            <div class="column2">
                <button type="button" class="btn btn-outline-primary" onClick={() => setShowDiv(!showDiv)}>{showDiv ? 'Hide registered yogi' : 'Show registered yogi'}</button>
            </div>
            {showDiv ? showStudentInformation() : null}
        </div>
    )
}

export default ClassScheduleItem