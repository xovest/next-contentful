import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/')
    }, 4000)
  }, []);

  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>Whoopsie! That page exists in another universe maybe :/</h2>
      <p>Head back to <Link href="/"><a>Homepage</a></Link> for more juicy stuff mmm...</p>

      <style jsx>{`
        .not-found {
          background: #fff;
          padding: 30px;
          box-shadow: 1px 3px 5px rgba(0,0,0,0.1);
          transform: rotateZ(-1deg);
        }
        h1 {
          font-size: 3em;
        }
      `}</style>
    </div>
  );
}
 
export default NotFound;