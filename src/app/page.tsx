"use client";

import styles from "./page.module.css";
import textweb from "../json/textweb.json";
import SearchByIdentifier from "@/components/SearchByIdentifier";
import ListGeneTranscript from "@/components/ListGeneTranscript";
import DesignParametrization from "@/components/DesignParametrization";
import { getEnsemblData } from "@/utils/getEnsemblData";
import { Steps } from "antd";
import { useState } from "react";
import { ArrowRightOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import { gene } from "@/types/inputType";
import { Button } from "antd";

const Home = () => {
  const [stepDesign, setStepDesign] = useState(0);
  const [ensemblData, setEnsemblData] = useState<gene[]>([]);
  const [identifier, setIdentifier] = useState<string>("");
  const [sequence, setSequence] = useState<string>("");

  const processProceed = () => {
    if (stepDesign === 0) {
      if (identifier.length != 0 && sequence.length == 0) {
        getEnsemblData(identifier, setEnsemblData);
        setStepDesign(1);
      } else {
        setStepDesign(2);
      }
    }
    if (stepDesign === 1) {
      setStepDesign(2);
    }
  };

  const processGoBack = () => {
    if (stepDesign === 1) {
      setStepDesign(0);
    }
    if (stepDesign === 2) {
      if (identifier.length == 0) {
        setStepDesign(0);
      } else {
        setStepDesign(1);
      }
    }
  };

  return (
    <>
      <div className={styles.mainPage}>
        <p style={{ textAlign: "justify", padding: "30px 40px 20px 40px" }}>
          {textweb.describe_tool}
        </p>
        <div style={{ paddingBottom: "25px" }}>
          <Steps
            progressDot
            current={stepDesign}
            items={[
              {
                title: "Data upload",
              },
              {
                title: "Target specification",
              },
              {
                title: "Design parametrization",
              },
              {
                title: "Design and results",
              },
            ]}
          />
        </div>
        {stepDesign === 0 ? (
          <SearchByIdentifier
            identifier={identifier}
            setIdentifier={setIdentifier}
            sequence={sequence}
            setSequence={setSequence}
          />
        ) : null}
        {stepDesign === 1 ? (
          <ListGeneTranscript
            ensemblData={ensemblData}
            identifier={identifier}
          />
        ) : null}
        {stepDesign === 2 ? <DesignParametrization /> : null}
      </div>
      <div className={styles.submitButton}>
        {stepDesign != 0 ? (
          <Button
            style={{ marginLeft: "10px", marginRight: "10px" }}
            type="primary"
            size="large"
            onClick={() => processGoBack()}
          >
            <ArrowLeftOutlined /> Go Back
          </Button>
        ) : null}
        {stepDesign != 2 ? (
          <Button
            style={{ marginLeft: "10px", marginRight: "10px" }}
            type="primary"
            size="large"
            disabled={identifier.length == 0 && sequence.length == 0}
            onClick={() => processProceed()}
          >
            Proceed <ArrowRightOutlined />
          </Button>
        ) : null}
      </div>
    </>
  );
};

export default Home;
