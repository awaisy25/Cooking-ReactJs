import React from 'react';
import {NavLink} from 'react-router-dom';
import {AppBar, Toolbar} from '@material-ui/core'
import {ThemeProvider} from '@material-ui/styles';
//file that holds our JSX css
import {theme, styles} from "../styles/themes";
import "../styles/header.scss";
/*component for the navigation bar all screens will ahve this navigation bar*/
const HeaderBar = props => {
 return (
    <ThemeProvider theme={theme}>
    <AppBar style={styles.header}>

    <Toolbar>
    <div style={styles.links}>
    <ul id="links">
        <li><NavLink style={styles.textLinks} exact to="/Home" >Home</NavLink></li>
        <li ><NavLink style={styles.textLinks} to="/recipes">Recipes</NavLink></li>
        <li><NavLink style={styles.textLinks} to="/savemoney" >How you save</NavLink></li>
    </ul>
    </div>
    </Toolbar>
    </AppBar>
    </ThemeProvider>
 )
}

export default HeaderBar;
