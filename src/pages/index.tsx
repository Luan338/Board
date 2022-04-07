import styles from '../styles/styles.module.scss';
import Head from 'next/head';

export default function Home() {
  return(
    <>
    <Head>
      <title>Board - Organizando suas tarefas</title>
    </Head>
    <main className={`animeLeft ${styles.contentContainer}`}>
      <img src="/images/board-user.svg" alt="Ferramenta board" />
      <section className={styles.callToAction}>
        <h1>Uma ferramenta para seu dia a dia Escreva, planeja e organize-se...</h1>
        <p>
          <span>100% Gratuita</span> e online.
        </p>
      </section>
      <div className={styles.donaters}>
        <img src="https://sujeitoprogramador.com/steve.png" alt="Imagem apoiadores" />
        <img src="https://sujeitoprogramador.com/steve.png" alt="Imagem apoiadores" />
        <img src="https://sujeitoprogramador.com/steve.png" alt="Imagem apoiadores" />
      </div>
    </main>
    </>
    ) 
}
