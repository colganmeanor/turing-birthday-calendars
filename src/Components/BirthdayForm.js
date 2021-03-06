import React from 'react'
import './BirthdayForm.css'


class BirthdayForm extends React.Component {
    constructor(props){
        super(props)
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

        const data = {
            name: this.state.name,
            id: Date.now(),
            month: Number(this.state.month),
            day: Number(this.state.day),
        }

        return (
            <div className="birthday-form">
                <h2>Submit New Birthdays Here:</h2>
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
                <input type="submit" value="Add this Birthday" onClick={() => this.props.captureBirthday(data)}/>
            </div>
        )
    }


}


export default BirthdayForm