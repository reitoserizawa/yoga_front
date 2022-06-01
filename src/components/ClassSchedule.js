import React, { useState, useEffect } from 'react';
import ClassScheduleItem from './ClassScheduleItem';

function ClassSchedule ({instructors}) {
    const [yogaClasses, setYogaClasses] = useState([])
    
    //Grab all the yoga classes
    useEffect(() => { 
        fetch ('http://localhost:9292/classes')
        .then(res => res.json())
        .then(data => setYogaClasses(data))
    }, [])
    
    return ( 
        <div> 
            {yogaClasses.map(yogaClass => {
                return <ClassScheduleItem key={yogaClass.id} yogaClass={yogaClass} instructor={instructors.find(instructor => {return yogaClass.instructor_id == instructor.id})}/>
                })}
        </div>
    )
}

export default ClassSchedule