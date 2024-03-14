import Head from 'next/head'
import movies from '../data/movies'

const css = `.grid-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
}

@media screen and (min-width: 768px) {
  .grid-container {
    grid-template-columns: repeat(4, 1fr);
  }
}
`

export default function Home () {
  return (
    <>
      <Head>
        <title>Flex vs Grid</title>
        <meta name="description" content="Hello React" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="header">
          <h3>
            <a href="/">
              Flex
            </a>
          </h3>
          <h3 className="active">
            Grid
          </h3>
        </div>

        <div>
          <pre>
            {css}
          </pre>
        </div>

        <ul className="grid-container">
          {movies.map((movie) => {
            return (
              <li
                key={movie.title}
                className="grid-item"
              >
                <img src={movie.img} />
                <p>
                  {movie.title}
                </p>
              </li>
            )
          })}
        </ul>

      </main>

    </>
  )
}
