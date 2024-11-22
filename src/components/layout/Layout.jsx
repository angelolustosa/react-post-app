import React from 'react'
import { Header } from '../header/Header'
import { Footer } from '../footer/Footer'
import { Container } from 'react-bootstrap'
import { Outlet } from 'react-router-dom'
import { ThemeProvider } from '../../context/ThemeContext'

export const Layout = () => {
  return (
    <div>
      <ThemeProvider>
        <Header />
        <Container>
          {/* Outlet será substituído pelo componente filho na declaração da rota */}
          <Outlet />
        </Container>
        <Footer />
      </ThemeProvider>
    </div>
  )
}
