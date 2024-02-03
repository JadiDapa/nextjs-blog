"use client";

import Link from "next/link";
import styles from "./comments.module.css";
import Image from "next/image";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { useState } from "react";

const fetchComment = async (url) => {
  const res = await fetch(url);
  const data = await res.json();

  if (!res.ok) {
    const error = new Error(data.message);
    throw error;
  }

  return data;
};

const Comments = ({ postSlug }) => {
  const { data, mutate, isLoading } = useSWR(
    `http://localhost:3000/api/comments?postSlug=${postSlug}`,
    fetchComment
  );
  const [desc, setDesc] = useState("");
  const status = useSession();

  const handleSubmit = async () => {
    console.log(desc);
    await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ desc, postSlug }),
    });
    mutate();
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status.status === "authenticated" ? (
        <div className={styles.write}>
          <textarea
            placeholder="share your thought's"
            className={styles.input}
            onChange={(e) => setDesc(e.target.value)}
          />
          <button onClick={handleSubmit} className={styles.button}>
            Send
          </button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}

      {data?.map((comment, i) => {
        return (
          <div key={i} className={styles.comments}>
            <div className={styles.user}>
              <Image
                src={comment.user?.image}
                alt=""
                width={50}
                height={50}
                className={styles.image}
              />
              <div className={styles.userInfo}>
                <span className={styles.username}>{comment.user?.name}</span>
                <span className={styles.date}>{comment.createdAt}</span>
              </div>
            </div>
            <p className={styles.desc}>{comment.desc}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Comments;
