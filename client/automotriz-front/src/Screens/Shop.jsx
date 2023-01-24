import { Grid } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import CardComp from '../Components/CardComp'

const Shop = () => {
  return (
    <Container >
    <Grid item container spacing={2} marginTop="2px" >
        <Grid item xs={12} md={4} sm={6}>
            <CardComp title={"Hola"} subtitle={"Esto es el subtitulo"} imageUrl={"https://images.unsplash.com/photo-1578632749014-ca77efd052eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"}/>
        </Grid>
        <Grid  item xs={12} md={4} sm={6}>
            <CardComp title={"Hola"} subtitle={"Esto es el subtitulo"} imageUrl={"https://images.unsplash.com/photo-1578632749014-ca77efd052eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"}/>
        </Grid>
        <Grid item xs={12} md={4} sm={6}>
            <CardComp title={"Hola"} subtitle={"Esto es el subtitulo"} imageUrl={"https://images.unsplash.com/photo-1578632749014-ca77efd052eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"}/>
        </Grid>
        <Grid item xs={12} md={4} sm={6}>
            <CardComp title={"Hola"} subtitle={"Esto es el subtitulo"} imageUrl={"https://images.unsplash.com/photo-1578632749014-ca77efd052eb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"}/>
        </Grid>
    </Grid>
    </Container>
  )
}

export default Shop