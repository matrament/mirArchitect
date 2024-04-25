"use client";
import { useEffect, useState } from "react";
import { Button, Radio, Input, Space, Tooltip, Modal, Collapse } from "antd";
import textweb from "../json/textweb.json";
import { QuestionCircleOutlined, UploadOutlined } from "@ant-design/icons";
import styles from "./components.module.css";
import type { RadioChangeEvent } from "antd";
import AdvancedParameters from "./AdvancedParameters";
import { ZCOOL_KuaiLe } from "next/font/google";

const SearchByIdentifier = (props: { setByIdentifier: any }) => {
  const [identifier, setIdentifier] = useState<string>("");
  const [sequence, setSequence] = useState<string>("");
  const [value, setValue] = useState(1);
  const { TextArea } = Input;

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

  const onChangeSequence = (e: string) => {
    setSequence(e.toUpperCase());
    setValue(0);
    setIdentifier("");
  };

  const onChangeRadio = (e: RadioChangeEvent) => {
    setValue(e.target.value);
    setSequence("");
  };

  return (
    <>
      <div className={styles.backgroundCard}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <h2 className={styles.title}>
            <span>Specify the target</span>
          </h2>
          <div
            onClick={infoGen}
            style={{ cursor: "pointer", paddingLeft: "10px" }}
          >
            <QuestionCircleOutlined style={{ color: "#00faab" }} />
          </div>
        </div>

        <div
          style={{ display: "flex", rowGap: "20px", flexDirection: "column" }}
        >
          <h4>Enter 1-5 sequences separated by semicolon</h4>
          <TextArea
            placeholder="GAGUUGUACGCCUAUGU"
            allowClear
            value={sequence}
            onChange={(e) => onChangeSequence(e.target.value)}
            rows={1}
          />
          <h4>or upload</h4>
          <div style={{ paddingLeft: "20px" }}>
            <Radio.Group onChange={onChangeRadio} value={value}>
              <Space direction="vertical" style={{ width: "100%" }}>
                <Radio value={1}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "970px",
                      flexDirection: "row",
                    }}
                  >
                    <p>From Ensembl genome database</p>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Input
                        placeholder="Gene/Transcript identifier"
                        allowClear
                        value={identifier}
                        style={{ width: 400 }}
                        disabled={value != 1}
                        onChange={(e) =>
                          setIdentifier(e.target.value.toUpperCase())
                        }
                      />
                    </div>
                  </div>
                </Radio>
                <Radio value={2}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      width: "970px",
                      flexDirection: "row",
                      alignItems: "center",
                    }}
                  >
                    <p>From local file (FASTA)</p>
                    <Button
                      icon={<UploadOutlined style={{ color: "#00faab" }} />}
                      disabled={value != 2}
                    >
                      Click to Upload
                    </Button>
                  </div>
                </Radio>
                <Radio value={3}>
                  <p>From example</p>
                </Radio>
              </Space>
            </Radio.Group>

            {value === 3 ? (
              <div style={{ paddingLeft: "35px" }}>
                <div className={styles.buttonSelect}>
                  <p>Gene/transcript identifier Target</p>
                  <Space.Compact>
                    <Button
                      size="small"
                      onClick={() => {
                        setIdentifier("NM_005656");
                        setSequence("");
                      }}
                    >
                      1
                    </Button>
                    <Button
                      size="small"
                      onClick={() => {
                        setIdentifier("TMPRSS2");
                        setSequence("");
                      }}
                    >
                      2
                    </Button>
                    <Button
                      size="small"
                      onClick={() => {
                        setIdentifier("ENSG00000184012");
                        setSequence("");
                      }}
                    >
                      3
                    </Button>
                  </Space.Compact>
                </div>
                <div className={styles.buttonSelect}>
                  <p>Target sequence</p>
                  <Space.Compact>
                    <Button
                      size="small"
                      onClick={() => {
                        setSequence("GAGUUGUACGCCUAUGUGAUGGA"),
                          setIdentifier("");
                      }}
                    >
                      4
                    </Button>
                    <Button
                      size="small"
                      onClick={() => {
                        setSequence("CAGCCAAGAUAAAUUUGAACUGA"),
                          setIdentifier("");
                      }}
                    >
                      5
                    </Button>
                  </Space.Compact>
                </div>
                <div className={styles.buttonSelect}>
                  <p>Specific region of the target sequence</p>
                  <Button
                    size="small"
                    onClick={() => {
                      setSequence(textweb.example_sequence);
                      setIdentifier("");
                    }}
                  >
                    6
                  </Button>
                </div>
              </div>
            ) : null}
          </div>

          <h4>and optionally</h4>
          <div style={{ marginTop: "5px", padding: "0px 15px 15px 15px" }}>
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
        </div>
      </div>
      <div className={styles.submitButton}>
        <Button
          type="primary"
          size="large"
          onClick={(e) => props.setByIdentifier(false)}
        >
          Submit
        </Button>
      </div>
    </>
  );
};

export default SearchByIdentifier;
