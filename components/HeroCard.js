import Link from 'next/link'

export default function HeroCard({ hero }) {
  const { title, slug, cookingTime, thumbnail } = hero.fields;

  return (
    <div className="card">
      <div className="featured">
        {/* image */}
      </div>
      <div className="content">
        <div className="info">
          <h4>{ title }</h4>
          <p>Dmg: { cookingTime }</p>
        </div>
        <div className="actions">
          <Link href={`/heroes/${slug}`}><a>Show more</a></Link>
        </div>
      </div>
    </div>
  );
};
