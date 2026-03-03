// App.jsx
// ------------
// Root component of the demo application. It composes the smaller product
// display components (Name, Price, Description, Image) inside a
// `react-bootstrap` <Card> and handles a trivial greeting message which
// conditionally shows an image if a first name is supplied. The product data
// is pulled from `src/product.jsx`.

import React from 'react'
import './App.css'
import { Container, Card, Button, Row, Col } from 'react-bootstrap'
import Name from './components/Name'
import Price from './components/Price'
import Description from './components/Description'
import Image from './components/Image'
import product from './product'

// change this value to test the conditional rendering of the greeting
const firstName = 'Hosea'

export default function App() {
  return (
    <Container className="app-root py-5">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <Card className="product-card shadow-lg">
            <Row className="g-0">
              <Col md={5} className="p-3 d-flex align-items-center justify-content-center bg-soft">
                <Image />
              </Col>
              <Col md={7} className="p-3">
                <Card.Body>
                  <Name />
                  <Price />
                  <Description />
                  <div className="d-flex gap-2 mt-3">
                    <Button variant="primary">Add to cart</Button>
                    <Button variant="outline-secondary">Wishlist</Button>
                  </div>
                </Card.Body>
              </Col>
            </Row>
          </Card>

          <div className="greeting mt-4 text-center">
            {firstName ? (
              <>
                <h5>Hello, {firstName}!</h5>
                <img src={product.image} alt="greeting" className="greeting-image mt-2" />
              </>
            ) : (
              <h5>Hello, there!</h5>
            )}
          </div>
        </Col>
      </Row>
    </Container>
  )
}
