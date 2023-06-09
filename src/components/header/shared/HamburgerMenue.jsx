import React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['مشاوره پزشکی', 'مشاوره روانشناسی', 'آزمایش در محل', 'نوبت دهی', 'بانک سلامت', 'مجله سلامت'].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton style={{fontWeight: '800'}}>
              <ListItemText primary={text} style={{textAlign: 'right', padding: '0 10px'}} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['برای پزشکان', 'قوانین', 'سوالات متداول'].map((text) => (
          <ListItem key={text} disablePadding>
            <ListItemButton >
              <ListItemText primary={text} style={{textAlign: 'right', padding: '0 10px'}} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
        <React.Fragment key={'right'}>
          <Button onClick={toggleDrawer('right', true)}><MenuIcon></MenuIcon></Button>
          <Drawer
            anchor={'right'}
            open={state['right']}
            onClose={toggleDrawer('right', false)}
          >
            {list('right')}
          </Drawer>
        </React.Fragment>
    </div>
  );
}