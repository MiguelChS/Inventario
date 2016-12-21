import React from 'react';
import { Form,FormGroup,Col,Checkbox,Button,ControlLabel,FormControl,Row,Table,Modal } from 'react-bootstrap';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { AutoComplete } from 'material-ui';
import DatePicker from 'react-bootstrap-date-picker';
injectTapEventPlugin();

class Equipo extends React.Component{

    constructor(){
        super();
        this.state= {
            AutoComplete: {
                sourceModelo: [
                    "2012",
                    "5362",
                    "5670",
                    "5865",
                    "5867",
                    "5868",
                    "5870",
                    "5875",
                    "OPTEVA 522",
                    "OPTEVA 1500",
                    "OPTEVA 1520",
                    "OPTEVA 1522",
                    "OPTEVA 720",
                    "PC3000",
                    "RECICLADA STRONG BOX",
                    "RECICLADA STRONG BOX",
                    "UL291",
                    "S22E-D",
                    "EP",
                    "RECICLADA",
                    "NUEVA",
                    "RECICLADA",
                    "1500XE",
                    "2100XE"
                ],
                sourceCarga: [
                    "FRONTAL",
                    "POSTERIOR",
                    "5362 STRONG BOX",
                    "5362 UL291",
                    "BNA3 D",
                    "BNA3 FULL TRASERO",
                    "BNA3 T",
                    "CASH DELANTERO",
                    "CASH FRONTAL",
                    "CASH TRASERO",
                    "CEN1",
                    "DOBLE DISPENSER F",
                    "DOBLE DISPENSER T",
                    "DUAL SCPM",
                    "FULL BNA",
                    "FULL DELANTERO",
                    "FULL FRONTAL",
                    "FULL R/A GBRU-CPM",
                    "FULL TRASERO",
                    "SDM DUAL-NO 24-D",
                    "STRONG BOX",
                    "UL291"
                ]
            },
            Form: {
                Serie: ""
            },
            Equipos: [],
            showModal:false

        }
    }

    agregar(){
        var newEquipo = (
            <tr key={this.serial.value}>
                <td>{this.serial.value}</td>
                <td>no</td>
                <td>
                    <Button onClick={this.open.bind(this)}>
                        Asignar
                    </Button>
                </td>
            </tr>
        );
        var arrayEquipo = this.state.Equipos.slice();
        arrayEquipo.push(newEquipo);
        this.setState({Equipos:arrayEquipo});
    }

    close() {
        this.setState({ showModal: false });
    }

    open() {
        this.setState({ showModal: true });
    }

