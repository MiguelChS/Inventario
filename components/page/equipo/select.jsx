import React from 'react';
import { FormGroup , FormControl, Col, ControlLabel} from 'react-bootstrap';

export default class Select extends React.Component{
    render(){
        return(
            <FormGroup controlId={this.props.id}>
                <Col componentClass={ControlLabel} xs={12} sm={2}>
                    {this.props.label}
                </Col>
                <Col xs={12} sm={10}>
                    <FormControl componentClass="select">
                        <option value="other">XP</option>
                        <option value="select">win 7</option>
                        <option value="other">Win 10</option>
                    </FormControl>
                </Col>
            </FormGroup>
        )
    }
}