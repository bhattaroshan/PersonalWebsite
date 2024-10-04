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
          <div className='flex flex-col p-4 justify-between h-full'>
            <div>
              <p className='text-2xl font-bold my-4'>{content.title}</p>
              <p>{content.preface}</p>
            </div>
            <div className='flex flex-row gap-4 justify-center my-4'>
              {
                link &&  
                <Button className="w-36" variant='contained' color='primary' onClick={handleLink}>Source Code</Button>
              }
              {
                demo &&  <Button className="w-36" variant='contained' color='primary' onClick={handleDemo}>Demo</Button> 
              }
            </div>
          </div>
      </Card>

  );
}