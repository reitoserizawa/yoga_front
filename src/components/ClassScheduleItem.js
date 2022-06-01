import React from 'react';

function ClassScheduleItem ({yogaClass, instructor}) {
    const { class_length, intensity, schedule_date, schedule_start_time, yoga_type } = yogaClass
    const { first_name, last_name, studio_location} = instructor

    return (
        <div class= "yoga-schedule"> 
                <div class="row">
                    <h4>{schedule_date}</h4>
                </div>
                <div class="column">
                    <div><strong>Instructor: </strong>{first_name} {last_name}</div>
                    <div>
                        <strong>Class start: </strong>{schedule_start_time}, {class_length}</div>
                    <div>
                        <strong>Intensity:</strong> {intensity}
                    </div>
                    
                </div>
        </div>
    )
}

export default ClassScheduleItem