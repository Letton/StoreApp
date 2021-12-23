import React, {useState, useEffect} from 'react';
import { Grid, Box, Button, CircularProgress } from '@mui/material';
import {api} from '../api';

const ProductList = ({selectedType}) => {

    const [isLoading, setIsLoading] = useState(true)
    const [products, setProducts] = useState([])

    useEffect(() => {
        async function fetchData() {
          setIsLoading(true)
          console.log(selectedType);
          const {data} = await api.get('/api/product', {
            params: {
                category_slug: selectedType
            }
          });
          console.log(data);
          if (data.meta.pagination.total > 0) {
            setProducts(data.data)
            console.log(data)
            setIsLoading(false)
          }
        }
        fetchData();
    }, [selectedType]); 

    return (
        <>
            {isLoading
                ?
                <Grid item md={9} xs={12} sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: '250px',
                }}>
                    <CircularProgress/>
                </Grid> 
                :
                <Grid item spacing={2} md={10}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={4}>
                            {products.map((product) => 
                                <Button key={product.id}>{product.name}</Button>
                            )}
                        </Grid>
                        <Grid item xs={12} md={4}>
                            {products.map((product) => 
                                <Button key={product.id}>{product.name}</Button>
                            )}
                        </Grid>
                        <Grid item xs={12} md={4}>
                            {products.map((product) => 
                                <Button key={product.id}>{product.name}</Button>
                            )}
                        </Grid>
                    </Grid>
                </Grid>
            }
        </>
    );
};

export default ProductList;