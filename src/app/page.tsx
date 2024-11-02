"use client";

import styles from "./page.module.css";
import textweb from "../json/textweb.json";
import SearchByIdentifier from "@/components/SearchByIdentifier";
import ListGeneTranscript from "@/components/ListGeneTranscript";
import DesignParametrization from "@/components/DesignParametrization";
import { Steps, Button } from "antd";
import { useEffect, useState } from "react";
import { ArrowRightOutlined, ArrowLeftOutlined } from "@ant-design/icons";
import { gene, task } from "@/types/inputType";
import React from "react";
import { getTaskID } from "@/utils/getTaskID";
import { useRouter } from "next/navigation";

const Home = () => {
  const [stepDesign, setStepDesign] = useState(0);
  const [identifier, setIdentifier] = useState<string>("");
  const router = useRouter();

  const [task, setTask] = useState<task>({
    seq: "",
    params: {
      GC_min: 30,
      GC_max: 65,
      max_GC_stretch: 9,
      bind_init: 5,
      "5prime_diff_len": 3,
      "5prime_diff_min": 2,
      diff_max: 4,
      max_tm: 21.5,
      force_insert_prefix: true,
      filter_offtargets: false,
      bad_prefix_score: 2.5,
      amiRNA_id: "all",
    },
    targets: [],
  });

  const processProceed = () => {
    if (stepDesign === 0) {
      if (identifier.length != 0 && task.seq.length == 0) {
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
  useEffect(() => {
    console.log(task);
  }, [task]);

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
            task={task}
            setTask={setTask}
          />
        ) : null}
        {stepDesign === 1 ? (
          <ListGeneTranscript
            identifier={identifier}
            task={task}
            setTask={setTask}
          />
        ) : null}
        {stepDesign === 2 ? (
          <DesignParametrization task={task} setTask={setTask} />
        ) : null}
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
        {stepDesign == 0 ? (
          <Button
            style={{ marginLeft: "10px", marginRight: "10px" }}
            type="primary"
            size="large"
            disabled={identifier.length == 0 && task.seq.length == 0}
            onClick={() => processProceed()}
          >
            Proceed <ArrowRightOutlined />
          </Button>
        ) : null}
        {stepDesign == 1 ? (
          <Button
            style={{ marginLeft: "10px", marginRight: "10px" }}
            type="primary"
            size="large"
            disabled={task.seq.length == 0}
            onClick={() => processProceed()}
          >
            Proceed <ArrowRightOutlined />
          </Button>
        ) : null}
        {stepDesign == 2 ? (
          <Button
            style={{ marginLeft: "10px", marginRight: "10px" }}
            type="primary"
            size="large"
            disabled={identifier.length == 0 && task.seq.length == 0}
            onClick={() => getTaskID(task, router)}
          >
            Submit a task <ArrowRightOutlined />
          </Button>
        ) : null}
      </div>
    </>
  );
};

export default Home;
