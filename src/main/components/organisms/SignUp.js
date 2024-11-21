import * as React from 'react';
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
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import { Link, replace, } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../molecules/AuthProvider';
import SignUpSuccess from '../atoms/SignUpSuccess';
import setTokenFunction from '../atoms/setTokenFunction';

let SignUp = () => {
    let linearGradient = 'linear-gradient(0.3turn, #73355C,#AC3028,#B78838,#254828,#4B8316)';

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
    const [showPassword, setShowPassword] = React.useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
    const handleClickShowConfirmPassword = () => setShowConfirmPassword((show) => !show);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [displaySnackbar, setDisplaySnackbar] = useState(false);
    // console.log("In signup.js below the useState",displaySnackbar);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const handleMouseUpPassword = (event) => {
        event.preventDefault();
    };

    const auth = useAuth();
    const navigate = useNavigate();
    const handleSignUp = async () => {
        if (password === confirmPassword) {
            const message = await setTokenFunction('signup', username, password, auth);
            if (message === 'User already exists') {
                alert('User already exists');
            } else {

                setDisplaySnackbar(true);
                setInterval(() => {
                    setDisplaySnackbar(false);
                    navigate('/', { replace: true });
                }, 5000);
            }
        }
    }

    return (
        <div key="signup">
            <ThemeProvider theme={theme}>
            <div class="bg-no-repeat bg-cover bg-center" style={{ backgroundImage: "url('images/background-images/nadine-primeau-sOMcKlIUiGA-unsplash.jpg')" }}>
                <Box sx={{
                    display: 'flex', justifyContent: 'center', height: 'auto', p: 5,
                    // background: linearGradient,
                    // backgroundAttachment: 'fixed'
                }}>
                    <Paper
                        square={false}
                        sx={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(4, 1fr)',
                            gridTemplateRows: '1fr',
                            gridTemplateAreas: ['. b1 b1 .',
                                '. b2 b2 .'
                            ],
                            width: 'auto',
                            height: 'auto',
                        }}

                    >

                        <SignUpSuccess
                            displaySnackbar={displaySnackbar} />
                        <Box sx={{ gridArea: 'b1',   display: 'flex', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
                            <Stack sx={{  flex: '1 0 auto', alignItems: 'center', flexWrap: 'wrap', pt: 3, width: '50%' }}>
                                <Box sx={{  display: 'flex', flexWrap: 'wrap', width: '70%', }}>
                                    <Box sx={{  display: 'flex', flexWrap: 'wrap', width: '100%' }}>
                                        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold',  alignSelf: 'end', pt: .4 }}>
                                            Sign Up
                                        </Typography>
                                        <Typography variant='subtitle2' sx={{ display: 'block', width: '100%' }}>Sign in with</Typography>
                                    </Box>
                                    <Box sx={{  width: '100%', p: 2 }}>
                                        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 0 }}>
                                            <Fab variant="extended" size='small' sx={{ bgcolor: 'white.main', textTransform: 'initial !important' }} disableRipple>
                                                <Box sx={{ height: '27px', width: '27px', mr: 1 }}>
                                                    <img src="/icons/google.svg" height='100%' width='100%' objectFit='contain' />
                                                </Box>
                                                <Box sx={{ display: 'flex', alignItems: 'center', }}>
                                                    Log in with Google
                                                </Box>
                                            </Fab>
                                        </Box>
                                        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
                                            <Fab variant="extended" size='small' sx={{ bgcolor: 'white.main', textTransform: 'initial !important' }} disableRipple>
                                                <Box sx={{ height: '27px', width: '27px', mr: 1 }}>
                                                    <img src="/icons/github2.svg" height='100%' width='100%' objectFit='contain' />
                                                </Box>
                                                <Box sx={{ display: 'flex', alignItems: 'center', }}>
                                                    Log in with GitHub
                                                </Box>
                                            </Fab>
                                        </Box>
                                        <Box style={{ width: '100%', height: '15px', borderBottom: '1px solid #B9B7BD', textAlign: 'center', }}
                                            sx={{ mt: 4, mb: 6 }}>
                                            <Typography variant='overline' sx={{
                                                bgcolor: 'white.main', textTransform: 'initial !important',
                                                padding: '0 10px'
                                            }}>Or
                                            </Typography>
                                        </Box>
                                        <Typography variant="body2" sx={{ fontWeight: '600', mt: 3 }}>Name</Typography>
                                        <FormControl sx={{ width: '100%' }} size='small'>
                                            <TextField key="outlined-name" label="Name" type="text" size='small' sx={{ mt: .5 }} onChange={(e) => setUsername(e.target.value)} />
                                        </FormControl>

                                        <Typography variant="body2" sx={{ fontWeight: '600', mt: 3 }}>Password</Typography>
                                        <FormControl sx={{ width: '100%', mb: 3, mt: .5 }} size='small'>
                                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                            <OutlinedInput
                                                key="outlined-adornment-password"
                                                onChange={(e) => setPassword(e.target.value)}
                                                type={showPassword ? 'text' : 'password'}
                                                endAdornment={
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                            aria-label="toggle password visibility"
                                                            onClick={handleClickShowPassword}
                                                            onMouseDown={handleMouseDownPassword}
                                                            onMouseUp={handleMouseUpPassword}
                                                            edge="end"
                                                        >
                                                            {showPassword ? <VisibilityOff /> : <Visibility />}
                                                        </IconButton>
                                                    </InputAdornment>
                                                }
                                                label="Password &nbsp;"
                                            />
                                        </FormControl>
                                        <Typography variant="body2" sx={{ fontWeight: '600', mt: 1, display: password ? 'block' : 'none' }}>Confirm Password </Typography>
                                        <FormControl sx={{ width: '100%', mb: 3, mt: .5, display: !password ? 'none' : '' }} size='small'>
                                            <InputLabel htmlFor="outlined-adornment-confirmPassword">Confirm Password </InputLabel>
                                            <OutlinedInput
                                                key="outlined-adornment-confirmPassword"
                                                onChange={(e) => setConfirmPassword(e.target.value)}
                                                type={showConfirmPassword ? 'text' : 'password'}
                                                endAdornment={
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                            aria-label="toggle confirmpassword visibility"
                                                            onClick={handleClickShowConfirmPassword}
                                                            onMouseDown={handleMouseDownPassword}
                                                            onMouseUp={handleMouseUpPassword}
                                                            edge="end"
                                                        >
                                                            {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                                                        </IconButton>
                                                    </InputAdornment>
                                                }
                                                label="Confirm Password &nbsp;"
                                            />
                                        </FormControl>
                                        <Box sx={{ display: 'flex', }}>
                                            <Typography variant='overline' sx={{ display: confirmPassword ? 'block' : 'none', color: password === confirmPassword ? 'green' : 'red' }}>
                                                {password === confirmPassword ? 'Passwords match!' : 'Passwords do not match!'}
                                            </Typography>
                                        </Box>
                                        {/* <Link to='/dashboard' style={{ textDecoration: 'none',color:'inherit'}}> */}
                                        <SignInButton variant='contained' sx={{ width: '100%', mt: 2.3 }} onClick={handleSignUp}>Sign Up</SignInButton>
                                        {/* </Link> */}

                                        <Box sx={{  display: 'flex', alignItems: 'center', justifyContent: 'center', mt: 3 }}>
                                            <Typography variant="overline" sx={{ bgcolor: 'white.main', textTransform: 'initial !important' }}>
                                                Already have an account?
                                            </Typography>
                                            <Link to='/' style={{ textDecoration: 'none', color: 'inherit' }}>
                                                <Typography variant="overline" sx={{ bgcolor: 'white.main', textTransform: 'initial !important', textDecoration: 'underline', fontWeight: '700' }}>
                                                    Log In
                                                </Typography>
                                            </Link>
                                        </Box>

                                    </Box>
                                </Box>
                                <Box sx={{  height: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'end', mt: 7, flexWrap: 'wrap', }}>
                                    <Typography variant="overline" sx={{  height: 'auto', textTransform: 'initial !important', }}>
                                        <CopyrightIcon fontSize='xsmall' sx={{ }} /> 2024. All rights reserved
                                    </Typography>
                                </Box>
                            </Stack>
                        </Box>
                    </Paper>
                </Box>
                </div>
            </ThemeProvider>
        </div>
    );
}
export default SignUp;