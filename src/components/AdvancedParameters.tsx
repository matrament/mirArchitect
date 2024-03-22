import { InputNumber, Checkbox, Select, Tooltip, Button } from "antd";
import textweb from "../json/textweb.json";

const AdvancedParameters = () => {
  return (
    <>
      <Button>Reset settings</Button>
      <div>
        <Tooltip title={textweb.advanced_parameters.min_gc_content}>
          <div>
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
          <div>
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
          <div>
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
          <div>
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
          <div>
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
          <div>
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
          <div>
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
          <div>
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
          <div>
            Different prefixes: <Checkbox onChange={() => console.log("1")} />
          </div>
        </Tooltip>
        <Tooltip title={textweb.advanced_parameters.filter_off_targets}>
          <div>
            Filter off-targets: <Checkbox onChange={() => console.log("1")} />
          </div>
        </Tooltip>
        <Tooltip title={textweb.advanced_parameters.penalty_for_bad_prefix}>
          <div>
            Penalty for bad prefix:{" "}
            <InputNumber
              min={0}
              max={5}
              defaultValue={2.5}
              onChange={() => console.log("1")}
            />
          </div>
        </Tooltip>
        <Tooltip title={textweb.advanced_parameters.amirna_id}>
          <div>
            amiRNA ID:{" "}
            <Select
              defaultValue="lucy"
              style={{ width: 120 }}
              onChange={() => console.log("1")}
              options={[
                { value: "jack", label: "Jack" },
                { value: "lucy", label: "Lucy" },
                { value: "Yiminghe", label: "yiminghe" },
                { value: "disabled", label: "Disabled", disabled: true },
              ]}
            />
          </div>
        </Tooltip>
      </div>
    </>
  );
};

export default AdvancedParameters;
