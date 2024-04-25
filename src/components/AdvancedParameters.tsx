"use client";
import { InputNumber, Checkbox, Select, Tooltip, Button, Modal } from "antd";
import textweb from "../json/textweb.json";
import styles from "./components.module.css";
import { useState } from "react";
import { InfoCircleOutlined, ReloadOutlined } from "@ant-design/icons";

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
        <Tooltip title={textweb.advanced_parameters.min_gc_content}>
          <div className={styles.parameter}>
            Min GC content (%):{" "}
            <InputNumber
              min={0}
              max={100}
              defaultValue={30}
              onChange={() => console.log("1")}
            />
          </div>
        </Tooltip>
        <Tooltip title={textweb.advanced_parameters.max_gc_content}>
          <div className={styles.parameter}>
            Max GC content (%):{" "}
            <InputNumber
              min={0}
              max={100}
              defaultValue={65}
              onChange={() => console.log("1")}
            />
          </div>
        </Tooltip>
        <Tooltip title={textweb.advanced_parameters.max_gc_stretch}>
          <div className={styles.parameter}>
            Max GC stretch:{" "}
            <InputNumber
              min={1}
              max={10000}
              defaultValue={9}
              onChange={() => console.log("1")}
            />
          </div>
        </Tooltip>
        <Tooltip
          title={textweb.advanced_parameters.number_of_bps_to_init_binding}
        >
          <div className={styles.parameter}>
            Number of bps to init binding:{" "}
            <InputNumber
              min={0}
              max={21}
              defaultValue={5}
              onChange={() => console.log("1")}
            />
          </div>
        </Tooltip>
        <Tooltip
          title={
            textweb.advanced_parameters
              .number_of_bps_to_init_duplex_dissociation
          }
        >
          <div className={styles.parameter}>
            Bps to init duplex dissociation:{" "}
            <InputNumber
              min={0}
              max={10}
              defaultValue={3}
              onChange={() => console.log("1")}
            />
          </div>
        </Tooltip>
        <Tooltip
          title={textweb.advanced_parameters.min_mfe_difference_between_ends}
        >
          <div className={styles.parameter}>
            Min MFE difference between ends:{" "}
            <InputNumber
              min={0}
              max={100.0}
              defaultValue={2.0}
              onChange={() => console.log("1")}
            />
          </div>
        </Tooltip>
        <Tooltip
          title={textweb.advanced_parameters.two_d_structure_differences}
        >
          <div className={styles.parameter}>
            2D struct. differences:{" "}
            <InputNumber
              min={0}
              max={1000}
              defaultValue={4}
              onChange={() => console.log("1")}
            />
          </div>
        </Tooltip>
        <Tooltip title={textweb.advanced_parameters.max_melting_temperature}>
          <div className={styles.parameter}>
            Max melting temperature:{" "}
            <InputNumber
              min={0}
              max={100.0}
              defaultValue={21.5}
              onChange={() => console.log("1")}
            />
          </div>
        </Tooltip>
        <Tooltip title={textweb.advanced_parameters.different_prefixes}>
          <div className={styles.parameter}>
            Different prefixes: <Checkbox onChange={() => console.log("1")} />
          </div>
        </Tooltip>
        <Tooltip title={textweb.advanced_parameters.filter_off_targets}>
          <div className={styles.parameter}>
            Filter off-targets: <Checkbox onChange={() => console.log("1")} />
          </div>
        </Tooltip>
        <Tooltip title={textweb.advanced_parameters.penalty_for_bad_prefix}>
          <div className={styles.parameter}>
            Penalty for bad prefix:{" "}
            <InputNumber
              min={0}
              max={5}
              defaultValue={2.5}
              onChange={() => console.log("1")}
            />
          </div>
        </Tooltip>
      </div>
    </div>
  );
};

export default AdvancedParameters;
