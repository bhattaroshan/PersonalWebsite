import Navbar from './components/Navbar';
import {createTheme,ThemeProvider} from '@mui/material/styles';
import Map from './components/Map';

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
    <ThemeProvider theme={theme}>
      <Navbar/>
      <h1>Travels</h1>
      <Map/>
    </ThemeProvider>
  );
}

export default App;
