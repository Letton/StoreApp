import React, {useState, useEffect} from 'react';
import { Grid, Box, Button, CircularProgress } from '@mui/material';
import api from '../api';

const ProductList = ({selectedType}) => {

    const [isLoading, setIsLoading] = useState(true)
    const [products, setProducts] = useState([])

    useEffect(() => {
        async function fetchData() {
          setIsLoading(true)
          console.log(selectedType);
          const {data} = await api.get('/api/product', {
            params: {
                category_id: selectedType
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
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: 'calc(100vh - 64px - 20px)'
                }}>
                    <CircularProgress/>
                </Box> 
                :
                <Grid container>
                    <Grid item xs={12} md={4} sx={{
                            display: 'flex',
                            justifyContent: 'center'
                    }}>
                            {products.map((product) => 
                                <Button key={product.id}>{product.name}</Button>
                            )}
                    </Grid>
                </Grid>
            }
        </>
    );
};

export default ProductList;