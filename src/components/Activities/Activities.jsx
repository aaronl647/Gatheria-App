import React, { Component } from "react";
import "./Activities.css";
import { Link } from "react-router-dom";

export default class Activities extends Component {
  state = {
    invalidForm: true,
    formData: {
      activity: [],
    },
  };
  formRef = React.createRef();

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.handleAddActivity(this.state.formData);
  };

  handleChange = (e) => {
    const formData = { ...this.state.formData };
  };
  render() {
    return (
      <div>
        <h3>Suggest Activities</h3>
        <form>
          <input
            type="text"
            className="form-control"
            placeholder="Entry 1"
            value={this.state.activity}
            name="entry_1"
            // onChange={this.handleChange}
          />
          <input
            type="text"
            className="form-control"
            placeholder="Entry 2"
            value={this.state.activity}
            name="entry_2"
            // onChange={this.handleChange}
          />
          <input
            type="text"
            className="form-control"
            placeholder="Entry 3"
            value={this.state.activity}
            name="entry_3"
            // onChange={this.handleChange}
          />
          <button type="submit" className="Activity-submit">
            <Link to="/create/complete">
              <div className="button">Submit!</div>
            </Link>
          </button>
        </form>
      </div>
    );
  }
}
