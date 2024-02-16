import { WorkOrderInterface } from "../../interface/interface";
import Work_Order from "../../models/WorkOrder";

const GenerateWONumber = async (
  data: WorkOrderInterface
): Promise<WorkOrderInterface> => {
  // Generate random work order number
  function generate(): string {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let result: string = "";
    const charactersLength = characters.length;
    for (let i = 0; i < 8; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }

  let result = generate();
  console.log("this is the result", result);

  // Check to see if number has already been used.
  async function checkWONumberExists(valueToCheck: string): Promise<boolean> {
    try {
      const result = await Work_Order.findOne({
        where: { order_number: valueToCheck },
      });

      return result !== null;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  }

  checkWONumberExists(result)
    .then((exists) => {
      if (exists) {
        console.log("WONumber exists.");
        const newNumber = generate();
        checkWONumberExists(newNumber);
      } else {
        console.log("WONumber does not exist.");
        return result;
      }
    })
    .catch((error) => {
      console.error("Error:", error);
    });

  // Get Julian Day
  const now = new Date();
  const startOfToday = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate()
  );
  const JDStart = 2440587.5; // Julian Day for January 1, 1970, 00:00 UTC
  const dayMilliSeconds = 86400000; // Number of milliseconds in a day
  const day: number = Math.floor(
    JDStart + startOfToday.getTime() / dayMilliSeconds
  );

  const orderNumber = `${result}-${day}`;

  const updatedData: WorkOrderInterface = {
    ...data,
    updatedWorkOrder: {
      ...data.updatedWorkOrder,
      order_number: orderNumber,
    },
  };

  return updatedData;
};

export default GenerateWONumber;
