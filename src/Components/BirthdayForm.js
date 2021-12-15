import React from 'react'
import './BirthdayForm.css'


class BirthdayForm extends React.Component {
    constructor(){
        super()
        this.state = {
            name: '',
            month: 0,
            day: 0,
        }
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value })
    }


    render = () => {
        return (
            <div>
            <label>
                Name:
                <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
            </label>
            <label>
                Month:
                <input type="number" name="month" value={this.state.month} onChange={this.handleChange}/>
            </label>
            <label>
                Day:
                <input type="number" name="day" value={this.state.day} onChange={this.handleChange}/>
            </label>
            </div>
        )
    }


}


export default BirthdayForm