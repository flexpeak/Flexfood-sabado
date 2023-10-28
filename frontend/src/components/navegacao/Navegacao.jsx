import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import { AddShoppingCart, Home, LunchDining, Restaurant, ShoppingBag, ShoppingCart } from '@mui/icons-material';
import { Divider, Drawer, List } from '@mui/material';
import ItemDaLista from '../../components/itemDaLista/ItemDaLista';


function Navegacao() {
  const navigate = useNavigate()
  const [drawer, setDrawer] = React.useState(false)
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
              onClick={()=>{setDrawer(true)}}
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
          <Drawer open = {drawer} onClose= {(e) => setDrawer(false)}>
            <Box sx={{width:250}}>
                <List>
                  <ItemDaLista texto ='Home' icone={<Home/>} link='/dashboard'/>
                  {(tipoUsuario === 'R' && <ItemDaLista texto ='Restaurante' icone={<Restaurant/>} 
                  link='/restaurante'/>)}
                  {(tipoUsuario === 'R' && <ItemDaLista texto ='Produtos' icone={<LunchDining/>} 
                  link='/produtos'/>)}
                  {(tipoUsuario === 'R' && <ItemDaLista texto ='Pedidos' icone={<ShoppingCart/>}
                   link='/pedidos'/>)}
                  {(tipoUsuario === 'C' && <ItemDaLista texto ='Fazer Pedido' icone={<AddShoppingCart/>} 
                  link='/fazerpedido'/>)}
                  {(tipoUsuario === 'C' && <ItemDaLista texto ='Meus Pedidos' icone={<ShoppingBag/>}
                   link='/meuspedidos'/>)}
                  <Divider/>
                  <Box sx = {{mt:2, mx:2}}>
                      {(tipoUsuario ==='R')? <Typography>Tipo: Restaurante</Typography>:
                      <Typography>Tipo: Cliente</Typography>}
                  </Box>
                </List>
            </Box>
          

          </Drawer>
        </AppBar>
      </Box>

    </>
  )
}

export default Navegacao
