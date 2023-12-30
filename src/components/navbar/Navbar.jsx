import Image from "next/image";
import styles from "./navbar.module.css";
import Link from "next/link";
import ThemeToggle from "@/components/themeToggle/ThemeToggle";
import AuthLinks from "@/components/authLinks/AuthLinks";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.social}>
        <Image src={"/facebook.png"} alt="facebook" width={24} height={24} />
        <Image src={"/instagram.png"} alt="instagram" width={24} height={24} />
        <Image src={"/tiktok.png"} alt="tiktok" width={24} height={24} />
        <Image src={"/youtube.png"} alt="youtube" width={24} height={24} />
      </div>
      <div className={styles.logo}>
        Nge<span className={styles.title}>Blog</span>
      </div>
      <div className={styles.links}>
        <ThemeToggle />
        <Link className={styles.link} href={"/"}>
          Homepage
        </Link>
        <Link className={styles.link} href={"/contact"}>
          Contact
        </Link>
        <Link className={styles.link} href={"/about"}>
          About
        </Link>
        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;
