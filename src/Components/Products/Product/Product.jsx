import { Card, CardActionArea, CardActions, CardContent, CardMedia, IconButton, Typography } from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons'
import React from 'react'

const Product = ({product}) => {
    return (
        <Card className={classes.root}>
            <CardMedia className={classes.media} image="" title={product.name} />
            <CardContent>
                <div className={classes.cardContent}>
                    <Typography variant="h5" gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography variant="h5" gutterBottom>
                        {product.price}
                    </Typography>
                </div>
                <Typography variant="h2" color="secondary">
                    {product.description}
                </Typography>
            </CardContent>
            <CardActions className={classes.cardActions} disableSpacing>
                    <IconButton aria-label="add to cart">
                        <AddShoppingCart/>
                    </IconButton>
            </CardActions>
        </Card>
    )
}

export default Product
