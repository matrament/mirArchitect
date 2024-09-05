import { message } from "antd";
// import lang from "./lang.json";
// import config from "../config.json";

export function getResult(data: any) {
  const requestOptions = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*", //localhost zabazpieczenie
    },
  };
  requestOptions.headers["Access-Control-Allow-Origin"] = "*";
  fetch(`https://api.mirarchitect.cs.put.poznan.pl`, requestOptions)
    .then((response: any) => {
      if (response.status == 404) {
        message.error("error");
        // setLoading(false);
        return "";
      } else {
        return response.json();
      }
    })
    .then((response: any) => {
      if (response != "") {
        console.log(response);
      }
    })
    .catch((error: any) => message.error("Something went wrong, try again"));
}
