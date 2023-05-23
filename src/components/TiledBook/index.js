import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {Button,Rating} from '@mui/material';
import axios from "axios";
import {useState,useEffect} from 'react';
import bookPlaceholder from '../../assets/images/book_placeholder.jpeg';
import bookAnim from '../../assets/images/book-loading.gif';
import { useFetch } from '../../hooks/useFetch';

export function TiledBookTemplate({name="",author="",img="",rating=""}){
    return <Card sx={{ display: 'flex', width: "300px", height:"220px"}}> 
                <CardMedia
                    component="img"
                    sx={{ width: 151, maxHeight: 220, borderTopRightRadius: '5px', borderBottomRightRadius: '5px', objectFit:'contain'}}
                    image={img}
                    alt={name}
                />
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h6">
                        {name.slice(0,Math.min(name.length,27))}
                    </Typography>
                    <Typography variant="subtitle3" color="text.secondary" component="div">
                        {author}
                    </Typography>
                    <Rating name="read-only" value={rating} size="small" readOnly sx={{mt:'10px'}} precision={0.5}/>
                    </CardContent>
                    <Box sx={{ display: 'flex', justifyContent:'center', alignItems: 'center', pl: 1, pb: 1 }}>
                    <Button variant="outlined" sx={{borderRadius: "20px", minWidth:"120px", 
                            textTransform:'none'}} 
                            disableElevation>
                        Review
                    </Button>
                    </Box>
                </Box>
     
            </Card>
}

export function TiledBook({name,author,img,rating}) {

    const {isLoading,error,data:bookData} = useFetch(`https://covers.openlibrary.org/b/id/${img}.json`,5);

    const urlData = bookData?.data?.source_url;
    var urlImage = isLoading?bookAnim:error||urlData===""?bookPlaceholder:urlData;

    return (
        <TiledBookTemplate name={name} author={author} img={urlImage} rating={rating}/>
    );
}
