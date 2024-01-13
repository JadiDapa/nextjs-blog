import Image from "next/image";
import styles from "./singlePage.module.css";
import Menu from "@/components/menu/Menu";
import Comments from "@/components/comments/Comments";

const SinglePage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.TextContainer}>
          <h1 className={styles.title}>
            Lorem ipsum dolor sit amet cons adipisicing elit.
          </h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/p1.jpeg" alt="" fill className={styles.avatar} />
            </div>
            <div className={styles.userTextContainer}>
              <div className={styles.username}>Daffa Althaf</div>
              <div className={styles.date}>01-01-2024</div>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              nihil quo impedit doloribus ullam deserunt natus odio ex velit
              cumque in exercitationem fuga eius, iusto at quos, aliquid ducimus
              labore!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              nihil quo impedit doloribus ullam deserunt natus odio ex velit
              cumque in exercitationem fuga eius, iusto at quos, aliquid ducimus
              labore!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              nihil quo impedit doloribus ullam deserunt natus odio ex velit
              cumque in exercitationem fuga eius, iusto at quos, aliquid ducimus
              labore!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              nihil quo impedit doloribus ullam deserunt natus odio ex velit
              cumque in exercitationem fuga eius, iusto at quos, aliquid ducimus
              labore!
            </p>
          </div>
          <div className={styles.comments}>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
