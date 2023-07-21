import React, {useState} from 'react';
import { Drawer, IconButton, List, Button, ListItemButton, Typography} from '@mui/material';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

const DrawerComp = ({links}) => {
    const [open, setOpen] = useState(false)

return(
    <>
    <Drawer className='sideDrawer'  anchor='right' PaperProps={{sx:  {backgroundColor: '#3390FF', width: "50%"},
    }} 
    open={open} onClose={() => setOpen(false)}>
        
    <List>
    <Typography>Logo</Typography>
        <ListItemButton onClick={()=>setOpen(false)}>
            <Button sx={{color: 'white'}} href='#main'>Home</Button>
        </ListItemButton>
        <ListItemButton onClick={()=>setOpen(false)}>
        <Button sx={{color: 'white'}} href='#about'>About</Button>
        </ListItemButton>
        <ListItemButton onClick={()=>setOpen(false)}>
        <Button sx={{color: 'white'}} href='#services'>Services</Button>
        </ListItemButton>
        <ListItemButton onClick={()=>setOpen(false)}>
        <Button sx={{color: 'white'}} href='#contact'>Contact</Button>
        </ListItemButton>
    </List>
    </Drawer>
    <IconButton sx={{marginLeft: "auto", color: 'white'}} onClick={()=>setOpen(!open)}>
        <MenuRoundedIcon></MenuRoundedIcon>
    </IconButton>
    </>
)
}
export default DrawerComp