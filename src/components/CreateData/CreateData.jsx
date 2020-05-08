import React, { Component } from "react";
import "./CreateData.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import TimePicker from "react-dropdown-timepicker";

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
              <thead>
                <tr>
                  <td>{this.state.formData.date}</td>
                </tr>
              </thead>
              <tbody>
                <td>
                  <TimePicker
                    earliestTime="earliestTime"
                    value={this.state.formData.earliestTime}
                    onChange={this.handleChange}
                    required
                  />
                </td>
              </tbody>
              <tbody>
                <td>
                  <TimePicker
                    latestTime="latestTime"
                    value={this.state.formData.latestTime}
                    onChange={this.handleChange}
                  />
                </td>
              </tbody>
            </table>
          </div>
          <div className="buttons">
            <button className="Create-cancel">
              <div className="button">Cancel</div>
            </button>
            <button type="submit" className="Create-next">
              <div className="button">Next</div>
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateData;
