import Head from 'next/head'
import movies from '../data/movies'

const css = `.flex-container {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

@media (min-width: 768px) {
  .flex-container {
    flex-direction: row;
    flex-wrap: wrap;
  }

  .flex-item {
    flex: 1 0 calc(20% - 16px);
  }
}
`

export default function Home () {
  return (
    <>
      <Head>
        <title>Flex vs Grid</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Flex Example" />
        <meta property="og:image" content="https://flexvsgrid.vercel.app/flexvsgrid.png" />
      </Head>

      <main>
        <div className="header">
          <h3 className="active">
            Flex
          </h3>
          <h3>
            <a href="/grid">
              Grid
            </a>
          </h3>
        </div>

        <div>
          <pre>
            {css}
          </pre>
        </div>

        <ul className="flex-container">
          {movies.map((movie) => (
            <li
              key={movie.title}
              className="flex-item"
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
