"use client";

import styles from "./page.module.css";
import textweb from "../json/textweb.json";
import SearchByIdentifier from "@/components/SearchByIdentifier";

const Home = () => {
  return (
    <div className={styles.mainPage}>
      <p style={{ textAlign: "justify", padding: "30px 40px 20px 40px" }}>
        {textweb.describe_tool}
      </p>
      <SearchByIdentifier />
    </div>
  );
};

export default Home;
