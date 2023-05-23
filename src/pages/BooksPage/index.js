import React,{useEffect,useState} from 'react'
import {TiledBook,TiledBookTemplate} from '../../components/TiledBook';
import { Grid,Box,Typography } from '@mui/material';
import bookList from '../../contants/books';
import axios from "axios";
import { useFetch } from '../../hooks/useFetch';
import bookAnim from '../../assets/images/book-loading.gif';

const baseURL = "http://openlibrary.org/people/bhattaroshan/books/already-read.json";

// function BooksPage() {
//   return (
//     <Box  sx={{display:'flex', flexDirection:'column', alignItems:'center'}}>
//         <Typography sx={{fontSize:'40px', mb:'40px', mt:'40px', fontWeight:'700'}}>Books</Typography>
//         <Grid container spacing={4} sx={{display:'flex', justifyContent:'center', alignItems:'center', width:'80%'}}>
//             {
//                 bookList.map((v,i)=>{
//                     return <Grid item key={i} sx={{display:'flex'}}>
//                         <TiledBook name={v.name} author={v.author} img={v.img} rating={v.rating}/>
//                     </Grid>
//                     })
//                 }
//         </Grid>
//     </Box>
//   )
// }

function TemplateBooks(){
    return(
        <Grid item sx={{display:'flex'}}>
            <TiledBook name={""} 
                    author={""} 
                    img={""} 
                    rating={""}/>
        </Grid>
    );
}

function BooksPage() {
    // const [bookLists,setBookLists] = useState([]);
    const {isLoading,error,data:bookData} = useFetch(baseURL,5);
    const bookLists = bookData?.data?.reading_log_entries;

    // useEffect(()=>{
    //     axios.get(baseURL).then((response)=>{
    //         const data = response.data.reading_log_entries;
    //         setBookLists(data);
    //     }).catch((e)=>{
    //         console.log('the error in major hit is ',e);
    //     });
    
    // },[]);

    return (
      <Box  sx={{display:'flex', flexDirection:'column', alignItems:'center'}}>
          <Typography sx={{fontSize:'40px', mb:'40px', mt:'40px', fontWeight:'700'}}>Books</Typography>
          <Grid container spacing={4} sx={{display:'flex', justifyContent:'center', alignItems:'center', width:'80%'}}>
              {
                  !isLoading?
                  bookLists?.map((v,i)=>{
                      return <Grid item key={i} sx={{display:'flex'}}>
                          <TiledBook name={v?.work?.title} 
                                     author={v?.work?.author_names[0]} 
                                     img={v?.work?.cover_id} 
                                     rating={3.4}/>
                      </Grid>
                      }):
                      <>
                        <TiledBookTemplate name="----" author="----" img={bookAnim}/>
                        <TiledBookTemplate name="----" author="----" img={bookAnim}/>
                        <TiledBookTemplate name="----" author="----" img={bookAnim}/>
                        <TiledBookTemplate name="----" author="----" img={bookAnim}/>
                        <TiledBookTemplate name="----" author="----" img={bookAnim}/>
                        <TiledBookTemplate name="----" author="----" img={bookAnim}/>
                        <TiledBookTemplate name="----" author="----" img={bookAnim}/>
                        <TiledBookTemplate name="----" author="----" img={bookAnim}/>
                        <TiledBookTemplate name="----" author="----" img={bookAnim}/>
                        <TiledBookTemplate name="----" author="----" img={bookAnim}/>
                      </>
                  }
          </Grid>
      </Box>
    )
  }
  

export default BooksPage;