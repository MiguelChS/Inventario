import React from 'react';
import DatePicker from 'react-bootstrap-date-picker';
import { FormGroup , Col,Row, ControlLabel} from 'react-bootstrap';

export default class InputFecha extends React.Component{
    render(){
        return(
            <FormGroup controlId={this.props.id}>
                <Col componentClass={ControlLabel} xs={12} sm={( typeof this.props.col == 'undefined' ? 2 : this.props.col.label)}>
                    {this.props.label}
                </Col>
                <Col xs={12} sm={( typeof this.props.col == 'undefined' ? 10 : this.props.col.input)}>
                    {(()=>{
                        if( typeof this.props.dual != 'undefined' && this.props.dual == "true"){
                            return <Row>
                                        <Col xs={6}>
                                            <DatePicker dateFormat={this.props.format} />
                                        </Col>
                                        <Col xs={6}>
                                            <DatePicker dateFormat={this.props.format} />
                                        </Col>
                                    </Row>
                        }else{
                            return <DatePicker dateFormat={this.props.format}/>
                        }
                    })()}
                </Col>
            </FormGroup>
        )
    }
}