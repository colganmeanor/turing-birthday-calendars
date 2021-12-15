import React from 'react'
import './BirthdayContainer.css'

function BirthdayContainer({ months }){
    
    const calendar = months.map((month) => {
        return(
        <div className = "calendar-month">
            <h3>{month.name}</h3>
        </div>
        )
    })

    console.log(calendar)
    
    return (
    <div className="calendar-display">
        {calendar}
    </div>
    )
}

export default BirthdayContainer