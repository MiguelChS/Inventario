import React from 'react';

export default class Index extends React.Component{
    render(){
       return(
           <div className="wrapper-content">
               {this.props.children}
           </div>
       )
    }
}