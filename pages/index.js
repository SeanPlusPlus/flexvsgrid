import { useState, useEffect } from 'react'

import Head from 'next/head'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const API = '/api/data'

export default function Home () {
  const [data, setData] = useState(null)

  useEffect(() => {
    fetch(API)
      .then(response => response.json())
      .then(json => setData(json))
      .catch(error => console.error(error))
  }, [])

  return (
    <div>
      <Head>
        <title>Hello React</title>
        <meta name="description" content="Hello React" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Container>
          <Row>
            <Col>
              <h1>Hello React</h1>
              {data && (
                <pre>
                  {JSON.stringify(data, null, 2)}
                </pre>
              )}
            </Col>
          </Row>
        </Container>
      </main>

    </div>
  )
}
