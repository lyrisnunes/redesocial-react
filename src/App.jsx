import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import {Post} from './components/Post'

// styles
import styles from './app.module.css';
import './global.css'



export function App() {
  return (
   <div>
   <Header/>

   <div className={styles.wrapper}>
    <Sidebar/>
    <main>
    <Post author="Lyris" content="texto exemplooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo"/>
    </main>
   </div>
    

   </div>
  )
}

