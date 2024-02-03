import Image from "next/image";
import styles from "./card.module.css";
import Link from "next/link";

const Card = ({ key, post }) => {
  return (
    <div key={key} className={styles.container}>
      <div className={styles.imageContainer}>
        {post.img && (
          <Image src={post.img} alt="" fill className={styles.image} />
        )}
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.title}>
            {post.createdAt.substring(0, 10)} -{" "}
          </span>
          <span className={styles.category}>{post.catSlug}</span>
        </div>
        <Link href={`/posts/${post.slug}`}>
          <h1>{post.title}</h1>
        </Link>
        <p
          className={styles.desc}
          dangerouslySetInnerHTML={{
            __html: post.desc.split(" ").slice(0, 20).join(" ") + "...",
          }}
        />
        <Link href={`/posts/${post.slug}`} className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
