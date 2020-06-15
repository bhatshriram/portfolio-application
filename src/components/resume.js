import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'
import Education from './education'
import Experience from './experience'
import Skills from './skills'

class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{ textAlign: 'center' }}>
                            <img src="https://www.shareicon.net/data/128x128/2016/05/24/770124_man_512x512.png"
                                alt="avatar"
                                style={{ height: '200px' }}>
                            </img>
                        </div>
                        <h2 style={{ paddingTop: '2em' }}>Shriram Bhat</h2>
                        <h4 style={{ color: 'grey' }}>Full Stack Developer</h4>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }}></hr>
                        <p >
                            Welcome to my Free IELTS PREPARATION WEBSITE: IELTS tips, model answers, topics, practice lessons, and videos. My name is Liz and I am the author
                        </p>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }}></hr>
                        <h5>Address:</h5>
                        <p>1 Hacker rank, railway road</p>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }}></hr>
                        <h5>Phone</h5>
                        <p>+91 987654321</p>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }}></hr>
                        <h5>Email</h5>
                        <p>iamme@gmail.com</p>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }}></hr>
                        <h5>Websites</h5>
                        <p>mywebsite@web.com</p>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }}></hr>
                    </Cell>

                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>
                        <Education startYear='2012' endYear='2016' schoolName="Dummy College of Engineering"
                            schoolDescription="Welcome to my Free IELTS PREPARATION WEBSITE: IELTS tips, model answers, topics, practice lessons, and videos. My name is Liz and I am the author " />

                        <Education startYear='2016' endYear='2017' schoolName="Second University"
                            schoolDescription="Welcome to my Free IELTS PREPARATION WEBSITE: IELTS tips, model answers, topics, practice lessons, and videos. My name is Liz and I am the author " />

                        <hr style={{ borderTop: '3px solid #e22947s' }}></hr>

                        <h2>Experience</h2>
                        <Experience  startYear='2017' endYear='2019'
                        companyName='IBM' details='Develop your IELTS speaking techniques, learn about topics, how to answer questions and useful vocabulary for speaking part 1, part 2 and part 3 of the speaking test. ... IELTS Writing Task 1 Play all. Improve and develop your IELTS Writing Task 1 for line graphs, bar charts, tables ...
                         '/>
                         
                         <Experience  startYear='2019' endYear='Till Date'
                        companyName='HCL' details='Develop your IELTS speaking techniques, learn about topics, how to answer questions and useful vocabulary for speaking part 1, part 2 and part 3 of the speaking test. ... IELTS Writing Task 1 Play all. Improve and develop your IELTS Writing Task 1 for line graphs, bar charts, tables ...
                         '/>

                        <hr style={{ borderTop: '3px solid #e22947s' }}></hr>
                        <h2>Skills</h2>
                        <Skills  skill='JavaScript' progress='90'/>
                        <Skills  skill='C#' progress='90'/>
                        <Skills  skill='React' progress='60'/>
                        <Skills  skill='Node JS' progress='40'/>


                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default Resume
