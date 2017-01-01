import React from 'react';
import {Form,Col,Row} from 'react-bootstrap';
import Input from '../componentFormulario/input.jsx';
import Select from  '../componentFormulario/optionSelect.jsx';
import InputFecha from '../componentFormulario/inputFecha.jsx';

export default class Formulario extends React.Component{
    render(){
        return(
            <Form horizontal>
                <Col xs={12} sm={6} md={4}>
                    <Input label="Cliente" id="idCliente" placeHolder="Cliente"/>
                </Col>
                <Col xs={12} sm={6} md={4}>
                    <Input label="IP" id="idIP" placeHolder="N° IP"/>
                </Col>
                <Col xs={12} sm={6} md={4}>
                    <InputFecha label="Alta/Baja" id="idIntFin" format="DD/MM/YYYY" dual="true"/>
                </Col>
                <Col xs={12} sm={6} md={4}>
                    <Select label="Site" id="IdSite" dataSource={[]}/>
                </Col>
                <Col xs={12} sm={6} md={4}>
                    <Select label="SLA" id="idSLA" dataSource={[]}/>
                </Col>
                <Col xs={12} sm={6} md={4}>
                    <Select label="Acceso" id="idAcceso" dataSource={[]}/>
                </Col>
                <Col xs={12} sm={6} md={4}>
                    <Select label="Config Gavetas" id="idConfigGavetas" dataSource={[]}/>
                </Col>
                <Col xs={12} sm={6} md={4}>
                    <Select label="Tabla Status" id="idTablaStatus" dataSource={[]}/>
                </Col>
                <Col xs={12} sm={6} md={4}>
                    <Select label="Site Cliente" id="idSiteClient" dataSource={[]}/>
                </Col>
                <Col xs={12} sm={6} md={4}>
                    <Select label="Script" id="idScript" dataSource={[]}/>
                </Col>
                <Col xs={12} sm={6} md={4}>
                    <Select label="SLM" id="idSLM" dataSource={[]}/>
                </Col>
                <Col xs={12} sm={6} md={4}>
                    <Select label="FLM" id="idFLM" dataSource={[]}/>
                </Col>
                <Col xs={12} sm={6} md={4}>
                    <Select label="Command" id="idCommand" col={{label:3,input:9}} dataSource={[]}/>
                </Col>
                <Col xs={12} sm={6} md={4}>
                    <Select label="Community" id="idCommunity" col={{label:3,input:9}} dataSource={[]}/>
                </Col>
                <Col xs={12} sm={6} md={4}>
                    <Select label="Comunicacion" id="idComunicacion" col={{label:3,input:9}} dataSource={[]}/>
                </Col>

            </Form>
        )
    }
}