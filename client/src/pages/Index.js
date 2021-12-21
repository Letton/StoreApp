import { Container, Grid, Box, ButtonGroup, Button, CircularProgress } from '@mui/material';
import React, {useState, useEffect} from 'react';
import api from '../api';
import ProductList from '../components/ProductList';

const Index = () => {

    const [isLoading, setIsLoading] = useState(true)
    
    const [types, setTypes] = useState([])
    const [selectedType, setSelectedType] = useState(undefined)

    useEffect(() => {
        async function fetchData() {
          const {data} = await api.get('/api/type');
          setTypes(data.data)
          setSelectedType(data.data[0].id)
          
          setIsLoading(false)
        }
        fetchData();
    }, []); 

    return (
        <main>
            {isLoading
                ?
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    minHeight: 'calc(100vh - 64px)'
                }}>
                    <CircularProgress/>
                </Box> 
                :
                <Box sx={{
                    paddingTop: '10px',
                    paddingBottom: '10px'
                }}>
                    <Container sx={{
                        display: 'flex',
                        justifyContent: 'center'
                    }}>
                        <Grid container>
                            <Grid item xs={12} md={4} sx={{
                                    display: 'flex',
                                    justifyContent: 'center'
                            }}>
                                <ButtonGroup
                                    orientation="vertical"
                                    aria-label="vertical outlined button group"
                                >
                                    {types.map((type) => 
                                        <Button key={type.id} variant={selectedType === type.id ? 'contained': 'outlined'} onClick={() => setSelectedType(type.id)}>{type.name}</Button>
                                    )}
                                </ButtonGroup>
                            </Grid>
                            <Grid item xs={12} md={8}>
                                <ProductList selectedType={selectedType} />
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            }

        </main>
    );
};

export default Index;