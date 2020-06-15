import React, { Component } from 'react'
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl'
import '../App.css'

class Contact extends Component {
    render() {
        return (
            <div className='contact-body'>
                <Grid className='contact-grid'>
                    <Cell col={6}>
                        <h2>Shriram Bhat</h2>
                        <img src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png"
                            alt="avatar"
                            style={{ height: '250px' }} />
                        <p style={{ width: '75%', margin: 'auto', paddingTop: '1em' }}>Welcome to my Free IELTS PREPARATION WEBSITE: IELTS tips, model answers, topics, practice lessons, and videos. My name is Liz and I am the author </p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr></hr>
                        <div className="contact-list" style={{ textAlign: 'center' }}>
                            <List>
                                <ListItem>
                                    <ListItemContent style={{ fontFamily: 'Anton', fontSize: '30px' }}>
                                        <i className="fa fa-phone-square" aria-hidden="true"></i>
                                        +91 987654321
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{ fontFamily: 'Anton', fontSize: '30px' }}>
                                        <i className="fa fa-envelope" aria-hidden="true"></i>
                                        testingemail@gmail.com
                                    </ListItemContent>
                                </ListItem>
                                <ListItem>
                                    <ListItemContent style={{ fontFamily: 'Anton', fontSize: '30px' }}>
                                        <i className="fa fa-skype" aria-hidden="true"></i>
                                        Skype Id
                                    </ListItemContent>
                                </ListItem>
                            </List>
                        </div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Contact
