import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import WaterDropIcon from '@mui/icons-material/WaterDrop';
import "./infobox.css";

export default function infobox({info}){
    const init_url="https://images.unsplash.com/photo-1545134969-8debd725b007?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"
    const hot_url="https://images.unsplash.com/photo-1447601932606-2b63e2e64331?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"
    const cold_url="https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D"
    const rain_url="https://images.unsplash.com/photo-1613739118925-cde1e8f5d65b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFpbiUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D"

    
    return (
        <div className="infobox">
            
            <div className='card'>
            <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80 ? {rain_url} : (info.temp > 15 ? hot_url : cold_url)}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}{info.humidity>80 ? <WaterDropIcon/>: (info.temp > 15 ? <WbSunnyIcon/> : <AcUnitIcon/>)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         <p>Temprature : {info.temp}&deg;</p>
         <p>Humidity : {info.humidity}</p>
         <p>Min temp : {info.temp_min}&deg;</p>
         <p>Max temp : {info.temp_max}&deg;</p>
         <p>The weather can be described as {info.weather}.The weather feels like {info.feelslike}&deg;</p>




        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>

            </div>
            
            
        </div>
    );
}