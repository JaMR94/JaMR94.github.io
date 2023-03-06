import * as React from 'react';

const menunav = () => {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Inicio" icon={<Icon1 />} />
        <div>
            <BottomNavigationAction id="figurasmenu" label="Figuras" icon={<Icon2 />} />
            <StyledMenu
            id="figurasmenu"
            MenuListProps={{
            'aria-labelledby': 'demo-customized-button',
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            >
                <MenuItem onClick={handleClose} disableRipple>
                <EditIcon />
                Edit
                </MenuItem>
                <MenuItem onClick={handleClose} disableRipple>
                <FileCopyIcon />
                Duplicate
                </MenuItem>
                <Divider sx={{ my: 0.5 }} />
                <MenuItem onClick={handleClose} disableRipple>
                <ArchiveIcon />
                Archive
                </MenuItem>
                <MenuItem onClick={handleClose} disableRipple>
                <MoreHorizIcon />
                More
                </MenuItem>
            </StyledMenu>
        </div>


        <BottomNavigationAction label="Mangas" icon={<Icon3 />} />


        <BottomNavigationAction label="Apparel" icon={<Icon4 />} />


        <BottomNavigationAction label="Preventas" icon={<Icon5 />} />
        <BottomNavigationAction label="Juegos" icon={<Icon6 />} />
        <BottomNavigationAction label="Otros" icon={<Icon7 />} />


        <BottomNavigationAction label="Series" icon={<Icon8 />} />


        <BottomNavigationAction label="Rebajas" icon={<Icon9 />} />
      </BottomNavigation>
    </Box>
  );
}
export default menunav