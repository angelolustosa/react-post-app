import React from 'react'
import { Header } from '../../components/header/Header'
import { Footer } from '../../components/footer/Footer'
import Table from '../../components/table/Table'
import { Container } from 'react-bootstrap'

export const Home = () => {
    return (
        <div>
            {/* <Header /> */}
            <Container>
                <Table />
            </Container>
            {/* <Footer /> */}
        </div>
    )
}
