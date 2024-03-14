import Head from 'next/head'
import movies from '../data/movies'

const css = `.grid-container {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
}

@media screen and (min-width: 768px) {
  .grid-container {
    grid-template-columns: repeat(5, 1fr);
  }
}
`

export default function Home () {
  return (
    <>
      <Head>
        <title>Flex vs Grid</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Grid Example" />
        <meta property="og:image" content="https://flexvsgrid.vercel.app/flexvsgrid.png" />
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
          {movies.map((movie) => (
            <li
              key={movie.title}
            >
              <img src={movie.img} />
              <div>
                {movie.title}
              </div>
            </li>
          ))}
        </ul>

      </main>

    </>
  )
}
