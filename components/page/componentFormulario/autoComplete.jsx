import React from 'react';
import { FormGroup,Col,ControlLabel} from 'react-bootstrap';
import AutoComplete from '../../AutoComplete/autoComplete.jsx';

export default class AutoCompleteForm extends React.Component{

    resultado(e){
        console.log(e);
    }

    render(){
        return(
            <FormGroup controlId={this.props.id}>
                <Col componentClass={ControlLabel} xs={12} sm={2}>
                    {this.props.label}
                </Col>
                <Col xs={12} sm={10}>
                    <AutoComplete resultado={this.resultado.bind(this)}/>
                </Col>
            </FormGroup>
        )
    }
}