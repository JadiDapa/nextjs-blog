import Link from "next/link";
import styles from "./comments.module.css";
import Image from "next/image";

const Comments = () => {
  const status = "authenticated";
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea
            placeholder="share your thought's"
            className={styles.input}
          />
          <button className={styles.button}>Send</button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}
      <div className={styles.comments}>
        <div className={styles.user}>
          <Image
            src="/p1.jpeg"
            alt=""
            width={50}
            height={50}
            className={styles.image}
          />
          <div className={styles.userInfo}>
            <span className={styles.username}>Daffa Althaf</span>
            <span className={styles.date}>01-01-2024</span>
          </div>
        </div>
        <p className={styles.desc}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint,
          delectus odio. Ducimus pariatur consequatur in quae architecto
          cupiditate ipsum non magni deleniti rem ratione praesentium aut
          reiciendis ut, voluptatem assumenda?
        </p>
      </div>
      <div className={styles.comments}>
        <div className={styles.user}>
          <Image
            src="/p1.jpeg"
            alt=""
            width={50}
            height={50}
            className={styles.image}
          />
          <div className={styles.userInfo}>
            <span className={styles.username}>Daffa Althaf</span>
            <span className={styles.date}>01-01-2024</span>
          </div>
        </div>
        <p className={styles.desc}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint,
          delectus odio. Ducimus pariatur consequatur in quae architecto
          cupiditate ipsum non magni deleniti rem ratione praesentium aut
          reiciendis ut, voluptatem assumenda?
        </p>
      </div>
      <div className={styles.comments}>
        <div className={styles.user}>
          <Image
            src="/p1.jpeg"
            alt=""
            width={50}
            height={50}
            className={styles.image}
          />
          <div className={styles.userInfo}>
            <span className={styles.username}>Daffa Althaf</span>
            <span className={styles.date}>01-01-2024</span>
          </div>
        </div>
        <p className={styles.desc}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint,
          delectus odio. Ducimus pariatur consequatur in quae architecto
          cupiditate ipsum non magni deleniti rem ratione praesentium aut
          reiciendis ut, voluptatem assumenda?
        </p>
      </div>
      <div className={styles.comments}>
        <div className={styles.user}>
          <Image
            src="/p1.jpeg"
            alt=""
            width={50}
            height={50}
            className={styles.image}
          />
          <div className={styles.userInfo}>
            <span className={styles.username}>Daffa Althaf</span>
            <span className={styles.date}>01-01-2024</span>
          </div>
        </div>
        <p className={styles.desc}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint,
          delectus odio. Ducimus pariatur consequatur in quae architecto
          cupiditate ipsum non magni deleniti rem ratione praesentium aut
          reiciendis ut, voluptatem assumenda?
        </p>
      </div>
    </div>
  );
};

export default Comments;
