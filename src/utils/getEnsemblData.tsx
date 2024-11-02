import { message } from "antd";
import lang from "../json/lang.json";
export function getEnsemblData(ensemblId: string, setEnsemblData: any) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  fetch(
    "https://rest.ensembl.org/xrefs/symbol/human/" +
      ensemblId +
      "?content-type=application/json",
    requestOptions
  )
    .then((response: any) => response.json())
    .then((response: any) => {
      if (response.length === 0) {
        // setPdbError(true);
        message.error(lang.rcsb_error_with_name + "'" + ensemblId + "'");
      } else {
        setEnsemblData(response);
      }
    });
}
