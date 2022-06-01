import React, { useState, useEffect } from 'react';
import ClassScheduleItem from './ClassScheduleItem';

function ClassSchedule ({instructors}) {
    const [yogaClasses, setYogaClasses] = useState([])
    const [students, setStudents] = useState([])
    
    //Grab all the yoga classes
    useEffect(() => { 
        fetch ('http://localhost:9292/classes')
        .then(res => res.json())
        .then(data => setYogaClasses(data))
    }, [])

    //Grab all students
    useEffect(() => { 
        fetch ('http://localhost:9292/students')
        .then(res => res.json())
        .then(data => setStudents(data))
    }, [])

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

    return ( 
        <div> 
            {yogaClasses.map(yogaClass => {
                return <ClassScheduleItem 
                key={yogaClass.id} 
                yogaClass={yogaClass} 
                instructor={instructors.find(instructor => {return yogaClass.instructor_id === instructor.id})}
                student={students.find(student => {return yogaClass.student_id === student.id} )} 
                handleDelete={handleDelete}/>
                })}
        </div>
    )
}

export default ClassSchedule