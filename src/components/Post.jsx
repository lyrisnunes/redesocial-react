import { Comment } from "./Comment";
import { Avatar } from "./Avatar";
import styles from "./Post.module.css";

export function Post() {
  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder src="https://github.com/diego3g.png" />
          <div className={styles.authorInfo}>
            <strong>Diego</strong>
            <span>Programador React</span>
          </div>
        </div>

        <time title="14 de Abril ás 14:44" dateTime="2023/05/14 08:13:30">
          Publicado há 1h
        </time>
      </header>

      <div className={styles.content}>
        <p>Fala galeraa 👋</p>
        <p>Acabei de subir mais um projeto no meu portifa.</p>
        <p>
          É um Rocketseat. O nome do projeto que fiz no NLW Return, evento da projeto é DoctorCare 🚀
        </p>
        <a href="">👉 jane.design/doctorcare</a> <a href="">#novoprojeto</a> <a href="">#nlw</a> <a href="">#rocketseat</a>
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe sue feedBack</strong>

        <textarea placeholder="Deixe um comentário"
        />

        <button type="submit">Comentário</button>

      </form>

      <div className={styles.commentList}>
        <Comment/>
        <Comment/>
        <Comment/>
      </div>
    </article>
  );
}
