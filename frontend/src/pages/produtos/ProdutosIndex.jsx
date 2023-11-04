import { Box, Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navegacao from '../../components/navegacao/Navegacao'
import Produto from './Produto'
import api from '../../services/api'

const ProdutosIndex = () => {
    const navigate = useNavigate()
    const [produtos, setProdutos] = useState([])

    useEffect(() => {
        api.get('/produtos')
            .then(({ data }) => {
                setProdutos(data)
            })

    }, [])

    return (
        <>
            <Navegacao />
            <Box sx={{ mx: 3, my: 3 }}>
                <Button onClick={() => { navigate('/produtos/form') 
            }} variant='contained' color='error'>
                    Novo Produto
                </Button>
                <Box sx={{ display: 'flex', p: 1, m: 1}}>
                    {
                        produtos.map((produto) => (
                            <Produto produto={produto} />
                        ))
                    }
                </Box>


            </Box>

        </>
    )
}

export default ProdutosIndex