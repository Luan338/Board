import styles from './styles.module.scss';
import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';

const SingInButton = () => {

  const session = true;

  return session? (
    <button
    type="button"
    className={styles.signInButton}
    onClick={() => {}}
    >
    <img src="https://sujeitoprogramador.com/steve.png" alt="Foto do usuário" />
    Olá, Luan
    <FiX color="#737380" className={styles.closeIcon}/>
    </button>
  ) : (
    <button
    type="button"
    className={styles.signInButton}
    onClick={() => {}}
    >
    <FaGithub color="#FFB800"/>
    Entrar com o GitHub</button>
  )
}

export default SingInButton;