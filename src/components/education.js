import React, { Component } from 'react'
import { Grid, Cell } from 'react-mdl'

class education extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        {this.props.startYear} - {this.props.endYear}
                    </Cell>
                    <Cell col={8}>
                        <h4 style={{ marginTop: '0px' }}>{this.props.schoolName}</h4>
                        <p>{this.props.schoolDescription}</p>
                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default education
