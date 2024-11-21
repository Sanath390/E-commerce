import Typography from '@mui/material/Typography';
import { Box, Stack } from '@mui/material';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Fab from '@mui/material/Fab';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CopyrightIcon from '@mui/icons-material/Copyright';
import { Link, } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../molecules/AuthProvider';
import setTokenFunction from '../atoms/setTokenFunction';
import { useState, useEffect } from 'react';



let Login = () => {
    let linearGradient = 'linear-gradient(0.3turn, #E38119,#C3786C,#82C560,#E3DCD9)';

    let SignInButton = styled(Button)({
        background: linearGradient,
        borderColor: '#B78838',
    })

    

    const theme = createTheme({
        palette: {
            white: {
                main: '#fafafa',
            },
        },

    });


    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const auth = useAuth();
    /*let { token, setToken } = auth;*/
    
    const handleSignIn = async () => {
        const tokenVal = await setTokenFunction('login', username, password);
        // setToken(tokenVal);
    };


    return (
        <div key="login">

            <ThemeProvider theme={theme}>
                <div
                    className="bg-no-repeat bg-cover bg-center"
                    style={{
                        backgroundImage: "url('/images/background-images/nadine-primeau-sOMcKlIUiGA-unsplash.jpg')",
                        position: 'relative'
                    }}
                >
                    <div class="bg-no-repeat bg-cover bg-center" style={{ backgroundImage: "" }}>
                        <Box sx={{
                            display: 'flex', justifyContent: 'center', height: 'auto', p: 5,
                            // background: linearGradient,
                            // backgroundAttachment: 'fixed'
                        }}>
                            <Paper
                                square={false}
                                sx={{
                                    display: 'grid',
                                    gridTemplateColumns: 'repeat(2, 1fr)',
                                    gridTemplateRows: 'minmax(0,1fr)',

                                    width: '70vw',
                                    height: 'auto',
                                }}

                            >
                                <Box sx={{ display: 'flex', justifyContent: 'end', alignItems: 'center', flexWrap: 'wrap', p: 2 }}>
                                    <Stack sx={{ flex: '.5 1 auto', alignItems: 'center', flexWrap: 'wrap', pt: 2 }}>
                                        <Box sx={{ display: 'flex', flexWrap: 'wrap', width: '80%', }}>
                                            <Box sx={{ display: 'flex', flexWrap: 'wrap', mt: 1, width: '100%' }}>
                                                <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', alignSelf: 'end', pt: .4 }}>
                                                    Welcome Back
                                                </Typography>
                                                <Box sx={{ height: '43px', width: '43px', pt: .6, pr: .3, display: 'inline-block', }}>
                                                    <img src="/icons/waving-hand.svg" height='100%' width='100%' objectFit='contain' />
                                                </Box>
                                            </Box>
                                            <Typography variant="body3" sx={{ display: 'block', width: '100%' }}>A healthy day, and a good start!</Typography>
                                            <Typography variant="body3" sx={{ display: 'block', width: '100%' }} gutterBottom>Fresh Fruits and Vegetables waiting for you...</Typography>
                                            <Box sx={{ width: '100%', }}>
                                                <Typography variant="body2" sx={{ fontWeight: 'bold', mt: 3 }}>User name</Typography>
                                                <FormControl sx={{ width: '100%' }} size='small'>
                                                    <TextField key="outlined-userName" label="User name" type="text" size='small' sx={{ mt: .5 }} onChange={(e) => setUsername(e.target.value)} />
                                                </FormControl>
                                                <Typography variant="body2" sx={{ fontWeight: 'bold', mt: 3 }}>Password</Typography>
                                                <FormControl sx={{ width: '100%', mb: 3 }} size='small' >
                                                    <TextField key="outlined-password" label="Password" type="password" size='small' sx={{ mt: .5 }} onChange={(e) => setPassword(e.target.value)} />
                                                </FormControl>
                                                <Box sx={{ display: 'flex', justifyContent: 'end' }}>
                                                    <Typography variant="caption" sx={{ fontWeight: 'bold', textDecoration: 'underline' }}>Forgot Password?</Typography>
                                                </Box>
                                                <div class="flex justify-center">
                                                    <SignInButton variant='contained'  sx={{ width: '70%', mt: 2.3 }}>Sign In</SignInButton>
                                                </div>
                                                <Box style={{ width: '100%', height: '15px', borderBottom: '1px solid #B9B7BD', textAlign: 'center', marginTop: '15px', marginBottom: '25px' }}>
                                                    <Typography variant='overline' sx={{ bgcolor: 'white.main', textTransform: 'initial !important', padding: '0 10px' }}>Or</Typography>
                                                </Box>
                                                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
                                                    <Fab variant="extended" size='small' sx={{ bgcolor: 'white.main', textTransform: 'initial !important' }} disableRipple>
                                                        <Box sx={{ height: '27px', width: '27px', mr: 1 }}>
                                                            <img src="/icons/google.svg" height='100%' width='100%' objectFit='contain' />
                                                        </Box>
                                                        <Box sx={{ display: 'flex', alignItems: 'center', pt: .6 }}>
                                                            Sign in with Google
                                                        </Box>
                                                    </Fab>
                                                </Box>
                                                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
                                                    <Fab variant="extended" size='small' sx={{ bgcolor: 'white.main', textTransform: 'initial !important' }} disableRipple>
                                                        <Box sx={{ height: '27px', width: '27px', mr: 1 }}>
                                                            <img src="/icons/github2.svg" height='100%' width='100%' objectFit='contain' />
                                                        </Box>
                                                        <Box sx={{ display: 'flex', alignItems: 'center', pt: .6 }}>
                                                            Sign in with GitHub
                                                        </Box>
                                                    </Fab>
                                                </Box>
                                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 3 }}>
                                                    <Typography variant="overline" sx={{ bgcolor: 'white.main', textTransform: 'initial !important' }}>
                                                        Don't have an account?
                                                    </Typography>
                                                    <Link to='/signup' replace={true} reloadDocument style={{ textDecoration: 'none', color: 'inherit' }}>
                                                        <Typography variant="overline" sx={{ bgcolor: 'white.main', textTransform: 'initial !important', textDecoration: 'underline', fontWeight: '700' }}>
                                                            Sign Up
                                                        </Typography>
                                                    </Link>
                                                </Box>

                                            </Box>
                                        </Box>
                                        <Box sx={{ height: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'end', mt: 7, flexWrap: 'wrap', }}>
                                            <Typography variant="overline" sx={{ height: 'auto', textTransform: 'initial !important', }}>
                                                <CopyrightIcon fontSize='xsmall' sx={{}} /> 2024. All rights reserved
                                            </Typography>
                                        </Box>
                                    </Stack>
                                </Box>
                                <div class="flex flex-col justify-center items-center">
                                    <div class="bg-no-repeat bg-cover size-11/12 rounded-lg" style={{ backgroundImage: "url('images/background-images/freddy-g-m3OuPu9oTuY-unsplash.jpg')" }}>

                                    </div>
                                </div>
                                {/* <Box sx={{  width: '100%', p: 3 }}>
                                <Box sx={{

                                    borderRadius: 4,  backgroundImage: "url('/images/fruits_vegetables.jpg')", backgroundSize: '100% 100%',
                                }} >

                                </Box>
                            </Box> */}
                            </Paper>
                        </Box>
                    </div>
                </div>
            </ThemeProvider>

        </div>
    );
}
export default Login;