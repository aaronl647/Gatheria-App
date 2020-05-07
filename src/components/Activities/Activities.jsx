import React, { Component } from 'react'

export default class Activities extends Component {
    render() {
        return (
            <div>
                <h3>Suggest Activities</h3>
                <input
                type="text"
                className="form-control"
                placeholder="Entry 1"
                // value={this.state.email}
                name="entry_1"
                // onChange={this.handleChange}
              />
                              <input
                type="text"
                className="form-control"
                placeholder="Entry 2"
                // value={this.state.email}
                name="entry_2"
                // onChange={this.handleChange}
              />
                              <input
                type="text"
                className="form-control"
                placeholder="Entry 3"
                // value={this.state.email}
                name="entry_3"
                // onChange={this.handleChange}
              />
            </div>
        )
    }
}
