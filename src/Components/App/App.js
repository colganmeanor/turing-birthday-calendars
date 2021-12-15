import './App.css';
import BirthdayContainer from '../BirthdayContainer';
import { months } from '../../months_data';
import { fetchBirthdays, postBirthdays, deleteBirthdays } from '../ApiCalls';
import React from 'react';
import BirthdayForm from '../BirthdayForm';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      birthdays: []
    }
  }

  componentDidMount = () => {
    fetchBirthdays()
    .then((data) => this.setState({birthdays: data}))
  }

  captureBirthday = (data) => {
    postBirthdays(data)
    this.setState(prevState => ({
      birthdays: [...prevState.birthdays, data]
    }))
  }

  componentDidUpdate = () => {
    fetchBirthdays()
    .then((data) => this.setState({birthdays: data}))
  }

  render =() => {
    return (
        <div className="App">
          <h1>Birthdays</h1>
          <div className='bday-form'>
            <BirthdayForm captureBirthday={this.captureBirthday} />
          </div>
          <div className='bday-container'>
            <BirthdayContainer months={months} birthdays={this.state.birthdays} deleteBirthdays={deleteBirthdays} />
          </div>
        </div>
      );
  } 
}

export default App;


// psuedocode for iteration 1:

// Get all existing birthdays on page load and display them on the DOM
// each birthday needs to appear in the correct month. 

// need to create birthday container component - DONE
// need to fill out birthday container component as a functional component
// that renders a box on the DOM for each month represented in the months_data file

