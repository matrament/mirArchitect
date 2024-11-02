"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

import React from "react";
import Heatmap from "@/components/Heatmap";
import styles from "./page.module.css";
import TableAmiRNA from "@/components/TableAmiRNA";
import TargetDuplex from "@/components/TargetDuplex";
import TableAmiRNACandidates from "@/components/TableAmiRNACandidates";
import { getResult } from "@/utils/getResult";
import { Button, message, Result, Skeleton, Tooltip } from "antd";

const ResultPage = () => {
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState<Boolean>(true);
  const [data, setData] = useState([]);
  const [miRNAcandidate, setMiRNAcandidate] = useState<any[]>([]);
  const [dataHeatmap, setDataHeatmap] = useState<any>([]);
  const [resultData, setResultData] = useState<{
    additional: any;
    result: any[];
  }>({ additional: {}, result: [] });

  useEffect(() => {
    let tempData: any = [];
    resultData.result.length != 0
      ? (tempData = resultData.result.map((el, index) => {
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
        }))
      : null;
    setData(tempData);
  }, [resultData]);

  useEffect(() => {
    let id = searchParams.get("id");
    if (id != null) {
      getResult(id, setResultData, setLoading);
    }
  }, []);

  useEffect(() => {
    if (resultData.result.length != 0 && miRNAcandidate.length != 0) {
      let candidateKey = miRNAcandidate[0]?.key;
      let tempHeatMapData: any = resultData.result[candidateKey];
      setDataHeatmap(tempHeatMapData);
    }
  }, [miRNAcandidate]);

  return (
    <div style={{ width: "100%", marginTop: "30px" }}>
      <div>
        <h2 style={{ textAlign: "center", fontWeight: "300" }}>
          {`Results will be available for 48h (task: `}
          <span
            style={{ fontSize: "20px" }}
            onClick={() => {
              window.navigator["clipboard"].writeText(searchParams.get("id")!);
              message.success("Request task ID has been saved to clipboard.");
            }}
          >
            <Tooltip title="Click here to copy to clipboard.">
              {searchParams.get("id")!}
            </Tooltip>
          </span>
          {`)`}
        </h2>
      </div>
      <div className={styles.backgroundCard}>
        <h2 style={{ textAlign: "center" }}>Result</h2>
        {resultData.result.length != 0 ? (
          <>
            <h4>Effective amiRNA candidates</h4>
            <TableAmiRNACandidates
              data={data}
              setMiRNAcandidate={setMiRNAcandidate}
            />
            {miRNAcandidate.length != 0 && dataHeatmap.length != 0 ? (
              <>
                <h3>Graphical view of amiRNA candidates</h3>
                <h4>amiRNA - target duplex</h4>
                <TargetDuplex />
                <h4>analysis of amiRNA functionallity</h4>
                <Heatmap dataHeatmap={dataHeatmap} />
                <h4>analysis of amiRNA specificity</h4>
                <TableAmiRNA
                  resultData={resultData}
                  miRNAcandidate={miRNAcandidate}
                />
              </>
            ) : null}
          </>
        ) : loading ? (
          <Skeleton />
        ) : (
          <Result
            status="warning"
            title="No result found."
            extra={
              <Button type="primary" key="console">
                Go Home
              </Button>
            }
          />
        )}
      </div>
    </div>
  );
};

export default ResultPage;
