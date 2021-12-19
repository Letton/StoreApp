import { Container, Grid, Box, ButtonGroup, Button } from '@mui/material';
import React from 'react';

const Index = () => {
    const buttons = [
        <Button key="CPU" variant="contained">Процессоры</Button>,
        <Button key="GPU">Видеокарты</Button>,
        <Button key="RAM">Оперативная память</Button>,
    ];

    return (
        <main>
            <Box sx={{
                    paddingTop: '10px',
                    paddingBottom: '10px'
            }}>
                <Container>
                    <Grid container>
                        <Grid item xs={12} md={4} sx={{
                            display: 'flex',
                            justifyContent: 'center'
                        }}>
                            <ButtonGroup
                                orientation="vertical"
                                aria-label="vertical outlined button group"
                            >
                                {buttons}
                            </ButtonGroup>
                        </Grid>
                        <Grid item xs={12} md={8}>
                            123
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </main>
    );
};

export default Index;