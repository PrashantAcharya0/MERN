'use client';
import $axios from '@/lib/axios/axios.instance';
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Badge } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import * as React from 'react';
const appName = 'Big Mart';
const drawerWidth = 240;
const navItems = [
  { id: 1, label: 'Home', path: '/' },
  {
    id: 2,
    label: 'Cart',
    path: '/cart',
    iconButton: true,
    icon: <ShoppingCartOutlinedIcon />,
    iconColor: {
      drawer: '#000',
      nav: '#fff',
    },
    batch: {
      number: 4,
      isBatchNeeded: true,
    },
  },
];

const Header = (props) => {
  const { window } = props;
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  //   handle logout
  const handleLogout = () => {
    localStorage.clear();

    router.push('/login');
  };

  const goToHome = () => {
    router.push('/');
  };

  const { isPending, data } = useQuery({
    queryKey: ['cart-item-count'],
    queryFn: async () => {
      return await $axios.get('/cart/item/count');
    },
  });

  const itemCount = data?.data?.itemCount;

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography
        variant="h6"
        sx={{ my: 2, cursor: 'pointer' }}
        onClick={goToHome}
      >
        {appName}
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem
            key={item.id}
            disablePadding
            className="flex flex-col justify-center items-center gap-4 "
          >
            {item.iconButton ? (
              <IconButton
                sx={{
                  color: item.iconColor.drawer,
                }}
                onClick={() => {
                  router.push(item.path);
                }}
              >
                {item.icon}
              </IconButton>
            ) : (
              <ListItemButton
                onClick={() => {
                  router.push(item.path);
                }}
              >
                <ListItemText primary={item.label} />
              </ListItemButton>
            )}
          </ListItem>
        ))}
        <Button variant="contained" onClick={handleLogout}>
          logout
        </Button>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex', mb: '3rem' }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar className="bg-pink-600 ">
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            onClick={goToHome}
            sx={{
              flexGrow: 1,
              cursor: 'pointer',
              display: { xs: 'none', sm: 'block' },
            }}
          >
            {appName}
          </Typography>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            {navItems.map((item) => {
              return item.iconButton ? (
                <Badge badgeContent={itemCount} color="secondary" key={item.id}>
                  <IconButton
                    sx={{
                      color: item.iconColor.nav,
                    }}
                    onClick={() => {
                      router.push(item.path);
                    }}
                  >
                    {item.icon}
                  </IconButton>
                </Badge>
              ) : (
                <Button
                  key={item.id}
                  sx={{ color: '#fff' }}
                  onClick={() => {
                    router.push(item.path);
                  }}
                >
                  {item.label}
                </Button>
              );
            })}
            <Button disableRipple sx={{ color: '#fff' }} onClick={handleLogout}>
              logout
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
};

export default Header;
