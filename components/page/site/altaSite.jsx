import React from 'react';
import { Form,FormGroup,Col,Checkbox,Button,ControlLabel,FormControl,Row } from 'react-bootstrap';
import DatePicker from 'react-bootstrap-date-picker';
import { AutoComplete } from 'material-ui';
import Formulario from './FormularioSite.jsx';

class Alta extends React.Component{

    constructor(){
        super();
        this.state = {
            Autocomplete:{
                sourceGeo:["1"],
                sourceGeoNcr:["2"]
            },
            FormPublic:0
        }
    }

    Cambiar(e){
        this.setState({FormPublic: parseInt(e.target.value)});
    }

    agregarPublic(e){
        this.setState({FormPublic:parseInt(e.target.value)});
    }

    render(){
        return(
            <div className="row wrapperWhite" style={{marginRight:"0",marginLeft:"0",paddingBottom: "10px",borderBottom: "2px solid #e7eaec"}}>
                <div className="col-xs-12 litleHeader">
                    <h5> Alta de Site </h5>
                </div>
                <div className="col-xs-12 litleBody">
                    <div className="col-xs-6">
                        <Form horizontal>
                            <FormGroup controlId="formHorizontalEmail">
                                <Col componentClass={ControlLabel} xs={12} sm={2}>
                                    Site
                                </Col>
                                <Col xs={12} sm={8}>
                                    <FormControl type="text" placeholder="Site" />
                                </Col>
                            </FormGroup>
                            <FormGroup controlId="AutoCompleteModelo">
                                <Col componentClass={ControlLabel} xs={12} sm={2}>
                                    Tipo
                                </Col>
                                <Col xs={12} sm={8}>
                                    <FormControl componentClass="select" placeholder="select">
                                        <option value="other">Tipo 1</option>
                                        <option value="select">Tipo 2</option>
                                        <option value="other">Tipo 3</option>
                                    </FormControl>
                                </Col>
                            </FormGroup>
                            <FormGroup controlId="AutoCompleteCarga">
                                <Col componentClass={ControlLabel} xs={12} sm={2}>
                                    Geo Cliente
                                </Col>
                                <Col xs={12} sm={8}>
                                    <FormControl componentClass="select" placeholder="select">
                                        <option value="other">Geo 1</option>
                                        <option value="select">Geo 2</option>
                                        <option value="other">Geo 3</option>
                                    </FormControl>
                                </Col>
                            </FormGroup>
                            <FormGroup controlId="Fecha">
                                <Col componentClass={ControlLabel} xs={12} sm={2}>
                                    Fecha
                                </Col>
                                <Col xs={12} sm={8}>
                                    <Row>
                                        <Col xs={6}>
                                            <DatePicker />
                                        </Col>
                                        <Col xs={6}>
                                            <DatePicker />
                                        </Col>
                                    </Row>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                    <div className="col-xs-6">
                        <Form horizontal>
                            <FormGroup controlId="tel1">
                                <Col componentClass={ControlLabel} xs={12} sm={2}>
                                    Telefo 1
                                </Col>
                                <Col xs={12} sm={8}>
                                    <FormControl type="text" placeholder="Numero" />
                                </Col>
                            </FormGroup>
                            <FormGroup controlId="tel2">
                                <Col componentClass={ControlLabel} xs={12} sm={2}>
                                    Telefo 2
                                </Col>
                                <Col xs={12} sm={8}>
                                    <FormControl type="text" placeholder="Numero" />
                                </Col>
                            </FormGroup>
                            <FormGroup controlId="tel3">
                                <Col componentClass={ControlLabel} xs={12} sm={2}>
                                    Telefo 3
                                </Col>
                                <Col xs={12} sm={8}>
                                    <FormControl type="text" placeholder="Numero" />
                                </Col>
                            </FormGroup>
                            <FormGroup controlId="tel3">
                                <Col componentClass={ControlLabel} xs={12} sm={2}>
                                    Telefo 3
                                </Col>
                                <Col xs={12} sm={8}>
                                    <FormControl type="text" placeholder="Numero" />
                                </Col>
                            </FormGroup>
                            <FormGroup controlId="AutoCompleteModelo">
                                <Col componentClass={ControlLabel} xs={12} sm={2}>
                                    Tipo Direccion
                                </Col>
                                <Col xs={12} sm={8}>
                                    <FormControl componentClass="select" placeholder="select" onChange={this.Cambiar.bind(this)}>
                                        <option value="-1">Select</option>
                                        <option value="1">Publico</option>
                                        <option value="2">Privado</option>
                                    </FormControl>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                    <Col xs={12}>
                        {(()=>{
                            switch (this.state.FormPublic){
                                case 1:
                                    return <Col xs={12} sm={6}>
                                        <Form>
                                            <FormGroup controlId="AutoCompleteCarga">
                                                <Col componentClass={ControlLabel} xs={12} sm={2}>
                                                    Site Publico
                                                </Col>
                                                <Col xs={12} sm={8}>
                                                    <AutoComplete
                                                        hintText="Site Public"
                                                        filter={AutoComplete.caseInsensitiveFilter}
                                                        dataSource={["Abasto","Unicenter","Plaza Oeste"]}
                                                    />
                                                </Col>
                                            </FormGroup>
                                            <Button type="button" className="btn btn-default btn-sm" value="2" onClick={this.agregarPublic.bind(this)}>
                                                <span className="glyphicon glyphicon-plus"/>
                                            </Button>
                                        </Form>
                                    </Col>;
                                    break;
                                case 2:
                                    return <Formulario/>;
                                    break;
                                case 0:
                                    return "";
                                    break;
                            }
                        })()}
                    </Col>
                </div>
                <Row>
                    <center>
                        <Button>Crear</Button>
                    </center>
                </Row>
            </div>
        );
    }
}

module.exports = Alta;