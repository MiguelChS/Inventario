import React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import getMuiTheme from 'material-ui/styles/getMuiTheme';

export default class Index extends React.Component{
    render(){
       return(
        <MuiThemeProvider muiTheme={getMuiTheme({userAgent: 'all'})}>
            <div className="wrapper-content">
                {this.props.children}
            </div>
        </MuiThemeProvider>
       )
    }
}