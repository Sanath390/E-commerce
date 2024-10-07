import Typography from '@mui/material/Typography';
import { Box, Container, Stack } from '@mui/material';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControl from '@mui/material/FormControl';

let login = () => {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        ...theme.applyStyles('dark', {
            backgroundColor: '#1A2027',
        }),
    }));

    return (
        <>
            <Container maxWidth="lg" >

                <Paper
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        p: 2,
                        mt: 4,
                        mb: 4,
                        borderRadius: 4,
                        flexWrap: 'wrap',
                        flex: '1 1 100%',
                        alignContent: 'stretch',
                    }}
                >
                    <Box sx={{height:'100%',width:'50%'}}>
                        <Stack >
                            <Typography variant="h3" component={"h2"}>Welcome Back <img src="/icons/waving-hand.png" height='5%' width='5%' /></Typography>
                            <Box mt={3}>
                                <Typography variant="body2" >A healthy day, and a good start!</Typography>
                                <Typography variant="body2" gutterBottom>Fresh Fruits and Vegetables waiting for you...</Typography>
                                <Typography variant="body1" sx={{ fontWeight: 'bold', mt: 3 }}>Email</Typography>
                                <FormControl sx={{ width: '45ch' }} size='small'>

                                    <OutlinedInput
                                        id="outlined-adornment-email"
                                        label="Email"
                                    />
                                </FormControl>
                                <Typography variant="body1" sx={{ fontWeight: 'bold', mt: 3 }}>Password</Typography>
                                <FormControl sx={{ width: '45ch', mb: 3 }} size='small' >

                                    <OutlinedInput
                                        id="outlined-adornment-amount"
                                        label="Password"
                                    />
                                </FormControl>
                            </Box>

                        </Stack>
                    </Box>

                    <Box sx={{height:'100%',width:'50%'}}>
                        <Stack>
                            <img src="/images/fruits_vegetables.jpg" />
                        </Stack>
                    </Box>

                </Paper>
            </Container>


        </>
    );
}
export default login;