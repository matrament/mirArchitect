"use client";
import { InputNumber, Button, Form, Switch, Col, Row } from "antd";
import textweb from "../json/textweb.json";
import { ReloadOutlined } from "@ant-design/icons";

const AdvancedParameters = () => {
  const onFormLayoutChange = (size: any) => {
    console.log(size);
  };

  return (
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
            tooltip={textweb.advanced_parameters.number_of_bps_to_init_binding}
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
  );
};

export default AdvancedParameters;
