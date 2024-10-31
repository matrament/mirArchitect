"use client";
import styles from "../components/components.module.css";
import {
  Divider,
  Checkbox,
  Button,
  Row,
  Col,
  InputNumber,
  Switch,
  Form,
} from "antd";
import { useState } from "react";
import { task } from "@/types/inputType";
import type { CheckboxProps, GetProp } from "antd";
import { ReloadOutlined } from "@ant-design/icons";
type CheckboxValueType = GetProp<typeof Checkbox.Group, "value">[number];
import textweb from "../json/textweb.json";
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

const DesignParametrization = (props: { task: task; setTask: any }) => {
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

  const onFormLayoutChange = (parameter: { [key: string]: any }) => {
    const [key, value] = Object.entries(parameter)[0];
    props.setTask({
      ...props.task,
      params: { ...props.task.params, [key]: value },
    });
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
      </div>
      <Divider />
      <Form layout="horizontal" onValuesChange={onFormLayoutChange}>
        <Form.Item>
          <Button htmlType="reset" icon={<ReloadOutlined />}>
            Reset settings
          </Button>
        </Form.Item>
        <Row>
          <Col span={30} key={1}>
            <Form.Item
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
              }}
              name="GC_min"
              label="Min GC content (%):"
              tooltip={textweb.advanced_parameters.min_gc_content}
              initialValue={30}
              rules={[
                { required: true, message: "Please enter value" },
                { min: 0, max: 100, type: "number" },
                {
                  warningOnly: true,
                  min: 30,
                  message: "not recommended value",
                  type: "number",
                },
              ]}
            >
              <InputNumber />
            </Form.Item>

            <Form.Item
              name="GC_max"
              label="Max GC content (%):"
              tooltip={textweb.advanced_parameters.max_gc_content}
              initialValue={65}
              rules={[
                { required: true, message: "Please enter value" },
                { min: 0, max: 100, type: "number" },
                {
                  warningOnly: true,
                  max: 65,
                  message: "not recommended value",
                  type: "number",
                },
              ]}
            >
              <InputNumber />
            </Form.Item>

            <Form.Item
              name="max_GC_stretch"
              label="Max GC stretch:"
              tooltip={textweb.advanced_parameters.max_gc_stretch}
              initialValue={9}
              rules={[
                { required: true, message: "Please enter value" },
                { min: 1, max: 1000, type: "number" },
                {
                  warningOnly: true,
                  max: 9,
                  message: "not recommended value",
                  type: "number",
                },
              ]}
            >
              <InputNumber />
            </Form.Item>

            <Form.Item
              name="bind_init"
              label="Number of bps to init binding:"
              tooltip={
                textweb.advanced_parameters.number_of_bps_to_init_binding
              }
              initialValue={5}
              rules={[
                { required: true, message: "Please enter value" },
                { min: 0, max: 21, type: "number" },
              ]}
            >
              <InputNumber />
            </Form.Item>
            <Form.Item
              name="5prime_diff_len"
              label="Bps to init duplex dissociation:"
              tooltip={
                textweb.advanced_parameters
                  .number_of_bps_to_init_duplex_dissociation
              }
              initialValue={3}
              rules={[
                { required: true, message: "Please enter value" },
                { min: 0, max: 10, type: "number" },
              ]}
            >
              <InputNumber />
            </Form.Item>

            <Form.Item
              name="5prime_diff_min"
              label="Min MFE difference between ends:"
              tooltip={
                textweb.advanced_parameters.min_mfe_difference_between_ends
              }
              initialValue={2.0}
              rules={[
                { required: true, message: "Please enter value" },
                { min: 0, max: 100.0, type: "number" },
              ]}
            >
              <InputNumber />
            </Form.Item>
          </Col>
          <Col span={30} offset={6} key={2}>
            <Form.Item
              name="diff_max"
              label="2D struct. differences:"
              tooltip={textweb.advanced_parameters.two_d_structure_differences}
              initialValue={4}
              rules={[
                { required: true, message: "Please enter value" },
                { min: 0, max: 1000, type: "number" },
                {
                  warningOnly: true,
                  max: 4,
                  message: "not recommended value",
                  type: "number",
                },
              ]}
            >
              <InputNumber />
            </Form.Item>

            <Form.Item
              name="max_tm"
              label="Max melting temperature:"
              tooltip={textweb.advanced_parameters.max_melting_temperature}
              initialValue={21.5}
              rules={[
                { required: true, message: "Please enter value" },
                { min: 0, max: 100.0, type: "number" },
                {
                  warningOnly: true,
                  max: 21.5,
                  message: "not recommended value",
                  type: "number",
                },
              ]}
            >
              <InputNumber />
            </Form.Item>
            <Form.Item
              name="force_insert_prefix"
              label="Different prefixes:"
              tooltip={textweb.advanced_parameters.different_prefixes}
              valuePropName="checked"
            >
              <Switch defaultChecked />
            </Form.Item>
            <Form.Item
              name="filter_offtargets"
              label="Filter off-targets:"
              tooltip={textweb.advanced_parameters.filter_off_targets}
              valuePropName="checked"
            >
              <Switch />
            </Form.Item>
            <Form.Item
              name="bad_prefix_score"
              label="Penalty for bad prefix:"
              tooltip={textweb.advanced_parameters.penalty_for_bad_prefix}
              initialValue={2.5}
              rules={[
                { required: true, message: "Please enter value" },
                { min: 0, max: 5.0, type: "number" },
              ]}
            >
              <InputNumber />
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
};
export default DesignParametrization;
