import Head from "next/head";

import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Meya-Meya Restaurant</title>
        <meta
          name="description"
          content="A Local Egyption restaurant in Berlin"
        />

        <link rel="icon" href="/photo.jpg" />
      </Head>
      Home Page
    </div>
  );
}
