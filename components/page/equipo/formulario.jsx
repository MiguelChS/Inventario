import React from 'react';
import {Form,Col} from 'react-bootstrap';
import Input from './input.jsx';
import Select from  './select.jsx';
import InputFecha from './inputFecha.jsx';

export default class Formulario extends React.Component{

    constructor(){
        super();
        this.state={
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
            fEntrega:null
        }
    }


    render(){
        return(
            <Form horizontal>
                <Col xs={12} sm={6} md={4}>
                    <Input label="Serie" id="idSerial" placeHolder="N° Serie"/>
                </Col>
                <Col xs={12} sm={6} md={4}>
                    <Select label="Marca" id="idMarca"/>
                </Col>
                <Col xs={12} sm={6} md={4}>
                    <Select label="Modelo" id="idModelo"/>
                </Col>
                <Col xs={12} sm={6} md={4}>
                    <Select label="Carga" id="idCarga"/>
                </Col>
                <Col xs={12} sm={6} md={4}>
                    <Select label="SNMP" id="idSNMP"/>
                </Col>
                <Col xs={12} sm={6} md={4}>
                    <Select label="SO" id="idSO"/>
                </Col>
                <Col xs={12} sm={6} md={4}>
                    <Select label="xfs" id="idxfs"/>
                </Col>
                <Col xs={12} sm={6} md={4}>
                    <Select label="Estado" id="idEstado"/>
                </Col>
                <Col xs={12} sm={6} md={4}>
                    <InputFecha label="Retiro" id="idRetiro" format="DD/MM/YYYY" />
                </Col>

                <Col xs={12} sm={6} md={4}>
                    <Select label="Garantia" id="idGarantia"/>
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
            </Form>
        )
    }

}