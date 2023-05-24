import { useState,useEffect } from 'react';
import Navbar from './components/Navbar';
import {createTheme,ThemeProvider} from '@mui/material/styles';
import TravelPage from './pages/TravelPage';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import HomePage from '../src/pages/HomePage';
import BooksPage from './pages/BooksPage';

const theme = createTheme({
  palette:{
    primary:{
      main: "#101010"
    },
    secondary:{
      main:"#ffffff"
    },
  },
  typography: {
    fontFamily:'Rosario,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto'
  }
});

function App() {
  const [exDrawerOpen,setExDrawerOpen] = useState(false);

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Navbar setExDrawerOpen={setExDrawerOpen}/>
        <Routes>
          <Route exact path="/" element={<HomePage isDrawerOpen={exDrawerOpen}/>}/>
          <Route path="travel" element={<TravelPage/>}/>  
          <Route path="books" element={<BooksPage/>}/>  
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
