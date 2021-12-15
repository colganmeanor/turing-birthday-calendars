import './App.css';
import BirthdayContainer from '../BirthdayContainer';
import { months } from '../../months_data';

function App() {

  return (
    <div className="App">
      <h1>Birthdays</h1>
      <div className='bday-form'>

      </div>
      <div className='bday-container'>
        <BirthdayContainer />
      </div>
    </div>
  );
}

export default App;


// psuedocode for iteration 1:

// Get all existing birthdays on page load and display them on the DOM
// each birthday needs to appear in the correct month. 

// need to create birthday container component - DONE
// need to fill out birthday container component as a functional component
// that renders a box on the DOM for each month represented in the months_data file

