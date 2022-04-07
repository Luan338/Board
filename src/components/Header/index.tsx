import styles from './styles.module.scss';
import Link from 'next/link';
import SingInButton from '../SigninButton/index';

const Header = () => {
  return (
    <header className={styles.headerContainer}>
        <section className={styles.headerContent}>
            <figure>
                <Link href="/">
                    <img src="/images/logo.svg" alt="Logo Meu Board" />
                </Link>    
            </figure>
            <nav>
                <Link href="/">
                    <a>Home</a>
                </Link>
                <Link href="/board">
                    <a>Meu board</a>
                </Link>                
            </nav>
            <SingInButton />
        </section>
    </header>
  )
}

export default Header;