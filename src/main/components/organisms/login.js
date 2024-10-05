import Typography from '@mui/material/Typography';
import { Box, Container } from '@mui/material';
import Paper from '@mui/material/Paper';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';

let login = () => {

    return (
        <>
            <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>

                <Paper
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        p: 2,
                        mt: 4,
                        mb: 4,
                        borderRadius: 4,
                        overflow: 'hidden',
                        height: '100vh',
                        width: '100vw',
                        flexWrap: 'wrap',
                    }}
                >
                    <Box>

                    </Box>
                    <Box>

                    </Box>

                </Paper>
            </Container>


        </>
    );
}
export default login;