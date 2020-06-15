import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'
import '../App.css'

class LandingPage extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                            src="https://dentalogica-practice.co.uk/wp-content/uploads/2017/05/avatar-male-300x300.png"
                            alt="avatar"
                            className="avatar-img"
                        />
                        <div className="banner-text">
                            <h1>Full Stack Web Developer</h1>
                            <hr />
                            <p>HTML/CSS | React | C# | JavaScript | Node JS</p>
                            <div className="social-links">
                                <a href="https://google.com/" rel="noopener noreferrer" target="_blank" >
                                    <i className="fa fa-linkedin-square" area-hidden="true"></i>
                                </a>
                                <a href="https://google.com/" rel="noopener noreferrer" target="_blank" >
                                    <i className="fa fa-github-square" area-hidden="true"></i>
                                </a>
                                <a href="https://google.com/" rel="noopener noreferrer" target="_blank" >
                                    <i className="fa fa-youtube-square" area-hidden="true"></i>
                                </a>
                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default LandingPage
