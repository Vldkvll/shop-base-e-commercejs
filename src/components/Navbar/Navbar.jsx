import React from 'react';
import { AppBar, Toolbar, Badge, IconButton, MenuItem, Menu, Typography, } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';

import logo from '../../assests/commerce.png';
import useStyles from './styles';

const Navbar = () => {
    const classes = useStyles();

    return (
        <>
        <AppBar position="fixed" className={classes.appBar} color="inherit">
            <Toolbar>
                <Typography variant="h6" className={classes.title} color="inherit">
                    <img src={logo} alt="E-Commerce.JS" height="25px" className={classes.image} />
                    E-Commerce.JS
                </Typography>
                <div className={classes.grow} />
                <div className={classes.button}>
                    <IconButton aria-label="Show cart items" color="inherit">
                        <Badge badgeContent={2} color="secondary">
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
        </>
    )
}

export default Navbar

