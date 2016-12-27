import React from 'react';
import { Row,Col,Button } from 'react-bootstrap';
import Formulario from './formulario.jsx';
import TableEquipo from './tableEquipo.jsx';
import Modal from '../componentFormulario/modal.jsx';

class Alta extends  React.Component{

    open(){
        this.refs["modal"].setState({showModal:true});
    }

    render(){
        const style = {
            marginRight:"0",
            marginLeft:"0",
            paddingBottom: "10px",
            borderBottom: "2px solid #e7eaec"};
        return(
            <Row style={style} bsClass="row wrapperWhite">
                <Col xs={12} bsClass="litleHeader col">
                    <h5> Alta de Equipo </h5>
                </Col>
                <Col xs={12} bsClass="litleBody col">
                    <Formulario/>
                    <div className="hr-line-dashed"/>
                    <TableEquipo openModal={this.open.bind(this)}/>
                    <div className="hr-line-dashed"/>
                    <Button bsClass="btn btn-white">Finalizar Carga</Button>
                </Col>
                <Modal ref="modal" title="Asignar Posicion"/>
            </Row>
            )
    }
}

module.exports = Alta;