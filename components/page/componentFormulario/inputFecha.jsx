import React from 'react';
import { FormGroup , Col,Row, ControlLabel} from 'react-bootstrap';
import DatePicker2 from 'react-bootstrap-datetimepicker';
let moment = require('moment');

export default class InputFecha extends React.Component{
    constructor(){
        super()
        this.state={
            min:moment(new Date()),
            max:moment(new Date())
        }
    }

    componentDidMount(){
        this.refs.hasOwnProperty("data1") ? this.refs.data1.refs.datetimepicker.firstChild.disabled = true : null;
        this.refs.hasOwnProperty("data2") ? this.refs.data2.refs.datetimepicker.firstChild.disabled = true : null;
    }

    changeDate1(e){
        if(this.refs.hasOwnProperty("data2")){
            this.setState({min:moment(parseInt(e,10))});
        }
    }

    changeDate2(e){
        this.setState({max:moment(parseInt(e,10))});
    }

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
                                            <DatePicker2 sm="sm" onChange={this.changeDate1.bind(this)} maxDate={this.state.max} ref="data1" mode="date" inputFormat={this.props.format} />
                                        </Col>
                                        <Col xs={6}>
                                            <DatePicker2 sm="sm" onChange={this.changeDate2.bind(this)} minDate={this.state.min} ref="data2" mode="date" inputFormat={this.props.format} />
                                        </Col>
                                    </Row>
                        }else{
                            return <DatePicker2 ref="data1" mode="date" onChange={this.changeDate1.bind(this)} inputFormat={this.props.format}/>
                        }
                    })()}
                </Col>
            </FormGroup>
        )
    }
}