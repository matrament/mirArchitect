"use client";
import AdvancedParameters from "./AdvancedParameters";
import styles from "./components.module.css";
import { useState } from "react";
import { Input, Collapse, Button, Modal } from "antd";
import { UploadFile } from "antd/lib/upload/interface";
import UploadStructureFile from "../components/UploadStructureFile";
import { QuestionCircleOutlined } from "@ant-design/icons";
import textweb from "../json/textweb.json";

const CustomSequenceLoad = () => {
  const { TextArea } = Input;
  const [uploadStructure, setUploadStructure] = useState<
    UploadFile[] | undefined
  >(undefined);
  const [target, setTarget] = useState("");
  const [sequence, setSequence] = useState("");
  const infoGen = () => {
    Modal.info({
      title: "This is a notification message",
      content: (
        <div>
          <p>
            Both RNA and RNA are allowed. Both whole transcript sequence, as
            well as, fragments of the transcripts (targets) could be pasted.
            Targets shorter than 21 nts are not allowed, shorter than 40 nts are
            not recommended. Moreover fasta file of the target/s could be
            uploaded.
          </p>
        </div>
      ),
      onOk() {},
    });
  };

  return (
    <div className={styles.backgroundCard}>
      <div className={styles.title}>
        <h1>Custom sequence</h1>
        <div onClick={infoGen} style={{ cursor: "pointer" }}>
          <QuestionCircleOutlined />
        </div>
      </div>
      <p>Input Sequence</p>
      <div style={{ marginBottom: "20px" }}>
        <Button onClick={() => setSequence(textweb.example_sequence)}>
          example sequence
        </Button>
      </div>
      <TextArea
        rows={4}
        placeholder="Basic usage"
        value={sequence}
        onChange={(e) => setSequence(e.target.value.toUpperCase())}
      />
      <h5>or</h5>
      <p>Targets</p>
      <div style={{ marginBottom: "20px" }}>
        <Button onClick={() => setTarget("GAGUUGUACGCCUAUGUGAUGGA")}>
          example target
        </Button>
      </div>
      <TextArea
        rows={2}
        placeholder="Basic usage"
        value={target}
        onChange={(e) => setTarget(e.target.value.toUpperCase())}
      />

      <h5>or</h5>
      <p>Fasta file</p>
      <UploadStructureFile
      // pdbId={pdbId}
      // setPdbId={setPdbId}
      // uploadStructure={uploadStructure}
      // setShowResult={setShowResult}
      // setUploadStructure={setUploadStructure}
      // setGetStructure={setGetStructure}
      // setIsUpload={setIsUpload}
      // setLoading={setLoading}
      // setFileName={setFileName}
      />
      <h5>and optionally</h5>
      <div style={{ marginTop: "5px" }}>
        <Collapse
          items={[
            {
              key: "1",
              label: <>Advanced parameters</>,
              children: <AdvancedParameters />,
            },
          ]}
        />
      </div>
      <div
        style={{ display: "flex", justifyContent: "center", marginTop: "25px" }}
      >
        <Button type="primary" size="large">
          Submit
        </Button>
      </div>
    </div>
  );
};

export default CustomSequenceLoad;
