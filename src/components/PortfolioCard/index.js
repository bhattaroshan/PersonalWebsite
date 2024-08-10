import PropTypes from 'prop-types';
// @mui
import { Box, Card, Link, Typography, Stack, CardMedia, CardContent, CardActions, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import BookPlaceholder from '../../assets/images/book_placeholder.jpeg';


export default function PortfolioCard({content}) {
  const { title,preface,thumbnail,link,demo} = content;

  function handleLink(){
    window.open(link, '_blank');
  }

  function handleDemo(){
    window.open(demo, '_blank');
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
              {content.preface}
          </CardContent>
          <CardActions sx={{justifyContent:'center', marginBottom:'15px'}}>
            <Button variant='contained' color='primary'>Learn More</Button>
            {
              link &&  
              <Button variant='contained' color='primary' onClick={handleLink}>Source Code</Button>
            }
            {
              demo &&  <Button variant='contained' color='primary' onClick={handleDemo}>Demo</Button> 
            }
          </CardActions>
        </Box>
      </Card>

  );
}