"use client";
import { useState } from "react";
import styles from "./page.module.css";
import textweb from "../json/textweb.json";
import SearchByIdentifier from "@/components/SearchByIdentifier";
import ListGeneTranscript from "@/components/ListGeneTranscript";

const Home = () => {
  const [byIdentifier, setByIdentifier] = useState(true);
  return (
    <div className={styles.mainPage}>
      <p style={{ textAlign: "justify", padding: "30px 40px 20px 40px" }}>
        {textweb.describe_tool}
      </p>
      {byIdentifier ? (
        <SearchByIdentifier setByIdentifier={setByIdentifier} />
      ) : (
        <ListGeneTranscript />
      )}
    </div>
  );
};

export default Home;
