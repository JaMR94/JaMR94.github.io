import * as React from 'react';
import { Box } from '@mui/system';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';

const Menunav = () => {
const [value, setValue] = React.useState('recents');
const handleChange = (event, newValue) => {
setValue(newValue); };
const [anchorEl, setAnchorEl] = React.useState(null);
const open = Boolean(anchorEl);
const handleClick = (event) => {
  setAnchorEl(event.currentTarget);
};
const handleClose = () => {
  setAnchorEl(null);
};
  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        
        <BottomNavigationAction label="Inicio"/>
        <div>
            <BottomNavigationAction id="figurasmenu" label="Figuras"
            MenuListProps={{
            'aria-labelledby': 'demo-customized-button',
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            >
                <MenuItem onClick={handleClose} disableRipple>
                Edit
                </MenuItem>
                <MenuItem onClick={handleClose} disableRipple>
                Duplicate
                </MenuItem>
                <Divider sx={{ my: 0.5 }} />
                <MenuItem onClick={handleClose} disableRipple>
                Archive
                </MenuItem>
                <MenuItem onClick={handleClose} disableRipple>
                More
                </MenuItem>
            </BottomNavigationAction>
        </div>


        <BottomNavigationAction label="Mangas" />


        <BottomNavigationAction label="Apparel" />


        <BottomNavigationAction label="Preventas" />
        <BottomNavigationAction label="Juegos" />
        <BottomNavigationAction label="Otros" />


        <BottomNavigationAction label="Series" />


        <BottomNavigationAction label="Rebajas" />
      </BottomNavigation>
    </Box>
  );
}
export default Menunav