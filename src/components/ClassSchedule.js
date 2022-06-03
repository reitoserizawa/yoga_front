import React, { useState, useEffect } from 'react';
import { Parallax } from "react-parallax";
import ClassScheduleItem from './ClassScheduleItem';

function ClassSchedule ({instructors, yogaClasses, handleDelete, handleChange}) {

    const [students, setStudents] = useState([])

    //Grab all students
    useEffect(() => { 
        fetch ('http://localhost:9292/students')
        .then(r => r.json())
        .then(data => setStudents(data))
    }, [])

    return ( 
        <div> 
                    <Parallax
        blur={{ min: -30, max: 30 }}
        bgImage="https://images.squarespace-cdn.com/content/v1/5cc20ee3da50d34de10e1549/1562688625746-DUGPEYKOLHQ7KBUXV2WR/Orange_Banner.jpg?format=1500w"
        bgImageAlt=""
        // strength={-200}
        className="parallax"
        >
                    <div class="position-relative">
            <h1 className="hero_title">Schedule</h1>
        </div>     
        </Parallax>
        <hr />
            {yogaClasses.map(yogaClass => {
                return <ClassScheduleItem 
                key={yogaClass.id} 
                yogaClass={yogaClass} 
                yoga_instructor={instructors.find(instructor => {return yogaClass.instructor_id === instructor.id})}
                student={students.find(student => {return yogaClass.student_id === student.id} )} 
                handleDelete={handleDelete}
                handleChange = {handleChange}/>
                })}
        </div>
    )
}

export default ClassSchedule