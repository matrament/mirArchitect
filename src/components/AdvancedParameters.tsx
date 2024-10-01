"use client";
import {
  InputNumber,
  Checkbox,
  Select,
  Tooltip,
  Button,
  Modal,
  Form,
  Switch,
} from "antd";
import textweb from "../json/textweb.json";
import styles from "./components.module.css";
import { useState } from "react";
import { InfoCircleOutlined, ReloadOutlined } from "@ant-design/icons";
import { number } from "echarts";

const AdvancedParameters = () => {
  const infoAdvance = () => {
    Modal.info({
      title: "This is a notification message",
      content: (
        <div>
          <p>
            Optimal parameters to design amiRNA are chosen and fixed (as
            indicated below). However, if needed, any/all of them could be
            changed based on individual preferences (within the permissible
            range)
          </p>
        </div>
      ),
      onOk() {},
    });
  };

  return (
    <div className={styles.tableParameters}>
      <div className={styles.buttonParameters}>
        <Button icon={<ReloadOutlined />}>Reset settings</Button>
        <Button icon={<InfoCircleOutlined />}>Info</Button>
      </div>
      <div className={styles.columnsParameters}>
        <Form>
          <Form.Item
            name="min_gc_content"
            label="Min GC content (%):"
            tooltip={textweb.advanced_parameters.min_gc_content}
            initialValue={30}
            rules={[
              { required: true, message: "Please enter value" },
              { min: 0, max: 100, type: "number" },
              { warningOnly: true, min: 30, message: "tak se", type: "number" },
            ]}
            // min={0}
            // max={100}
            // defaultValue={30}
            // onChange={() => console.log("1")}
          >
            <InputNumber />
          </Form.Item>

          <Form.Item
            name="max_gc_content"
            label="Max GC content (%):"
            tooltip={textweb.advanced_parameters.max_gc_content}
            initialValue={65}
            rules={[
              { required: true, message: "Please enter value" },
              { min: 0, max: 100, type: "number" },
              {
                warningOnly: true,
                max: 65,
                message: "tak se",
                type: "number",
              },
            ]}
          >
            <InputNumber />
          </Form.Item>

          <Form.Item
            name="max_gc_stretch"
            label="Max GC stretch:"
            tooltip={textweb.advanced_parameters.max_gc_stretch}
            initialValue={9}
            rules={[
              { required: true, message: "Please enter value" },
              { min: 1, max: 1000, type: "number" },
              { warningOnly: true, max: 9, message: "tak se", type: "number" },
            ]}
          >
            <InputNumber />
          </Form.Item>

          <Form.Item
            name="number_of_bps_to_init_binding"
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
            name="number_of_bps_to_init_duplex_dissociation"
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
            name="min_mfe_difference_between_ends"
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

          <Form.Item
            name="two_d_structure_differences"
            label="2D struct. differences:"
            tooltip={textweb.advanced_parameters.two_d_structure_differences}
            initialValue={4}
            rules={[
              { required: true, message: "Please enter value" },
              { min: 0, max: 1000, type: "number" },
              { warningOnly: true, max: 4, message: "tak se", type: "number" },
            ]}
          >
            <InputNumber />
          </Form.Item>

          <Form.Item
            name="max_melting_temperature"
            label="Max melting temperature:"
            tooltip={textweb.advanced_parameters.max_melting_temperature}
            initialValue={21.5}
            rules={[
              { required: true, message: "Please enter value" },
              { min: 0, max: 100.0, type: "number" },
              {
                warningOnly: true,
                max: 21.5,
                message: "tak se",
                type: "number",
              },
            ]}
          >
            <InputNumber />
          </Form.Item>
          <Form.Item
            name="different_prefixes"
            label="Different prefixes:"
            tooltip={textweb.advanced_parameters.different_prefixes}
            valuePropName="checked"
          >
            <Switch />
          </Form.Item>
          <Form.Item
            name="filter_off_targets"
            label="Different prefixes:"
            tooltip={textweb.advanced_parameters.filter_off_targets}
            valuePropName="checked"
          >
            <Switch />
          </Form.Item>
          <Form.Item
            name="penalty_for_bad_prefix"
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
        </Form>
      </div>
    </div>
  );
};

export default AdvancedParameters;
