import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'
import figuraErro from './erro.avif'

function Error404() {
    return (
        <Container style={{display: 'flex', justifyContent: 'center', alignItens: 'center', heigth: '100vh'}}>
            <Card style={{ width: '400px' }}>
                <Card.Img variant="top" src={figuraErro} />
                <Card.Body style={{}}>
                    <Card.Title style={{ width: '144pix', textAlign: 'center',display: 'flex' 
                     , justifyContent: 'center', alignItens: 'center' }}>Error</Card.Title>
                    <Card.Text style={{ width: '72pix', textAlign: 'center',display: 'flex' 
                     , justifyContent: 'center', alignItens: 'center' }}>
                        Page not Found
                    </Card.Text>
                    <Button variant="outline-danger" href='/'>Home</Button>
                </Card.Body>
            </Card>
        </Container>
    )
}
export default Error404
