import { message } from "antd";

export function getResult(
  taskID: string,
  setResultData: any,
  pollingInterval = 3000
) {
  const requestOptions = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*", //localhost zabezpieczenie
    },
  };
  requestOptions.headers["Access-Control-Allow-Origin"] = "*";

  fetch(
    `https://new-api.mirarchitect.cs.put.poznan.pl/${taskID}`,
    requestOptions
  )
    .then((response: any) => {
      if (response.status === 404) {
        message.error("Task not found");
        return null;
      } else {
        return response.json();
      }
    })
    .then((response: any) => {
      if (response && response.status === "finished") {
        setResultData(response.result);
      } else if (response && response.status === "in progress") {
        setTimeout(() => {
          getResult(taskID, setResultData, pollingInterval); // Retry after delay
        }, pollingInterval);
      } else if (response) {
        message.info("Unexpected status: " + response.status);
      }
    })
    .catch((error: any) => message.error("Something went wrong, try again"));
}
