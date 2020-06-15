import React from 'react'
import LandingPage from './landingpage'
import { Switch, Route } from 'react-router-dom'
import AboutMe from './aboutme';
import Resume from './resume';
import Contact from './contact';
import Project from './project';

const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/aboutme" component={AboutMe} />
        <Route path="/resume" component={Resume} />
        <Route path="/contact" component={Contact} />
        <Route path="/project" component={Project} />
    </Switch>
)

export default Main;