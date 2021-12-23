import { Container, Grid, Box, CircularProgress, List, ListSubheader, ListItemButton, ListItemText } from '@mui/material';
import React, {useState, useEffect} from 'react';
import {api, authApi} from '../api';
import ProductList from '../components/ProductList';

const Index = () => {

    const [isLoading, setIsLoading] = useState(true)
    
    const [types, setTypes] = useState([])
    const [selectedType, setSelectedType] = useState(undefined)

    useEffect(() => {
        async function fetchData() {
          const {data} = await authApi.get('/api/type');
          setTypes(data.data)
          setSelectedType('all')
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
                    paddingTop: '15px',
                }}>
                    <Container sx={{
                        display: 'flex',
                        justifyContent: 'center'
                    }}>
                        <Grid container>
                            <Grid item xs={12} md={2}>
                                <List
                                    sx={{ width: '100%', bgcolor: 'background.paper' }}
                                    component="nav"
                                    aria-labelledby="nested-list-subheader"
                                    subheader=
                                        {
                                            <ListSubheader component="div" id="nested-list-subheader">
                                                Категории
                                            </ListSubheader>
                                        }
                                    >
                                    {types.map((type) => 
                                        <ListItemButton key={type.slug} selected={selectedType === type.slug ? true: false} onClick={() => setSelectedType(type.slug)}>
                                            <ListItemText primary={type.name} />
                                        </ListItemButton>
                                    )}
                                </List>
                            </Grid>
                            <ProductList selectedType={selectedType} />
                        </Grid>
                    </Container>
                </Box>
            }

        </main>
    );
};

export default Index;