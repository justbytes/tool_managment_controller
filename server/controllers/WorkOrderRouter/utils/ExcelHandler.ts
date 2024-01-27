import * as childProcess from "child_process";
import * as path from "path";

import { WorkOrderInterface } from "../../../interface/interface";

const ExcelHandler = async (data: WorkOrderInterface): Promise<string> => {
  const filePath = path.join(__dirname, "HandleExcel.py");

  console.log("Data sent to python", data);

  const python = childProcess.spawn("py", [filePath, JSON.stringify(data)]);

  python.stdout.on("data", (data) => {
    // console.log("data recieved from python", JSON.parse(data.toString()));
    console.log("data recieved from python", data.toString());
  });

  python.stderr.on("data", (data) => {
    console.error(`Error: ${data.toString()}`);
  });

  python.on("close", (code) => {
    console.log(`Child process exited with code ${code}`);
  });

  var x: string = "Maybe some more logic here later...";
  return x;
};

export default ExcelHandler;
