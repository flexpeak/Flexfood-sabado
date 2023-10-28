import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import { ShoppingCart } from '@mui/icons-material';


function Dashboard() {
  const navigate = useNavigate()
  const tipoUsuario = localStorage.getItem('user-type')
  const handleSair = () => {
    localStorage.removeItem('user-token')
    navigate('/login')
  }
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ backgroundColor: 'red' }}>
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              FlexFood
            </Typography>
            {
              tipoUsuario === 'C' && (
                <IconButton color="inherit" >
                  <ShoppingCart />
                </IconButton>
              )
            }
            <Button color="inherit" onClick={handleSair}>Sair</Button>
          </Toolbar>
        </AppBar>
      </Box>

    </>
  )
}

export default Dashboard
