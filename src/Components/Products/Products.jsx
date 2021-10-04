import { Grid } from '@material-ui/core'
import React from 'react'

const products = [
    { id: 1, name: 'Shoes', description: 'Running shoes.'},
    { id: 2, name: 'Macbook', description: 'Apple macbook.' }, 
]    

const Products = () => {
    return (
        <main>
            <Grid container spacing={4} justify="center">
                {products.map(product =>(
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                            <Product product={product}/>
                    </Grid>
                ))}
            </Grid>            
        </main>
    )
}

export default Products
