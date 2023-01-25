import { Grid } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import CardComp from '../Components/CardComp'

const list=[
    {
        "id":1,
        "name":"test",
        "subtitulo":"esto es un subtitulo"
    },
    {
        "id":2,
        "name":"test1",
        "subtitulo":"esto es un subtitulo2"
    },
    {
        "id":3,
        "name":"test2",
        "subtitulo":"esto es un subtitulo2"
    },
    {
        "id":4,
        "name":"test3",
        "subtitulo":"esto es un subtitulo2"
    }
]


const Shop = () => {
  return (
    <Container>
    <Grid item container spacing={2} marginTop="2px"  >
        {list.map((item)=>(
            <Grid item xs={12} md={4} sm={6} spacing={2} justify="center" >
                <CardComp title={item.name} subtitle={item.subtitulo} imageUrl={"https://images.unsplash.com/photo-1578632749014-ca77efd052eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"}/>
            </Grid>
        ))}
    </Grid>
    </Container>
  )
}

export default Shop