"use client";

import Image from "next/image";
import styles from "./themeToggle.module.css";
import { useContext } from "react";
import { ThemeContext } from "@/context/ThemeContext";

const ThemeToggle = () => {
  const { theme, toggle } = useContext(ThemeContext);

  return (
    <div
      className={styles.container}
      style={
        theme === "dark"
          ? { backgroundColor: "#eee" }
          : { backgroundColor: "#32323a" }
      }
      onClick={toggle}
    >
      <Image src="/moon.png" alt="Dark Mo" width={14} height={14} />
      <div
        className={styles.ball}
        style={theme === "light" ? { left: "1px" } : { right: "1px" }}
      />
      <Image src="/sun.png" alt="Light Mode" width={14} height={14} />
    </div>
  );
};

export default ThemeToggle;
