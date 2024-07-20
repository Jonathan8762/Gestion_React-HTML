import React from 'react';
import { Link } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ArticleIcon from '@mui/icons-material/Article';
import Inventory2Icon from '@mui/icons-material/Inventory2';

interface MenuLateralProps {
  open: boolean;
  toggleDrawer: () => void;
}

const MenuLateral: React.FC<MenuLateralProps> = ({ open, toggleDrawer }) => {
  return (
    <Drawer anchor="left" open={open} onClose={toggleDrawer}>
      <List>
        <ListItem button component={Link} to="/Inicio">
          <ListItemIcon><HomeIcon /></ListItemIcon>
          <ListItemText primary="Inicio" />
        </ListItem>
        <ListItem button component={Link} to="/Productos">
          <ListItemIcon>< Inventory2Icon /></ListItemIcon>
          <ListItemText primary="Productos" />
        </ListItem>
        <ListItem button component={Link} to="/Movimientos">
          <ListItemIcon><ArticleIcon /></ListItemIcon>
          <ListItemText primary="Movimientos" />
        </ListItem>
        <ListItem button component={Link} to="/NuevoMovimento">
          <ListItemIcon><AddCircleIcon /></ListItemIcon>
          <ListItemText primary="Reportes" />
        </ListItem>

      </List>
    </Drawer>
  );
};

export default MenuLateral;