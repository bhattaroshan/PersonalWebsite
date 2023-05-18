import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {Button,Rating} from '@mui/material';


function TiledBook({name,author,img,rating}) {
    return (
      <Card sx={{ display: 'flex', width: "400px"}}> 
      <CardMedia
          component="img"
          sx={{ width: 151, maxHeight: 230}}
          image={img}
          alt={name}
        />
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <CardContent sx={{ flex: '1 0 auto' }}>
            <Typography component="div" variant="h6">
                {name}
            </Typography>
            <Typography variant="subtitle3" color="text.secondary" component="div">
                {author}
            </Typography>
            <Rating name="read-only" value={rating} size="small" readOnly sx={{mt:'10px'}} precision={0.5}/>
          </CardContent>
          <Box sx={{ display: 'flex', justifyContent:'center', alignItems: 'center', pl: 1, pb: 1 }}>
            <Button variant="contained" sx={{borderRadius: "20px", minWidth:"120px", 
                    textTransform:'none', backgroundColor:'#404040'}} 
                    disableElevation>
                Review
            </Button>
          </Box>
        </Box>
       
      </Card>
    );
}

export default TiledBook;