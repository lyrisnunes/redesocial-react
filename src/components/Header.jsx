import styles from './styles.module.css';

import IgniteLogo from '../assets/Ignite simbol.svg'


export function Header(){
   return(
      <header className={styles.header}>
      <img src={IgniteLogo} alt="logo" />
      </header>
   )
}