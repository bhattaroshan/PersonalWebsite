import React from 'react'
import TiledBook from '../../components/TiledBook';
import { Grid,Box,Typography } from '@mui/material';

import book_everybody_lies from '../../assets/images/book_everybody_lies.jpeg';
import book_zero from '../../assets/images/book_zero.jpeg';
import book_sapiens from '../../assets/images/book_sapiens.jpeg';
import book_hooked from '../../assets/images/book_hooked.jpeg';
import book_binod_chaudhary from '../../assets/images/book_binod_chaudhary.jpeg';
import book_homo_deus from '../../assets/images/book_homo_deus.jpeg';
import book_the_compound_effect from '../../assets/images/book_the_compound_effect.jpeg';
import book_totto_chan from '../../assets/images/book_totto_chan.jpeg';

function BooksPage() {
  return (
    <Box sx={{display:'flex', flexDirection:'column', alignItems:'center'}}>
        <Typography sx={{fontSize:'40px', mb:'40px', mt:'40px'}}>Books</Typography>
    <Grid flex container spacing={3} sx={{justifyContent:'center', alignItems:'stretch'}}>
        <Grid item sx={{display:'flex', maxWidth:'320px'}}>
            <TiledBook name="Everybody Lies" author="Seth Stephens" img={book_everybody_lies}/>
        </Grid>
        <Grid item sx={{display:'flex', maxWidth:'320px'}}>
            <TiledBook name="Zero" author="Charles Seife" img={book_zero}/>
        </Grid>
        <Grid item sx={{display:'flex', maxWidth:'320px'}}>
            <TiledBook name="Sapiens" author="Yuval Noah Harari" img={book_sapiens}/>
        </Grid>
        <Grid item sx={{display:'flex', maxWidth:'320px'}}>
            <TiledBook name="Hooked" author="Nir Eyal, Ryan Hoover" img={book_hooked}/>
        </Grid>
        <Grid item sx={{display:'flex', maxWidth:'320px'}}>
            <TiledBook name="Binod Chaudhary" author="Sudeep Shrestha" img={book_binod_chaudhary}/>
        </Grid>
        <Grid item sx={{display:'flex', maxWidth:'320px'}}>
            <TiledBook name="Homo Deus" author="Yuval Noah Harari" img={book_homo_deus}/>
        </Grid>
        <Grid item sx={{display:'flex', maxWidth:'320px'}}>
            <TiledBook name="The Compound Effect" author="Darren Hardy" img={book_the_compound_effect}/>
        </Grid>
        <Grid item sx={{display:'flex', maxWidth:'320px'}}>
            <TiledBook name="Totto Chan" author="Tetsuko Kuroyanagi" img={book_totto_chan}/>
        </Grid>
    </Grid>
    </Box>
  )
}

export default BooksPage;