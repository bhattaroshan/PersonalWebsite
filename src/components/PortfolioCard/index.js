import PropTypes from 'prop-types';
// @mui
import { Box, Card, Link, Typography, Stack, CardMedia, CardContent, CardActions, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import BookPlaceholder from '../../assets/images/book_placeholder.jpeg';


export default function PortfolioCard({content}) {
  const { title,preface,thumbnail,link} = content;

  function handleLink(){
    window.open(link, '_blank');
  }

  return (
      <Card sx={{display:'flex', flexDirection:'column', width:'100%', marginTop:'20px', alignItems:'center'}}>
        <CardMedia 
        sx={{height:'200px', objectFit:'cover'}}
        component="img"
        image= {thumbnail}
        /> 
        <Box sx={{display:'flex', flexDirection:'column'}}>
          <CardContent>
            <Typography sx={{fontSize:'30px', fontWeight:'500'}}>{content.title}</Typography>
            <Typography sx={{fontWeight:'200', marginTop:'10px'}}>{content.preface}</Typography>
          </CardContent>
          <CardActions sx={{justifyContent:'center', marginBottom:'15px'}}>
            <Button variant='contained' color='primary'>Learn More</Button>
            <Button variant='contained' color='primary' onClick={handleLink}>Source Code</Button>
          </CardActions>
        </Box>
      </Card>

  );
}