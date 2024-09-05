"use client";
import styles from "../components/components.module.css";
import { Divider, Checkbox, Button } from "antd";
import AdvancedParameters from "./AdvancedParameters";
import { useState } from "react";

import type { CheckboxProps, GetProp } from "antd";
import { getResult } from "@/utils/getResult";

type CheckboxValueType = GetProp<typeof Checkbox.Group, "value">[number];

const CheckboxGroup = Checkbox.Group;

const plainOptions = [
  "hsa-mir-21",
  "hsa-mir-30a",
  "hsa-mir-33a",
  "hsa-mir-122",
  "hsa-mir-135b",
  "hsa-mir-136-v1",
  "hsa-mir-155",
  "hsa-mir-203a",
];

const defaultCheckedList = [
  "hsa-mir-21",
  "hsa-mir-30a",
  "hsa-mir-33a",
  "hsa-mir-122",
  "hsa-mir-135b",
  "hsa-mir-136-v1",
  "hsa-mir-155",
  "hsa-mir-203a",
];

const example = {
  seq: "ATGCCTCTGAATCAAAAGGCAAAGAGAGAGTTATGCATTGGCTGGGGAGACCCATCTGGACTACCAAGGAGAAGCTATAGACTACTTCTACTCCACCAGGAAGGTCATATTGAACATTCCAGATACCTATCATTACTCGATGCTGTTGATAACAGCAAGATGGCTTTGAACTCAGGGTCACCACCAGCTATTGGACCTTACTATGAAAACCATGGATACCAACCGGAAAACCCCTATCCCGCACAGCCCACTGTGGTCCCCACTGTCTACGAGGTGCATCCGGCTCAGTACTACCCGTCCCCCGTGCCCCAGTACGCCCCGAGGGTCCTGACGCAGGCTTCCAACCCCGTCGTCTGCACGCAGCCCAAATCCCCATCCGGGACAGTGTGCACCTCAAAGACTAAGAAAGCACTGTGCATCACCTTGACCCTGGGGACCTTCCTCGTGGGAGCTGCGCTGGCCGCTGGCCTACTCTGGAAGTTCATGGGCAGCAAGTGCTCCAACTCTGGGATAGAGTGCGACTCCTCAGGTACCTGCATCAACCCCTCTAACTGGTGTGATGGCGTGTCACACTGCCCCGGCGGGGAGGACGAGAATCGGTGTGTTCGCCTCTACGGACCAAACTTCATCCTTCAGGTGTACTCATCTCAGAGGAAGTCCTGGCACCCTGTGTGCCAAGACGACTGGAACGAGAACTACGGGCGGGCGGCCTGCAGGGACATGGGCTATAAGAATAATTTTTACTCTAGCCAAGGAATAGTGGATGACAGCGGATCCACCAGCTTTATGAAACTGAACACAAGTGCCGGCAATGTCGATATCTATAAAAAACTGTACCACAGTGATGCCTGTTCTTCAAAAGCAGTGGTTTCTTTACGCTGTATAGCCTGCGGGGTCAACTTGAACTCAAGCCGCCAGAGCAGGATTGTGGGCGGCGAGAGCGCGCTCCCGGGGGCCTGGCCCTGGCAGGTCAGCCTGCACGTCCAGAACGTCCACGTGTGCGGAGGCTCCATCATCACCCCCGAGTGGATCGTGACAGCCGCCCACTGCGTGGAAAAACCTCTTAACAATCCATGGCATTGGACGGCATTTGCGGGGATTTTGAGACAATCTTTCATGTTCTATGGAGCCGGATACCAAGTAGAAAAAGTGATTTCTCATCCAAATTATGACTCCAAGACCAAGAACAATGACATTGCGCTGATGAAGCTGCAGAAGCCTCTGACTTTCAACGACCTAGTGAAACCAGTGTGTCTGCCCAACCCAGGCATGATGCTGCAGCCAGAACAGCTCTGCTGGATTTCCGGGTGGGGGGCCACCGAGGAGAAAGGGAAGACCTCAGAAGTGCTGAACGCTGCCAAGGTGCTTCTCATTGAGACACAGAGATGCAACAGCAGATATGTCTATGACAACCTGATCACACCAGCCATGATCTGTGCCGGCTTCCTGCAGGGGAACGTCGATTCTTGCCAGGGTGACAGTGGAGGGCCTCTGGTCACTTCGAAGAACAATATCTGGTGGCTGATAGGGGATACAAGCTGGGGTTCTGGCTGTGCCAAAGCTTACAGACCAGGAGTGTACGGGAATGTGATGGTATTCACGGACTGGATTTATCGACAAATGAGGGCAGACGGCTAA",
  params: {},
  targets: [
    "G",
    "SSS",
    "SSS",
    "SSS",
    "SSS",
    "SSS",
    "SSS",
    "SSS",
    "SSS",
    "SSS",
    "SSS",
    "SSS",
    "SSS",
    "SSS",
    "SSS",
    "SSS",
    "SSS",
    "SSS",
    "SSS",
    "SSS",
    "SSS",
    "SSS",
    "SSS",
  ],
};

const DesignParametrization = () => {
  const [checkedList, setCheckedList] =
    useState<CheckboxValueType[]>(defaultCheckedList);
  const checkAll = plainOptions.length === checkedList.length;
  const indeterminate =
    checkedList.length > 0 && checkedList.length < plainOptions.length;

  const onChang = (list: CheckboxValueType[]) => {
    setCheckedList(list);
  };

  const onCheckAllChange: CheckboxProps["onChange"] = (e) => {
    setCheckedList(e.target.checked ? plainOptions : []);
  };

  return (
    <div className={styles.backgroundCard}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "10px",
          padding: "0px 20px 25px 20px",
        }}
      >
        <h1>amiRNA ID:</h1>
        <Checkbox
          indeterminate={indeterminate}
          onChange={onCheckAllChange}
          checked={checkAll}
        >
          Check all
        </Checkbox>
        <CheckboxGroup
          options={plainOptions}
          value={checkedList}
          onChange={onChang}
        />
      </div>{" "}
      <Divider />
      <AdvancedParameters />,
      {/* <Button onClick={() => getResult(example)}>Submit result</Button> */}
    </div>
  );
};
export default DesignParametrization;
