import React from 'react'
import TiledBook from '../../components/TiledBook';
import { Grid,Box,Typography } from '@mui/material';
import bookList from '../../contants/books';


function BooksPage() {
  return (
    <Box sx={{display:'flex', flexDirection:'column', alignItems:'center'}}>
        <Typography sx={{fontSize:'40px', mb:'40px', mt:'40px', fontWeight:'700'}}>Books</Typography>
        <Grid flex container spacing={4} sx={{justifyContent:'center', alignItems:'stretch'}}>
            {
                bookList.map((v,i)=>{
                    return <Grid item key={i} sx={{display:'flex', width:'320px'}}>
                        <TiledBook name={v.name} author={v.author} img={v.img} rating={v.rating}/>
                    </Grid>
                    })
                }
    </Grid>
    </Box>
  )
}

export default BooksPage;