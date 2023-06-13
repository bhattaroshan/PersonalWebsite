import { useState,useEffect } from 'react';
import Navbar from './components/Navbar';
import {createTheme,ThemeProvider} from '@mui/material/styles';
import TravelPage from './pages/TravelPage';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import HomePage from '../src/pages/HomePage';
import BooksPage from './pages/BooksPage';
import PortfolioPage from './pages/PortfolioPage';

const theme = createTheme({
  palette:{
    primary:{
      main: "#111"
    },
    secondary:{
      main:"#ffffff"
    },
  },
  typography: {
    fontFamily:'Poppins,Rosario,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto'
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
          <Route path="portfolio" element={<PortfolioPage/>}/>  
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
