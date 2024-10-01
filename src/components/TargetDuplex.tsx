"use client";
import { useState, useEffect } from "react";
// import styles from "./page.module.css";
import { Button, Form, Input, Space, Tooltip, Collapse, Card } from "antd";
import TableSequenceResult from "@/components/TableSequenceResult";
import { Table, Tag } from "antd";
import React from "react";
import Heatmap from "@/components/Heatmap";
// import result from "../../json/example_result_mirarchitect.json";
import styles from "../page.module.css";
import TableAmiRNA from "@/components/TableAmiRNA";
const { Column, ColumnGroup } = Table;

interface DataType {
  key: React.Key;
  amirna: string;
  pri_mirna: string;
  target_seq: number;
  target_pos: string;
  score: string;
  seed_guide: number;
  seed_passenger: number;
  mismatches_guide: number;
  mismatches_passenger: number;
  indicated_guide: number;
  indicated_passenger: number;
}

const TargetDuplex = () => {
  const [data, setData] = useState([]);

  //   useEffect(() => {
  //     let tempData: any = [];
  //     tempData = result.result.result.map((el) => {
  //       return {
  //         pri_mirna: el.amiRNA.id,
  //         score: el.amiRNA.score.toFixed(2),
  //         target_pos: `${el.candidate.start}-${el.candidate.end}`,
  //         target_seq: el.candidate.seq,
  //       };
  //     });
  //     console.log(tempData);
  //     setData(tempData);
  //   }, []);
  return (
    <>
      <p>ggggg</p>
    </>
  );
};

export default TargetDuplex;
