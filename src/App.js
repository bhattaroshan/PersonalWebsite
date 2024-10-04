import { useState,useEffect } from 'react';
import Navbar from './components/Navbar';
import {createTheme,ThemeProvider} from '@mui/material/styles';
import TravelPage from './pages/TravelPage';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import HomePage from '../src/pages/HomePage';
import BooksPage from './pages/BooksPage';
import PortfolioPage from './pages/PortfolioPage';
import AcademicsPage from './pages/AcademicsPage';
import ProgrammingPage from './pages/ProgrammingPage';
import ContactPage from './pages/ContactPage';
import LanguagePage from './pages/LanguagePage';
import MusicPage from './pages/MusicPage';
import BlogsPage from './pages/BlogsPage';

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
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={<HomePage/>}/>
          <Route path="travel" element={<TravelPage/>}/>  
          <Route path="books" element={<BooksPage/>}/>  
          <Route path="portfolio" element={<PortfolioPage/>}/>  
          <Route path="academics" element={<AcademicsPage/>}/>
          <Route path="programming" element={<ProgrammingPage/>}/>
          <Route path="contactme" element={<ContactPage/>}/>
          <Route path="language" element={<LanguagePage/>}/>
          <Route path="music" element={<MusicPage/>}/>
          <Route path="blogs" element={<BlogsPage/>}/>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
