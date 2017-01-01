import React from 'react';
import { FormGroup , Col, ControlLabel} from 'react-bootstrap';
import OptionSelect from './optionSelect.jsx';
export default class Select extends React.Component{
    constructor(props){
        super(props);
        this.state = {
        }
    }
    render(){
        return(
            <FormGroup controlId={this.props.id}>
                <Col componentClass={ControlLabel} xs={12} sm={( typeof this.props.col == 'undefined' ? 2 : this.props.col.label)}>
                    {this.props.label}
                </Col>
                <Col xs={12} sm={( typeof this.props.col == 'undefined' ? 10 : this.props.col.input)}>
                    <select className="form-control">
                        {this.props.dataSource.map((obj,index)=>{
                            return <OptionSelect key={index} value={obj.value} label={obj.label}/>
                        })}
                    </select>
                </Col>
            </FormGroup>
        )
    }
}