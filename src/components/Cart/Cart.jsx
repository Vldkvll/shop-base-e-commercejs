import React from "react";
import { Container, Typography, Grid, Button } from "@material-ui/core";
import { Link } from "react-router-dom";

import CartItem from "./CartItem/CartItem";
import useStyles from "./styles";

const Cart = ({
    cart,
    handleUpateCartQty,
    handleRemoveFromCart,
    handleEmptyCart,
}) => {
    const classes = useStyles();

    //  or if ?.   works
    // const isEmpty = !cart.line_items?.length;

    const EmptyCart = () => (
        <Typography variant="subtitle2">
            You have no items in your shopping cart,
            <Typography variant="subtitle1">
                <Link to="/" className={classes.link}>
                    {" "}
                    start adding some!{" "}
                </Link>
            </Typography>
        </Typography>
    );

    const FilledCard = () => (
        <>
            <Grid container spacing={3}>
                {cart.line_items.map((item) => (
                    <Grid item xs={12} sm={4} key={item.id}>
                        <CartItem
                            item={item}
                            onUpateCartQty={handleUpateCartQty}
                            onRemoveFromCart={handleRemoveFromCart}
                        />
                    </Grid>
                ))}
            </Grid>
            <div className={classes.cardDetails}>
                <Typography variant="h4">
                    Subtotal: {cart.subtotal.formatted_with_symbol}
                </Typography>
                <div>
                    <Button
                        className={classes.emptyButton}
                        color="secondary"
                        type="button"
                        size="large"
                        variant="contained"
                        // onClick={()=>handleEmptyCart()}
                        onClick={handleEmptyCart}
                    >
                        Empty Cart
                    </Button>
                    <Button
                        component={Link}
                        to="/checkout"
                        className={classes.checkoutButton}
                        color="primary"
                        type="button"
                        size="large"
                        variant="contained"
                    >
                        Checkout
                    </Button>
                </div>
            </div>
        </>
    );

    if (!cart.line_items) return "....Loading";

    return (
        <Container>
            <div className={classes.toolbar}>
                <Typography className={classes.title} variant="h3" gutterBottom>
                    Your Shoping Cart
                </Typography>
            </div>

            {!cart.line_items.length ? <EmptyCart /> : <FilledCard />}
        </Container>
    );
};

export default Cart;
