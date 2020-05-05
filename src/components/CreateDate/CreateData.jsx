import React, { useState } from "react";
import Calendar from "react-calendar";
import { Link } from "react-router-dom";
import "react-calendar/dist/Calendar.css";

const CreateData = (props) => {
let [date, setDate] = useState(new Date())
  return (
    <div className="Create">
         <h3>Select Your Availablity</h3>
      <div className="datetime">
        <Calendar
        onChange={date => setDate(date)}
        />
        <h3>Select Earliest and Latest Available Times</h3>
        <div className="time">
          <tr>
            <th>{date.toLocaleString()}</th>
          </tr>
          <tr>
            <td>hello</td>
          </tr>
          <tr>
          <td>Hello again</td>
          </tr>
      </div>
      <div className="datetime">
        
        </div>
      </div>
      <Link className="Create-cancel" to="/">
        Cancel
      </Link>
      <Link to="/create/activity">Next</Link>
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