    render(){
        return(
            <div className="row wrapperWhite" style={{marginRight:"0",marginLeft:"0",paddingBottom: "10px",borderBottom: "2px solid #e7eaec"}}>
                <div className="col-xs-12 litleHeader">
                    <h5> Alta de Equipo </h5>
                </div>
                <div className="col-xs-12 litleBody">
                    <div className="col-xs-6">
                        <Form horizontal>
                            <FormGroup controlId="formHorizontalEmail">
                                <Col componentClass={ControlLabel} xs={12} sm={2}>
                                    Serie
                                </Col>
                                <Col xs={12} sm={8}>
                                    <FormControl inputRef={ref => { this.serial = ref; }}  type="text" placeholder="N° Serie" />
                                </Col>
                            </FormGroup>
                            <FormGroup controlId="AutoCompleteCarga">
                                <Col componentClass={ControlLabel} xs={12} sm={2}>
                                    Carga
                                </Col>
                                <Col xs={12} sm={8}>
                                    <AutoComplete
                                        hintText="Carga"
                                        filter={AutoComplete.caseInsensitiveFilter}
                                        dataSource={this.state.AutoComplete.sourceCarga}
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup controlId="SO">
                                <Col componentClass={ControlLabel} xs={12} sm={2}>
                                    SO
                                </Col>
                                <Col xs={12} sm={8}>
                                    <FormControl componentClass="select" placeholder="select">
                                        <option value="other">XP</option>
                                        <option value="select">win 7</option>
                                        <option value="other">Win 10</option>
                                    </FormControl>
                                </Col>
                            </FormGroup>
                            <FormGroup controlId="Garantia">
                                <Col componentClass={ControlLabel} xs={12} sm={2}>
                                    Garantia
                                </Col>
                                <Col xs={12} sm={8}>
                                    <FormControl componentClass="select" placeholder="select">
                                        <option value="select">Garantia 1</option>
                                        <option value="other">Garantia 2</option>
                                    </FormControl>
                                </Col>
                            </FormGroup>
                            <FormGroup controlId="Fecha Garantia">
                                <Col componentClass={ControlLabel} xs={12} sm={2}>
                                    fecha
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
                            <FormGroup controlId="Retiro">
                                <Col componentClass={ControlLabel} xs={12} sm={2}>
                                    Retiro
                                </Col>
                                <Col xs={12} sm={8}>
                                    <DatePicker />
                                </Col>
                            </FormGroup>
                            <FormGroup controlId="Fecha Entrega">
                                <Col componentClass={ControlLabel} xs={12} sm={2}>
                                    Entrega
                                </Col>
                                <Col xs={12} sm={8}>
                                    <DatePicker />
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>

                    <div className="col-xs-6">
                        <Form horizontal>
                            <FormGroup controlId="formControlsSelect">
                                <Col componentClass={ControlLabel} xs={12} sm={2}>
                                    Marca
                                </Col>
                                <Col  xs={12} sm={8}>
                                    <FormControl componentClass="select" placeholder="select">
                                        <option value="select">NCR</option>
                                        <option value="other">Otro</option>
                                    </FormControl>
                                </Col>
                            </FormGroup>
                            <FormGroup controlId="AutoCompleteModelo">
                                <Col componentClass={ControlLabel} xs={12} sm={2}>
                                    Modelo
                                </Col>
                                <Col xs={12} sm={8}>
                                    <AutoComplete
                                        hintText="Modelo"
                                        filter={AutoComplete.caseInsensitiveFilter}
                                        dataSource={this.state.AutoComplete.sourceModelo}
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup controlId="SelectSnmp">
                                <Col componentClass={ControlLabel} xs={12} sm={2}>
                                    SNMP
                                </Col>
                                <Col  xs={12} sm={8}>
                                    <FormControl componentClass="select" placeholder="select">
                                        <option value="select">SNMP1</option>
                                        <option value="other">SNMP2</option>
                                        <option value="other">SNMP3</option>
                                    </FormControl>
                                </Col>
                            </FormGroup>
                            <FormGroup controlId="XFS">
                                <Col componentClass={ControlLabel} xs={12} sm={2}>
                                    XFS
                                </Col>
                                <Col xs={12} sm={8}>
                                    <FormControl componentClass="select" placeholder="select">
                                        <option value="select">XFS 1</option>
                                        <option value="other">XSF 2</option>
                                        <option value="other">XFS 3</option>
                                    </FormControl>
                                </Col>
                            </FormGroup>
                            <FormGroup controlId="Instalacion">
                                <Col componentClass={ControlLabel} xs={12} sm={2}>
                                    Instalacion
                                </Col>
                                <Col xs={12} sm={8}>
                                    <DatePicker />
                                </Col>
                            </FormGroup>
                            <FormGroup controlId="Select Estado">
                                <Col componentClass={ControlLabel} xs={12} sm={2}>
                                    Estado
                                </Col>
                                <Col  xs={12} sm={8}>
                                    <FormControl componentClass="select" placeholder="select">
                                        <option value="select">INSTALADO</option>
                                        <option value="other">EN DEPOSITO</option>
                                        <option value="other">BAJA/SCRAP</option>
                                    </FormControl>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
                <Col xs={12}>
                    <Form horizontal>
                        <FormGroup controlId="formHorizontalEmail">
                            <Col componentClass={ControlLabel} xs={12} sm={2}>
                                Modulos
                            </Col>
                            <Col xs={12} sm={10}>
                                <FormGroup>
                                    <Row>
                                        <Col sm={3} xs={6}>
                                            <Checkbox inline>
                                                RPT
                                            </Checkbox>
                                        </Col>
                                        <Col sm={3} xs={6}>
                                            <Checkbox inline >
                                                RPT carro ancho
                                            </Checkbox>
                                        </Col>
                                        <Col sm={3} xs={6}>
                                            <Checkbox inline>
                                                JPT
                                            </Checkbox>
                                        </Col>
                                        <Col sm={3} xs={6}>
                                            <Checkbox inline>
                                                Lectora motorizada
                                            </Checkbox>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col sm={3} xs={6}>
                                            <Checkbox inline>
                                                Lectora dip
                                            </Checkbox>
                                        </Col>
                                        <Col sm={3} xs={6}>
                                            <Checkbox inline>
                                                Lector huella
                                            </Checkbox>
                                        </Col>
                                        <Col sm={3} xs={6}>
                                            <Checkbox inline>
                                                Dispenser
                                            </Checkbox>
                                        </Col>
                                        <Col sm={3} xs={6}>
                                            <Checkbox inline>
                                                Dual dispenser
                                            </Checkbox>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col sm={3} xs={6}>
                                            <Checkbox inline>
                                                BNA
                                            </Checkbox>
                                        </Col>
                                        <Col sm={3} xs={6}>
                                            <Checkbox inline>
                                                Dual BNA
                                            </Checkbox>
                                        </Col>
                                        <Col sm={3} xs={6}>
                                            <Checkbox inline>
                                                BNA2
                                            </Checkbox>
                                        </Col>
                                        <Col sm={3} xs={6}>
                                            <Checkbox inline>
                                                Dual BNA2
                                            </Checkbox>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col sm={3} xs={6}>
                                            <Checkbox inline>
                                                BNA3
                                            </Checkbox>
                                        </Col>
                                        <Col sm={3} xs={6}>
                                            <Checkbox inline>
                                                Dual BNA3
                                            </Checkbox>
                                        </Col>
                                        <Col sm={3} xs={6}>
                                            <Checkbox inline>
                                                GBRU
                                            </Checkbox>
                                        </Col>
                                        <Col sm={3} xs={6}>
                                            <Checkbox inline>
                                                Dual GBRU
                                            </Checkbox>
                                        </Col>
                                    </Row>

                                    <Row>
                                        <Col sm={3} xs={6}>
                                            <Checkbox inline>
                                                Deposito sobre
                                            </Checkbox>
                                        </Col>
                                        <Col sm={3} xs={6}>
                                            <Checkbox inline>
                                                Coin dispenser
                                            </Checkbox>
                                        </Col>
                                        <Col sm={3} xs={6}>
                                            <Checkbox inline>
                                                SDM
                                            </Checkbox>
                                        </Col>
                                        <Col sm={3} xs={6}>
                                            <Checkbox inline>
                                                SCPM3
                                            </Checkbox>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={12}>
                                            <Checkbox inline>
                                                SCPM4
                                            </Checkbox>
                                        </Col>
                                    </Row>
                                </FormGroup>
                            </Col>
                        </FormGroup>
                    </Form>
                </Col>
                <Row>
                    <center>
                        <Button onClick={this.agregar.bind(this)}>Agregar</Button>
                    </center>
                </Row>
                <Col xs={12} style={{marginTop:"7px"}}>
                    <Table striped bordered condensed hover responsive>
                        <thead>
                            <tr>
                                <th>Serie</th>
                                <th>Asignado</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.state.Equipos}
                        </tbody>
                    </Table>
                </Col>
                <Modal show={this.state.showModal} onHide={this.close.bind(this)}>
                    <Modal.Header closeButton>
                        <Modal.Title>Asignar Posicion</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form inline>
                            <FormGroup controlId="AutoCompleteSite">
                                <Col componentClass={ControlLabel} xs={12} sm={2}>
                                    Site
                                </Col>
                                <Col xs={12} sm={8}>
                                    <AutoComplete
                                        hintText="Site"
                                        filter={AutoComplete.caseInsensitiveFilter}
                                        dataSource={["site1","site2","site3"]}
                                    />
                                </Col>
                            </FormGroup>
                            <FormGroup controlId="AutoCompletePosicion">
                                <Col componentClass={ControlLabel} xs={12} sm={2}>
                                    Posicion
                                </Col>
                                <Col xs={12} sm={8}>
                                    <AutoComplete
                                        hintText="Carga"
                                        filter={AutoComplete.caseInsensitiveFilter}
                                        dataSource={["posicion1","posicion2","posicion3"]}
                                    />
                                </Col>
                            </FormGroup>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.close.bind(this)}>close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }
}

module.exports = Equipo;