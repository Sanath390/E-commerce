import logo from './logo.svg';
import './App.css';
import Login from './main/components/organisms/login';
import { Box } from '@mui/material';

function App() {
  let linearGradient = 'linear-gradient(0.3turn, #73355C,#AC3028,#B78838,#254828,#4B8316)';
  return (
    <>
    
    <Box
      sx={{
        mt:0,
        background: linearGradient,
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <Login/>
    </Box>
    
    </>
  )
}

export default App;
