import  React from 'react';
import { Form,FormGroup,Col,Checkbox,Button,ControlLabel,FormControl,Row } from 'react-bootstrap';
import DatePicker from 'react-bootstrap-date-picker';
import { AutoComplete } from 'material-ui';

export default class FormularioSite extends React.Component{

    render(){
        return(
            <div className="col-xs-12">
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
                                Direccion
                            </Col>
                            <Col xs={12} sm={8}>
                                <FormControl type="text" placeholder="Direccion" />
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="AutoCompleteCarga">
                            <Col componentClass={ControlLabel} xs={12} sm={2}>
                                Telefono
                            </Col>
                            <Col xs={12} sm={8}>
                                <FormControl type="text" placeholder="Numero" />
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="Fecha">
                            <Col componentClass={ControlLabel} xs={12} sm={2}>
                                Site Code
                            </Col>
                            <Col xs={12} sm={8}>
                                <FormControl type="text" placeholder="Site Code" />
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="Fecha">
                            <Col componentClass={ControlLabel} xs={12} sm={2}>
                                Cordenadas
                            </Col>
                            <Col xs={12} sm={8}>
                                <Row>
                                    <Col xs={6}>
                                        <FormControl type="text" placeholder="Latitud" />
                                    </Col>
                                    <Col xs={6}>
                                        <FormControl type="text" placeholder="Longitud" />
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
                                Geo
                            </Col>
                            <Col xs={12} sm={8}>
                                <AutoComplete
                                    hintText="Geo"
                                    filter={AutoComplete.caseInsensitiveFilter}
                                    dataSource={["Geo1","Geo2","Geo3"]}
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="tel2">
                            <Col componentClass={ControlLabel} xs={12} sm={2}>
                                Geo Ncr
                            </Col>
                            <Col xs={12} sm={8}>
                                <AutoComplete
                                    hintText="Geo Ncr"
                                    filter={AutoComplete.caseInsensitiveFilter}
                                    dataSource={["Geo1","Geo2","Geo3"]}
                                />
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="tel3">
                            <Col componentClass={ControlLabel} xs={12} sm={2}>
                                Km Ncr
                            </Col>
                            <Col xs={12} sm={8}>
                                <FormControl type="text" placeholder="Numero" />
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
            </div>
        )
    }
}