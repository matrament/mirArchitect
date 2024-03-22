"use client";
import { useState } from "react";
import styles from "./page.module.css";
import textweb from "../json/textweb.json";
import { Button, Form, Input, Space, Tooltip, Collapse } from "antd";

import SearchByIdentifier from "@/components/SearchByIdentifier";
import CustomSequenceLoad from "@/components/CustomSequenceLoad";
import ListGeneTranscript from "@/components/ListGeneTranscript";

const Home = () => {
  return (
    <>
      <p>{textweb.describe_tool}</p>
      <SearchByIdentifier />
      <ListGeneTranscript />
      <CustomSequenceLoad />
    </>
  );
};

export default Home;
