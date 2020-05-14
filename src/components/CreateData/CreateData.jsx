import React, { Component } from "react";
import "./CreateData.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import TimePicker from "react-dropdown-timepicker";
import { Link } from 'react-router-dom'

class CreateData extends Component {
  state = {
    invalidForm: true,
    formData: {
      date: "",
      earliestTime: "",
      latesetTime: "",
    },
  };

  formRef = React.createRef();


  handleSubmit = (e) => {
    console.log("hello");
    e.preventDefault();
    this.props.handleAddDate(this.state.formData);
  };

  handleChange = (e) => {
    const formData = {
      ...this.state.formData,
    };
    this.setState({
      formData,
    });
  };

  render() {
    return (
      <div className="container">
        <form
          ref={this.formRef}
          autoComplete="off"
          onSubmit={this.handleSubmit}
        >
          <div className="calendar">
            <h3>Select Your Availablity</h3>
            <Calendar
              date="date"
              value={this.state.formData.date}
              onChange={this.handleChange}
            />
          </div>

          <div className="time">
            <h3>Select Earliest and Latest Available Times</h3>
            <table>
              <tr>
                <th>{this.state.date}</th>
              </tr>
              <td>
                <TimePicker
                  earliestTime="earliestTime"
                  value={this.state.formData.earliestTime}
                  onChange={this.handleChange}
                  required
                />
              </td>
              <td>
                <TimePicker
                  latestTime="latestTime"
                  value={this.state.formData.latestTime}
                  onChange={this.handleChange}
                />
              </td>
            </table>
          </div>
          <div className="buttons">
            <button className="Create-cancel">
              <Link to="/home">
              <div className="button">Cancel</div>
              </Link>
            </button>
            <button
              type="submit"
              className="Create-next"
            >
              <Link to="/create/activity">
              <div className="button">Next</div>
              </Link>
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateData;
