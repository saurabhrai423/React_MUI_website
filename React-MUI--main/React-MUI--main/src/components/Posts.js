import React from 'react'
import {Card,CardHeader,Avatar,IconButton,CardMedia,CardContent,Typography, CardActions,Checkbox} from "@mui/material"
import {MoreVert,Favorite,Share,FavoriteBorder} from "@mui/icons-material"
import pic from "../images/profile.jpg"

const Posts = () => {
  return (
  <Card sx={{margin:5}}>
        <CardHeader
        avatar={
          <Avatar sx={{bgcolor:"red"}} ></Avatar>
        }
        action={

          <IconButton aria-label="settings">
            <MoreVert/>
          </IconButton>
          
        }
        title="Banglore City"
        subheader=""
       />
       <CardMedia
       component="img"
       height="280"
       image={pic}
       alt="john grren's picture"
       />
       <CardContent>
        <Typography component="h6">
        Columns of Growth: A glimpse of the proposed design of the to-be redeveloped Bengaluru Cant. Railway Station.

        </Typography>
       </CardContent>
       <CardActions disableSpacing>
        <IconButton aria-label="favorites">
       <Checkbox icon={<FavoriteBorder/>} checkedIcon={<Favorite  sx={{color:"red"}}/>}/>
        </IconButton>
         <IconButton aria-label="share">
          <Share/>
        </IconButton>
       </CardActions>

      


      </Card>
  )
}

export default Posts