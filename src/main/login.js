import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';

let login = () => {
    let linearGradient = 'linear-gradient(0.3turn, #73355C,#AC3028,#B78838,#254828,#4B8316)';
    return (
        <>

            <Container
                maxWidth="md"
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    height: '100vh',
                    background: linearGradient
                }}
            >
                <Typography>Hello</Typography>
            </Container>
        </>
    );
}
export default login;