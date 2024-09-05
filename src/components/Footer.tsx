"use client";
import styles from "./components.module.css";
import logo from "../assets/logo-skrót.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.foot}>
      <Image src={logo} alt={logo} width={50} />
      <p className={styles.footer}>miRarchitect 2024</p>
    </div>
  );
};

export default Footer;
