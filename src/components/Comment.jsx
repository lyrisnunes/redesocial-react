import { Avatar } from './Avatar'
import styles from './Comment.module.css'

export function Comment(){
   return(
      <div className={styles.comment}>
      <Avatar  src="https://github.com/lyrisnunes.png"/>

      <div className={styles.commentBox}>
         <div className={styles.commentContent}>
            <header>
               <div className={styles.authorAndTime}>
                  <strong>Lyris Nunes</strong>
                  <time title="14 de Abril ás 14:44" dateTime="2023/05/14 08:13:30">Postado há 1h atrás</time>
               </div>

               <button title='Deletar comentário'>
                  Delete
               </button>
            </header>
            <p>Muito bom esse projeto,parabéns.</p>
         </div>

         <footer>
            <button>
               Aplaudir <span>20</span>
            </button>
         </footer>
      </div>
      </div>
   )
}