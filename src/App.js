import Navbar from './components/Navbar';
import {createTheme,ThemeProvider} from '@mui/material/styles';
import TravelPage from './pages/TravelPage';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import HomePage from '../src/pages/HomePage';

const theme = createTheme({
  palette:{
    primary:{
      main: "#000000"
    },
    secondary:{
      main:"#ffffff"
    },
  }
});

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<HomePage/>}/>
          <Route path="travel" element={<TravelPage/>}/>  
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
