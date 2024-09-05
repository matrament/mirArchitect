"use client";
import { useState } from "react";
import styles from "./page.module.css";
import { Button, Form, Input, Space, Tooltip, Collapse, Card } from "antd";
import TableSequenceResult from "@/components/TableSequenceResult";

const Result = () => {
  return (
    <>
      <h2>Result</h2>
      <Collapse
        items={[
          {
            key: "1",
            label: <>table</>,
            children: <TableSequenceResult />,
          },
        ]}
      />
      <div>
        <Card title="ACGU" bordered={false} style={{ width: 300 }}>
          <p>off-targets detected</p>
          <p>Card content</p>
        </Card>
        <Card title="ACGU" bordered={false} style={{ width: 300 }}>
          <p>???</p>
        </Card>
        <div>
          ATGAATGTAGAAAAGGCTGAATTCTGTAATAAAAGCAAACAGCCTGGCTTAGCAAGGAGCCAACATAACAGATGGGCTGG
          ATGAATGTAGAAAAGGCTGAATTCTGTAATAAAAGCAAACAGCCTGGCTTAGCAAGGAGCCAACATAACAGATGGGCTGG
          ATGAATGTAGAAAAGGCTGAATTCTGTAATAAAAGCAAACAGCCTGGCTTAGCAAGGAGCCAACATAACAGATGGGCTGG
          ATGAATGTAGAAAAGGCTGAATTCTGTAATAAAAGCAAACAGCCTGGCTTAGCAAGGAGCCAACATAACAGATGGGCTGG
        </div>
      </div>
    </>
  );
};

export default Result;
