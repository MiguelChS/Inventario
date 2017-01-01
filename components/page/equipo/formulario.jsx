import React from 'react';
import axios from 'axios';
import {Form,Col,Row,Button} from 'react-bootstrap';
import Input from '../componentFormulario/input.jsx';
import Select from  '../componentFormulario/select.jsx';
import InputFecha from '../componentFormulario/inputFecha.jsx';
import AutoComplete from '../componentFormulario/autoComplete.jsx';

export default class Formulario extends React.Component{

    constructor(){
        super();
        this.state={
            test:"serie",
            idMarca:null,
            nroSerie:null,
            idModelo:null,
            idModulos:[],
            idCarga:null,
            Garantia:{
                idGarantia:null,
                iniGarantia:null,
                finGarantia:null
            },
            idSnmp:null,
            idSo:null,
            idxfs:null,
            fInstalacion:null,
            fRetiro:null,
            idEstado:null,
            fEntrega:null,
            source:{
                carga:[],
                estado:[],
                garantia:[],
                marcas:[],
                planta:[],
                snmp:[],
                so:[],
                xfs:[],
            }
        }
    }
    componentDidMount(){
        if(typeof window.Equipo.Select != 'undefined'){
            this.setState({source:Object.assign({},this.state.source,window.Equipo.Select)})
        }else{
            axios.get('/controllerEquipo/findSelect')
                .then((result)=>{
                    window.Equipo.Select = result.data;
                    this.setState({source:Object.assign({},this.state.source,result.data)})
                })
                .catch((err)=>{
                    console.log(err);
                });
        }
    }

    test(){
        this.setState({test:"miguel"});
    }

    render(){
        return(
            <Form horizontal>
                <Row>
                    <Col xs={12} sm={6} md={4}>
                        <Input label={this.state.test} id="idSerial" placeHolder="N° Serie"/>
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <Select label="Marca" id="idMarca" dataSource={this.state.source.marcas}/>
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <AutoComplete label="Modelo" id="idModelo"/>
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <Select label="SNMP" id="idSNMP" dataSource={this.state.source.snmp}/>
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <Select label="SO" id="idSO" dataSource={this.state.source.so}/>
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <Select label="xfs" id="idxfs" dataSource={this.state.source.xfs}/>
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <AutoComplete label="Carga" id="idCarga"/>
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <Select label="Estado" id="idEstado" dataSource={this.state.source.estado}/>
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <InputFecha label="Retiro" id="idRetiro" format="DD/MM/YYYY" />
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <Select label="Garantia" id="idGarantia" dataSource={this.state.source.garantia}/>
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <InputFecha label="Garantia" id="idGarantia" format="DD/MM/YYYY" dual="true"/>
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <InputFecha label="Entrega" id="idEntrega" format="DD/MM/YYYY" />
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <InputFecha label="Instalacion" id="idInstalacion" format="DD/MM/YYYY" col={{label:3,input:9}}/>
                    </Col>
                    <Col xs={12} sm={6} md={4}>
                        <AutoComplete label="Planta" id="idPlanta"/>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} bsClass="text-center col">
                        <Button bsClass="btn btn-white" onClick={this.test.bind(this)}>Agregar</Button>
                    </Col>
                </Row>
            </Form>
        )
    }

}