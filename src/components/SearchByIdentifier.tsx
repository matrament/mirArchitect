"use client";
import { useEffect, useState } from "react";
import { Button, Form, Input, Space, Tooltip, Modal } from "antd";
import textweb from "../json/textweb.json";
import { QuestionCircleOutlined } from "@ant-design/icons";
import styles from "./components.module.css";

const SearchByIdentifier = (props: { setByIdentifier: any }) => {
  const [identifier, setIdentifier] = useState<string>("");

  const infoGen = () => {
    Modal.info({
      title: "This is a notification message",
      content: (
        <div>
          <p>
            If more than one transcript is identified, the list of transcripts
            are presented. One of them should be chosen for further analysis.
          </p>
        </div>
      ),
      onOk() {},
    });
  };

  useEffect(() => {
    props.setByIdentifier(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [identifier]);

  return (
    <div className={styles.backgroundCard}>
      <div className={styles.title}>
        <h1>Gene/Transcript identifier</h1>
        <div onClick={infoGen} style={{ cursor: "pointer" }}>
          <QuestionCircleOutlined color="blue" />
        </div>
      </div>

      <p>From example collection:</p>
      <div style={{ display: "flex", rowGap: "20px", flexDirection: "column" }}>
        <Space.Compact>
          <Tooltip title={textweb.example_search.example_first}>
            <Button onClick={() => setIdentifier("NM_005656")}>
              NM_005656
            </Button>
          </Tooltip>
          <Tooltip title={textweb.example_search.example_second}>
            <Button onClick={() => setIdentifier("TMPRSS2")}>TMPRSS2</Button>
          </Tooltip>
          <Tooltip title={textweb.example_search.example_third}>
            <Button onClick={() => setIdentifier("ENSG00000184012")}>
              ENSG00000184012
            </Button>
          </Tooltip>
        </Space.Compact>
        <Input
          placeholder="Basic usage"
          value={identifier}
          onChange={(e) => setIdentifier(e.target.value.toUpperCase())}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            type="primary"
            size="large"
            onClick={() => props.setByIdentifier(true)}
            disabled={identifier === ""}
          >
            Search
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchByIdentifier;
