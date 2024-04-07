"use client";
import { useState } from "react";
import styles from "./page.module.css";
import textweb from "../json/textweb.json";
import SearchByIdentifier from "@/components/SearchByIdentifier";
import CustomSequenceLoad from "@/components/CustomSequenceLoad";
import ListGeneTranscript from "@/components/ListGeneTranscript";

const Home = () => {
  const [byIdentifier, setByIdentifier] = useState(false);
  return (
    <div className={styles.mainPage}>
      <p style={{ textAlign: "justify", padding: "20px 40px 0 40px" }}>
        {textweb.describe_tool}
      </p>
      <SearchByIdentifier setByIdentifier={setByIdentifier} />
      {byIdentifier ? (
        <ListGeneTranscript />
      ) : (
        <>
          <p style={{ textAlign: "center" }}>or</p>
          <CustomSequenceLoad />
        </>
      )}
    </div>
  );
};

export default Home;
