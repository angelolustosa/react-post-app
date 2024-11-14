import React from 'react'
import { Header } from '../header/Header'
import { Footer } from '../footer/Footer'
import { Container } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'

export const Layout = () => {
  return (
    <div>
        <Header />
        <Container>
            {/* Outlet será substituído pelo componente filho na declaração da rota */}
            <Outlet /> 
        </Container>
        <Footer />
    </div>
  )
}
