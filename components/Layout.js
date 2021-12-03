import Link from 'next/link'

export default function Layout({ children }) {
  return (
    <div className="layout">
      <header>
        <Link href="/">
          <a>
            <h1>
              <span>Dota 2</span>
              <span>Main Heroes</span>
            </h1>
            <h2>Destroy the Dire</h2>
          </a>
        </Link>
      </header>

      <div className="page-content">
        { children }
      </div>

      <footer>
        <p>Copyright 2021 Contentful :)</p>
      </footer>
    </div>
  )
}