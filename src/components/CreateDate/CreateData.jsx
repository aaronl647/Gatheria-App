import React from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

class CreateData extends React.Component {
  state = {
    date: new Date(),
  };

  onChange = (date) => this.setState({ date });

  render() {
    return (
      <div className="Calendar">
        <h4>Choose Available Dates and Times</h4>
        <div className="data">
          <Calendar
            onChange={this.onChange}
            value={this.state.date}
          />
          {console.log(this.state.date)}
        </div>
        <div className="data">
        <p>{this.state.date.toString()}</p>
        </div>
        <button>Next</button>
      </div>
    );
  }
}

export default CreateData;
