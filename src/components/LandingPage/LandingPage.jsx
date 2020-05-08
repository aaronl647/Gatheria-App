import React, { Component } from 'react'
import './LandingPage.css'
import photo from "./image-landing-page.jpg"
export default class LandingPage extends Component {
    render() {
        return (
            <div>
                <h1>Gatheria</h1>
                <div className="paragraph">
                    <h3>What is Gatheria?</h3>
                    <p>
                        Have you ever tried to plan an activity with a group of people, only to find out that everyone has conflicting schedules? Then after talking about the idea of meeting up, you and your group of friends never actually end up making any plans, and the idea gets pushed back to another several weeks or even months.
                    </p>
                    
                </div>
                <img id="photo" src={photo}/>
            </div>
        )
    }
}
