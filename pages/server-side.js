import client from "../config/apollo-client";
import { gql } from "@apollo/client";
import styles from "../styles/Home.module.css";

export default function Home({ countries }) {
  return (
    <div className={styles.grid}>
      {countries.map((country) => (
        <div key={country.code} className={styles.card}>
          <h3>{country.name}</h3>
          <p>
            {country.code} - {country.emoji}
          </p>
        </div>
      ))}
    </div>
  );
}

export async function getServerSideProps() {
  const { data } = await client.query({
    query: gql`
      query Countries {
        countries {
          code
          name
          emoji
        }
      }
    `,
  });

  return {
    props: {
      countries: data.countries.slice(0, 4),
    },
  };
}
