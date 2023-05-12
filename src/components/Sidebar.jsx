import styles from './Sidebar.module.css';
export function Sidebar(){
   return(
      <aside className={styles.sidebar}>
         <img className={styles.cover} src="https://images.unsplash.com/photo-1605379399843-5870eea9b74e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=50"/>

         <div className={styles.profile}>
            <img className={styles.avatar} src="https://github.com/lyrisnunes.png"/>

            <strong>Lyris Nunes</strong>
            <span>Programadora React</span>
         </div>

         <footer>
            <a href="#">
               Editar perfil
            </a>
         </footer>
      </aside>
   )
}