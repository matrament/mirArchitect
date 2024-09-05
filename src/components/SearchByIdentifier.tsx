"use client";
import { useState } from "react";
import { Button, Radio, Input, Space, Tooltip, Modal, Collapse } from "antd";
import textweb from "../json/textweb.json";
import {
  QuestionCircleOutlined,
  UploadOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import styles from "./components.module.css";
import type { RadioChangeEvent } from "antd";
import AdvancedParameters from "./AdvancedParameters";
import Link from "next/link";
import type { SearchProps } from "antd/es/input/Search";
import { getEnsemblData } from "@/utils/getEnsemblData";

const SearchByIdentifier = (props: {
  identifier: string;
  setIdentifier: any;
  sequence: string;
  setSequence: any;
}) => {
  // const [identifier, setIdentifier] = useState<string>("");
  const [value, setValue] = useState(0);
  const { TextArea } = Input;

  const { Search } = Input;

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
    props.setSequence(e.toUpperCase());
    setValue(0);
    // setIdentifier("");
  };

  const onChangeRadio = (e: RadioChangeEvent) => {
    setValue(e.target.value);
    props.setSequence("");
  };

  const onSearch: SearchProps["onSearch"] = (value, _e, info) => {
    console.log(info?.source, value);
    // getEnsemblData(value);
  };

  return (
    <>
      <div className={styles.backgroundCard}>
        {/* <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* <h2 className={styles.title}>
            <span>Specify the target</span>
          </h2> */}
        {/* <div
            onClick={infoGen}
            style={{ cursor: "pointer", paddingLeft: "10px" }}
          > */}
        {/* <QuestionCircleOutlined style={{ color: "#00faab" }} />
          </div> 
        </div> */}

        <div
          style={{ display: "flex", rowGap: "20px", flexDirection: "column" }}
        >
          <p style={{ marginBottom: "0px" }}>
            Select from the available options:
          </p>

          <h4>enter an accession number or name of gene/transcript,</h4>
          <div
            style={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Search
              placeholder="NM_005656/TMPRSS2"
              allowClear
              value={props.identifier}
              disabled={props.sequence != ""}
              onChange={(e) =>
                props.setIdentifier(e.target.value.toUpperCase())
              }
              onSearch={onSearch}
              enterButton
            />
          </div>
          <h4>insert nucleotide sequence of your target</h4>
          <TextArea
            placeholder="GAGUUGUACGCCUAUGU"
            allowClear
            value={props.sequence}
            disabled={props.identifier != ""}
            onChange={(e) => onChangeSequence(e.target.value)}
            autoSize
          />
          <h4>or upload from:</h4>
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
                      alignItems: "center",
                    }}
                  >
                    <p>local file (FASTA)</p>
                    <Button
                      icon={<UploadOutlined style={{ color: "#00faab" }} />}
                      disabled={value != 1}
                    >
                      Click to Upload
                    </Button>
                  </div>
                </Radio>
                <Radio value={2}>
                  <p>ready-made example</p>
                </Radio>
              </Space>
            </Radio.Group>

            {value === 2 ? (
              <div style={{ paddingLeft: "35px" }}>
                <div className={styles.buttonSelect}>
                  <p>Gene/transcript identifier Target</p>
                  <Space.Compact>
                    <Button
                      size="small"
                      onClick={() => {
                        props.setIdentifier("NM_005656");
                        props.setSequence("");
                      }}
                    >
                      1
                    </Button>
                    <Button
                      size="small"
                      onClick={() => {
                        props.setIdentifier("TMPRSS2");
                        props.setSequence("");
                      }}
                    >
                      2
                    </Button>
                    <Button
                      size="small"
                      onClick={() => {
                        props.setIdentifier("ENSG00000184012");
                        props.setSequence("");
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
                        props.setSequence("GAGUUGUACGCCUAUGUGAUGGA"),
                          props.setIdentifier("");
                      }}
                    >
                      4
                    </Button>
                    <Button
                      size="small"
                      onClick={() => {
                        props.setSequence("CAGCCAAGAUAAAUUUGAACUGA"),
                          props.setIdentifier("");
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
                      props.setSequence(textweb.example_sequence);
                      props.setIdentifier("");
                    }}
                  >
                    6
                  </Button>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchByIdentifier;
