import React from 'react'
import './BirthdayContainer.css'

function BirthdayContainer({ months, birthdays }){
    
    const calendar = months.map((month) => {
        
        const foundBirthdays = birthdays.filter((birthday) => {
            return birthday.month === month.id
        })

       const monthsBirthdays = foundBirthdays.map((birthday) => {
            return (
            <div key={birthday.id}>
                <p>{birthday.name}</p>
                <p>{birthday.month} / {birthday.day}</p>
            </div>    
            )
        })

        return(
        <div className = "calendar-month" id={month.name} key={month.id}>
            <h3>{month.name}</h3>
            {monthsBirthdays}
        </div>
        )
    })

  // how to get the birthday data rendered inside it's relevant month div element??
  // we are already calling .map on months to return div elements specific to each month. 
    
    return (
    <div className="calendar-display">
        {calendar}
    </div>
    )
}

export default BirthdayContainer