"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

import React from "react";
import Heatmap from "@/components/Heatmap";
import result from "../../json/example_result_mirarchitect.json";
import styles from "./page.module.css";
import TableAmiRNA from "@/components/TableAmiRNA";
import TargetDuplex from "@/components/TargetDuplex";
import TableAmiRNACandidates from "@/components/TableAmiRNACandidates";
import { getResult } from "@/utils/getResult";

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

const Result = () => {
  const searchParams = useSearchParams();
  const [data, setData] = useState([]);
  const [miRNAcandidate, setMiRNAcandidate] = useState<any[]>([]);
  const [dataCandidate, setDataCandidate] = useState<any[]>([]);
  const [dataHeatmap, setDataHeatmap] = useState<any>([]);
  const [resultData, setResultData] = useState({});

  useEffect(() => {
    let tempData: any = [];
    let index = miRNAcandidate[0]?.key ?? 0;
    let tempHeatMapData: any = result.result.result[index];
    tempData = result.result.additional.sense_blast[index].map((el, index) => {
      return {
        key: index,
        strand: el.side,
        alignment: el.sseq,
        accession_id: el.sacc,
        region: "?",
        description: el.stitle,
      };
    });

    setDataCandidate(tempData);
    setDataHeatmap(tempHeatMapData);
    console.log(tempHeatMapData);
  }, [miRNAcandidate]);

  useEffect(() => {
    let tempData: any = [];
    tempData = result.result.result.map((el, index) => {
      return {
        key: index,
        pri_mirna: el.amiRNA.id,
        amirna: {
          which_end: el.amiRNA.which_end,
          head: el.amiRNA.seq.head,
          insert: el.amiRNA.seq.insert,
          middle: el.amiRNA.seq.middle,
          insertc: el.amiRNA.seq.insertc,
          tail: el.amiRNA.seq.tail,
        },

        score: el.amiRNA.score.toFixed(2),
        target_pos: `${el.candidate.start}-${el.candidate.end}`,
        target_seq: el.candidate.seq,
        seed_guide: Number(el.amiRNA.guide_tm.toFixed(2)),
        seed_passenger: Number(el.amiRNA.passenger_tm.toFixed(2)),
      };
    });
    console.log(tempData);
    setData(tempData);
  }, []);

  useEffect(() => {
    let id = searchParams.get("id");
    if (id != null) {
      getResult(id, setResultData);
    }
  }, []);

  useEffect(() => {
    console.log(resultData);
  }, [resultData]);

  return (
    <div style={{ width: "100%", marginTop: "30px" }}>
      <h1>{searchParams.get("id")!}</h1>
      <div className={styles.backgroundCard}>
        <h2 style={{ textAlign: "center" }}>Result</h2>
        <h4>Effective amiRNA candidates</h4>
        <TableAmiRNACandidates
          data={data}
          setMiRNAcandidate={setMiRNAcandidate}
        />
        {miRNAcandidate.length != 0 ? (
          <>
            <h3>Graphical view of amiRNA candidates</h3>
            <h4>amiRNA - target duplex</h4>
            <TargetDuplex />
            <h4>analysis of amiRNA functionallity</h4>
            <Heatmap dataHeatmap={dataHeatmap} />
            <h4>analysis of amiRNA specificity</h4>
            <TableAmiRNA dataCandidate={dataCandidate} />
          </>
        ) : null}
      </div>
    </div>
  );
};

export default Result;
