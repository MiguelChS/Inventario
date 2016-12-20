/**
 * Created by Miguel on 5/12/2016.
 */
import React from 'react';
import Nav from './nav/nav.jsx'
import Body from './page/index.jsx';

class Index extends React.Component{
    render(){
        return(
            <div>
                <Nav/>
                <Body children={this.props.children}/>
            </div>
        );
    }
}

module.exports = Index;