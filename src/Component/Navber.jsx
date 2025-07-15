import React, { useState } from 'react'
import { AppBar,Toolbar,Typography,IconButton,Button,Drawer,List,ListItem,ListItemText,useMediaQuery } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { useTheme } from '@mui/material'
import App from '../App';



function Navber() {
  const [ open,setOpen] =   useState(false);
  const Theme = useTheme();
  const IsMobile = useMediaQuery(Theme.breakpoints.down("sm"))

  const menuItems = ["About","Services" ,"Projects" ,"COntactS"]
  return (
    <>
<AppBar classes=""   elevation={0}
  position="static"
  className="bg-[#002228] border-b-2 border-violet-600"  

  sx={{
    backgroundColor: '#002228',
    borderBottom: '1px solid gray',
  }}

 >

<Toolbar className='flex justify-between'>

    <img className='h-6 ' src="/public/Logo.png" alt="" />
  {IsMobile ? (
<div>
  <IconButton color="inherit" onClick={()=> setOpen(true)}> 
<MenuIcon/>
  </IconButton>
</div>
):(
  <>
  <Typography sx={{flexGrow:1
  }}>

  </Typography>
  
{menuItems.map((item)=>(
  <Button className='flex justify-center gap-4 text-center' color="inherit" key={item}> {item}</Button>
))}
<Button variant='outlined' className='gap-4 flex'
sx={{
color:"black",
backgroundColor:"#0FF1F6",
borderRadius:"6rem",
px:2,



}}
>Book a Demo</Button>



<Button variant='outlined' className='gap-4 my-2 mt-4'
sx={{

color:"white",
borderRadius:"6rem",
border:"1px solid white",
px:2,


}}
>Contact Us</Button>

</>
) }

</Toolbar>
</AppBar>

<Drawer anchor='left' open={open} onClose={()=> setOpen(false)}>

  <List>
{menuItems.map((item)=>(

  <ListItem button key={item}  onClick={()=> setOpen(false)}>
    <ListItemText>{item}</ListItemText>
  </ListItem>
))}

<ListItem button> <ListItemText primary="Book a Demo"/></ListItem>
<ListItem button> <ListItemText primary="Contact Us"/></ListItem>

</List>
</Drawer>




    </>)}

export default Navber;
