import React from 'react'
import {AppBar,Toolbar, Typography,makeStyles} from "@material-ui/core";
import {NavLink} from "react-router-dom";

const useStyle = makeStyles({
    header:{
        background:"#111111"
    },
    tabs:{
        color:"#ffffff",
        marginRight:20,
        textDecoration:"none",
        fontSize:20
    }
})
function Navbar() {
    const classes = useStyle();
    return (
        <div>
            <AppBar className={classes.header} position="static">
                <Toolbar>
              <NavLink className={classes.tabs} to="/" exact>name</NavLink>
              <NavLink className={classes.tabs} to="/list">UserList</NavLink>
              <NavLink className={classes.tabs} to="/add">AddUser</NavLink>
                </Toolbar>
            </AppBar>
            
        </div>
    )
}

export default Navbar
