import React, { useState, useEffect } from 'react';
import ClassScheduleItem from './ClassScheduleItem';

function ClassSchedule ({instructors, yogaClasses, handleDelete, handleChange}) {

    const [students, setStudents] = useState([])

    //Grab all students
    useEffect(() => { 
        fetch ('http://localhost:9292/students')
        .then(res => res.json())
        .then(data => setStudents(data))
    }, [])

    return ( 
        <div> 
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