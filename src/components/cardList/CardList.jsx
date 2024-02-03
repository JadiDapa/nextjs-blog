import styles from "./cardList.module.css";
import Pagination from "@/components/pagination/Pagination";
import Card from "@/components/card/Card";

const getPosts = async (page, category) => {
  const res = await fetch(
    `http://localhost:3000/api/posts?page=${page}&category=${category || ""}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    throw new Error("Posts Fetching was Failed!");
  }

  return res.json();
};

const CardList = async ({ page, category }) => {
  const { posts, count, POST_PER_PAGE } = await getPosts(page, category);

  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page - 1) > POST_PER_PAGE < count;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Recent Posts</h1>
      <div className={styles.posts}>
        <div className={styles.post}>
          {posts?.map((post) => (
            <Card key={post._id} post={post} />
          ))}
        </div>
      </div>
      <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
    </div>
  );
};

export default CardList;
