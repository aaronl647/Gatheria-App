import React, { useState } from "react";
// import './CreateData.css'
import Calendar from "react-calendar";
import { Link } from "react-router-dom";
import "react-calendar/dist/Calendar.css";
import TimePicker from "react-dropdown-timepicker";

const CreateData = (props) => {
  let [date, setDate] = useState(new Date());
  return (
    <div>
      <div className="col-md-4 time ">
        <h3>Select Your Availablity</h3>
        <Calendar onChange={(date) => setDate(date)} />
      </div>

      <div className="time">
        <div className="col-md-8">
          <h3>Select Earliest and Latest Available Times</h3>
          <table>
            <tr>
              <th>{date.toLocaleString()}</th>
            </tr>
            <tr>
              <td>
                <TimePicker />
              </td>
            </tr>
            <tr>
              <td>
                <TimePicker />
              </td>
            </tr>
          </table>
        </div>
      </div>

      <Link className="Create-cancel" to="/">
        <div className="button">Cancel</div>
      </Link>

      <Link className="Create-next" to="/create/activity">
        <div className="button">Next</div>
      </Link>
    </div>
  );
};

export default CreateData;

// class CreateData extends React.Component {
//   state = {
//     value: [],
//     selectedDate: new Date()
//   };

//   onClickDay = (date) => {
//     this.setState({ selectedDate: date });
//   }

//   render() {
//     return (
//       <div className="Calendar">
//         <h4>Choose Available Dates and Times</h4>
//         <div className="data">
//           <Calendar onClickDay={this.selectedDate}/>
//         </div>
//         <div className="data">{/* <p>{value}</p> */}</div>
//         <Link className="Create-cancel" to="/">
//           Cancel
//         </Link>
//         <Link to="/create/activity">Next</Link>
//       </div>
//     );
//   }
// }

// export default CreateData;

// <Link className="Create-next" to="/create/activity">
//         <div className="button">Next</div>
//       </Link>
