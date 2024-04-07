"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import styles from "./components.module.css";
import { useState } from "react";
import { Button } from "antd";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { useMediaQuery } from "react-responsive";
import logo from "../assets/logo_mirarchitect.svg";

const Header = () => {
  const isDesktop = useMediaQuery({ query: "(min-width: 1200px)" });
  //   return <>{isDesktop ? <DesktopHeader /> : <HeaderMobile />}</>;
  return <DesktopHeader />;
};

export default Header;
const DesktopHeader = () => {
  const pathname = usePathname();
  return (
    <div className={styles.background}>
      <div className={styles.header}>
        <Link href="/">
          <div style={{ display: "flex", flexDirection: "row", gap: "15px" }}>
            <Image src={logo} alt={logo} width={35} />
            <p className={pathname == "/" ? styles.active : ""}>mirArchitect</p>
          </div>
        </Link>

        <Link href="/overview">
          <p className={pathname == "/overview" ? styles.active : ""}>
            Overview
          </p>
        </Link>
        <Link href="/help">
          <p className={pathname == "/help" ? styles.active : ""}>Help</p>
        </Link>
        <Link href="/cite-us">
          <p className={pathname == "/cite-us" ? styles.active : ""}>Cite us</p>
        </Link>
      </div>
    </div>
  );
};

const HeaderMobile = () => {
  const pathname = usePathname();
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    setShowMenu(false);
  };

  return (
    <>
      <div className={styles.background}>
        <div className={styles.header}>
          <Link href="/">
            <p className={pathname == "/" ? styles.active : ""}>mirArchitect</p>
          </Link>
          <Button
            icon={<MenuOutlined />}
            type="text"
            size="large"
            onClick={() => setShowMenu(true)}
          />
        </div>
      </div>
      <div
        className={`${styles.flyoutMenu} ${
          showMenu === true ? styles.flyoutMenuShow : styles.flyoutMenuHide
        }`}
      >
        <div
          style={{
            display: "flex",
            textAlign: "center",
            flexDirection: "column",
          }}
        >
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              icon={<CloseOutlined />}
              type="text"
              size="large"
              onClick={() => setShowMenu(false)}
            />
          </div>
          <Link href="/" onClick={handleClick}>
            <h4 className={pathname === "/" ? styles.active : ""}>Home</h4>
          </Link>
          <Link href="/about" onClick={handleClick}>
            <h4 className={pathname === "/about" ? styles.active : ""}>
              About
            </h4>
          </Link>
          <Link href="/cite_us" onClick={handleClick}>
            <h4 className={pathname === "/cite_us" ? styles.active : ""}>
              Cite us
            </h4>
          </Link>
          <Link href="/help" onClick={handleClick}>
            <h4 className={pathname === "/help" ? styles.active : ""}>Help</h4>
          </Link>
        </div>
      </div>
    </>
  );
};
