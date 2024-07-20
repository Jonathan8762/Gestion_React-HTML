import React from 'react';
import {Toolbar, IconButton, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import '../App.css'; // Importa el archivo CSS

interface HeaderProps {
  toggleDrawer: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleDrawer }) => {
  return (
      <Toolbar className="header-toolbar">
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={toggleDrawer} className="menu-button">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className="header-title">
          Gestion Invetarario
        </Typography>
      </Toolbar>
  );
};

export default Header;