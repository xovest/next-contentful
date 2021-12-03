import { createClient } from "contentful"
import HeroCard from "../components/HeroCard";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
  });

  const res = await client.getEntries({ content_type: 'recipe' });

  return {
    props: {
      heroes: res.items
    }
  };
}

export default function Heroes({ heroes }) {
  console.log(heroes);
  return (
    <div className="recipe-list">
      {heroes.map(hero => (
        <HeroCard key={hero.sys.id} hero={hero} />
      ))}
    </div>
  )
}