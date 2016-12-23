import React from 'react';
import ItemResult from './itemResult.jsx';
import Trim from 'trim';

export default class AutoComplete extends React.Component{
    constructor(){
        super();
        this.state = {
            result:[],
            source:[
                "miguel",
                "reyna",
                "leandro",
                "german",
                "martin",
                "mariel",
                "migel",
                "migal"
            ],
            showResult:"none",
            resultSelect:null,
        }
        this.hoverOnResult = false;
    }

    selectResult(e){
        this.refs.input.value = this.state.source[e];
        this.setState({resultSelect:e,showResult:"none"},()=>{
            this.props.resultado(this.state.resultSelect);
        });
    }
    componentDidUpdate(){
        console.log(this.state);
    }

    filtrarSource(e){
        let value = Trim(e.target.value);
        if(value.length < 3) {
            this.setState({showResult:"none",resultSelect:null},()=>{this.props.resultado(this.state.resultSelect);});
            return;
        }
        let resultado = [];
        let regex = new RegExp(`${value.toUpperCase()}.*`);
        for(let i = 0;i< this.state.source.length ;i++){
            if(regex.test(this.state.source[i].toUpperCase())){
                resultado.push(
                    <ItemResult
                        key={i}
                        select={this.selectResult.bind(this)}
                        value={{index:i,label:this.state.source[i]}}
                    />
                )
            }
        }
        if(resultado.length == 0) {
            this.setState({showResult:"none",resultSelect:null},()=>{this.props.resultado(this.state.resultSelect);});
            return;
        }
        this.setState({result:resultado,showResult:"block",resultSelect:null},()=>{this.props.resultado(this.state.resultSelect);});
    }

    offFocus(){
        let value = Trim(this.refs.input.value).toUpperCase();
        if(this.state.resultSelect == null){
            this.refs.input.value="";
            return;
        }

        if(Trim(this.state.source[this.state.resultSelect]).toUpperCase() != value){
            this.setState({resultSelect:null});
            this.refs.input.value="";
        }
    }



    render() {
        const styleDiv = {
            position:"relative",
        };
        const styleResul = {
            position:"absolute",
            backgroundColor:"white",
            border:"1px solid #e7eaec",
            width:"100%",
            display: this.state.showResult
        };
        const styleInput = {
            width:"100%"
        };
        return (
            <div style={styleDiv}>
                <input type="text" style={styleInput} onChange={this.filtrarSource.bind(this)} ref="input"/>
                <div style={styleResul}
                     ref="result"
                     onMouseEnter={()=>{ this.hoverOnResult = true}}
                     onMouseOut={()=>{ this.hoverOnResult = false}}>
                    {this.state.result}
                </div>
            </div>
        )
    }
}