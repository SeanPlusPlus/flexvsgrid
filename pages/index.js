import Head from 'next/head'
import movies from '../data/movies'

const css = `.flex-container {
  display: flex;
  flex-direction: column;
}

@media (min-width: 768px) {
  .flex-container {
    flex-direction: row;
    flex-wrap: wrap;
    gap: 16px;
  }

  .flex-item {
    flex: 1 0 calc(25% - 16px);
  }
}
`

export default function Home () {
  return (
    <>
      <Head>
        <title>Flex vs Grid</title>
        <meta name="description" content="Flex Example" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:image" content="http://ruraljuror.com/flexvsgrid.png" />
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
          {movies.map((movie) => {
            return (
              <li
                key={movie.title}
                className="flex-item"
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
