import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.container}>
      <div className={styles.logoContainer} onClick={() => setOpen(false)}>
        <Link href={"/"}>
          <Image
            className={styles.logo}
            src="/imgs/photo.jpg"
            alt="logo"
            width={55}
            height={55}
          />
        </Link>
      </div>

      <ul className={styles.linksContainter}>
        <li className={styles.listItem}>
          <Link href="/About">About us</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/Menu">Menu</Link>
          <Link href="/Contact">Contact</Link>
        </li>
      </ul>

      <div className={styles.cartContainer} onClick={() => setOpen(false)}>
        <div className={styles.itemCounter}>0</div>
        <Link href={"/"}>
          <ShoppingCartOutlinedIcon className={styles.cart} />
        </Link>
      </div>
      <div
        onClick={() => setOpen(!open)}
        className={open ? styles.openHam : styles.hamburger}
      ></div>
      <ul
        className={styles.linksContainterMobile}
        style={{ top: open ? "70px" : "-100vh" }}
        onClick={() => setOpen(false)}
      >
        <li className={styles.listItemMobile}>
          <Link href="/About">About</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/Menu">Menu</Link>
          <Link href="/Contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
