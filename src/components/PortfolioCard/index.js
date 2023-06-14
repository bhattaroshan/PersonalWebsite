import PropTypes from 'prop-types';
// @mui
import { Box, Card, Link, Typography, Stack, CardMedia, CardContent, CardActions, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import BookPlaceholder from '../../assets/images/book_placeholder.jpeg';


export default function PortfolioCard({ product }) {
  const { name, cover, price, colors, status, priceSale } = product;

  return (
      <Card sx={{display:'flex', width:'100%', marginTop:'20px'}}>
        <CardMedia 
        sx={{height:'200px', objectFit:'cover'}}
        component="img"
        image= {BookPlaceholder}
        /> 
        <Box sx={{width:'100%', display:'flex', flexDirection:'column', justifyContent:'space-between'}}>
          <CardContent>
            <Typography sx={{fontSize:'30px', fontWeight:'700'}}>Data over sound</Typography>
            <Typography sx={{fontWeight:'200'}}>This is the test test test</Typography>
          </CardContent>
          <CardActions>
            <Button>Learn More</Button>
          </CardActions>
        </Box>
      </Card>

  );
}