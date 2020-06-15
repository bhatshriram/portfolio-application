import React, { Component } from 'react'
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl'

class Project extends Component {
    constructor(props) {
        super(props)

        this.state = {
            activeTab: 0
        }
    }

    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <div className="project-grid">
                    <Card shadow="5" style={{ minwidth: '450', margin: '10px' }}>
                        <CardTitle style={{
                            color: '#fff', height: '250px',
                            background: 'url(https://reactjs.org/logo-og.png) center/cover'
                        }}>Project 1 </CardTitle>
                        <CardText>
                            Welcome to my Free IELTS PREPARATION WEBSITE: IELTS tips, model answers, topics, practice lessons, and videos. My name is Liz and I am the author
                   </CardText>
                        <CardActions bordered>
                            <Button colored>GitHub</Button>
                            <Button colored>Description</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    <Card shadow="5" style={{ minwidth: '450', margin: '10px' }}>
                        <CardTitle style={{
                            color: '#fff', height: '250px',
                            background: 'url(https://reactjs.org/logo-og.png) center/cover'
                        }}>Project 2 </CardTitle>
                        <CardText>
                            Welcome to my Free IELTS PREPARATION WEBSITE: IELTS tips, model answers, topics, practice lessons, and videos. My name is Liz and I am the author
                   </CardText>
                        <CardActions>
                            <Button colored>GitHub</Button>
                            <Button colored>Description</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>

                    <Card shadow="5" style={{ minwidth: '450', margin: '10px' }}>
                        <CardTitle style={{
                            color: '#fff', height: '250px',
                            background: 'url(https://reactjs.org/logo-og.png) center/cover'
                        }}>Project 3 </CardTitle>
                        <CardText>
                            Welcome to my Free IELTS PREPARATION WEBSITE: IELTS tips, model answers, topics, practice lessons, and videos. My name is Liz and I am the author
                   </CardText>
                        <CardActions>
                            <Button colored>GitHub</Button>
                            <Button colored>Description</Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            )
        }
        else if (this.state.activeTab === 1) {
            return (
                <Card shadow="5" style={{ minwidth: '450', margin: 'auto' }}>
                    <CardTitle style={{
                        color: '#fff', height: '250px',
                        background: 'url(https://static.javatpoint.com/csharp/images/c-sharp.png) center/cover'
                    }}>Project 1</CardTitle>
                    <CardText>
                        Welcome to my Free IELTS PREPARATION WEBSITE: IELTS tips, model answers, topics, practice lessons, and videos. My name is Liz and I am the author
                   </CardText>
                    <CardActions>
                        <Button colored>GitHub</Button>
                        <Button colored>Description</Button>
                    </CardActions>
                    <CardMenu style={{ color: '#fff' }}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
            )
        }
        else {
            return (
                <Card shadow="5" style={{ minwidth: '450', margin: 'auto' }}>
                    <CardTitle style={{
                        color: '#fff', height: '250px',
                        background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png) center/cover'
                    }}>Project 1</CardTitle>
                    <CardText>
                        Welcome to my Free IELTS PREPARATION WEBSITE: IELTS tips, model answers, topics, practice lessons, and videos. My name is Liz and I am the author
               </CardText>
                    <CardActions>
                        <Button colored>GitHub</Button>
                        <Button colored>Description</Button>
                    </CardActions>
                    <CardMenu style={{ color: '#fff' }}>
                        <IconButton name="share" />
                    </CardMenu>
                </Card>
            )
        }
    }

    render() {
        return (
            <div>
                <div className="category-tabs">
                    <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })}>
                        <Tab>React</Tab>
                        <Tab>C#</Tab>
                        <Tab>Angular</Tab>
                    </Tabs>
                    <section className="project-grid">
                        <Grid>
                            <Cell col={12}>
                                <div className="content">{this.toggleCategories()}</div>
                            </Cell>
                        </Grid>
                    </section>
                </div>
            </div>
        )
    }
}

export default Project
