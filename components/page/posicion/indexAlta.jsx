import React from 'react';
import { Row,Col } from 'react-bootstrap';
import Formulario from  './formulario.jsx';

class Alta extends React.Component{

    render(){
        const style = {
            marginRight:"0",
            marginLeft:"0",
            paddingBottom: "10px",
            borderBottom: "2px solid #e7eaec"};
        return(
            <Row style={style} bsClass="row wrapperWhite">
                <Col xs={12} bsClass="litleHeader col">
                    <h5> Alta de Posicion </h5>
                </Col>
                <Col xs={12} bsClass="litleBody col">
                    <Formulario/>
                </Col>
            </Row>
        )
    }

}
module.exports = Alta;