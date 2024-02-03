import Image from "next/image";
import styles from "./categoryList.module.css";
import Link from "next/link";

const getCategory = async () => {
  const res = await fetch("http://localhost:3000/api/categories", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Category List Fetching was Failed!");
  }

  return res.json();
};

const CategoryList = async () => {
  const categoryList = await getCategory();
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Categories</h1>
      <div className={styles.categories}>
        {categoryList?.map((category, i) => (
          <Link
            key={category._id}
            href={`/blog?category=${category.slug}`}
            className={`${styles.category} ${styles[category.slug]}`}
          >
            {category.img && (
              <Image
                src={category.img}
                alt=""
                width={32}
                height={32}
                className={styles.image}
              />
            )}
            {category.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
