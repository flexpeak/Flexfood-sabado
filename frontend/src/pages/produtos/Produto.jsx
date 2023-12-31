import { MoreVert } from '@mui/icons-material'
import { Avatar, Card, CardActions, CardContent, 
    CardHeader, CardMedia, IconButton, Menu, 
    MenuItem, Typography } from '@mui/material'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Produto = ({ produto }) => {
    const [anchorEl, setAnchorEl] = useState(null)
    const [open, setOpen] = useState(false)
    const navigate = useNavigate()

    const handleClick = (evento) => {
        setAnchorEl(evento.currentTarget)
        setOpen(true)
    }

    return (
        <Card sx={{ maxWidth: 345, marginRight: 2 }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
                        R
                    </Avatar>
                }
                action={
                    <>
                        <IconButton aria-label="settings" onClick={handleClick}>
                            <MoreVert />
                        </IconButton>
                        <Menu open={open} anchorEl={anchorEl} onClose={(e) => setOpen(false)}>
                            <MenuItem onClick={ () => { navigate('/produtos/form/'
                             + produto.id) } }>Editar</MenuItem>
                            <MenuItem>Excluir</MenuItem>
                        </Menu>
                    </>
                }
                title={produto.nome}
                subheader={"R$ " + produto.valor}
            />
            <CardMedia
                component="img"
                height="194"
                image={process.env.REACT_APP_HOST_API + produto.foto}
                alt=""
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {produto.descricao}
                </Typography>

            </CardContent>
            <CardActions disableSpacing>
                Quantidade em estoque: {produto.quantidade_estoque}
            </CardActions>
        </Card>
    )
}

export default Produto