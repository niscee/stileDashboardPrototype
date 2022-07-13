import { useState } from "react";
import { ReceivedPropsTypes } from "./Type";

const Logic = (getDataHandler: ReceivedPropsTypes["getDataHandler"]) => {
  const [data, setData] = useState<null | { [k: string]: any }>(null);
  const [status, setStatus] = useState<string>("initial");
  const [showMore, setShowMore] = useState<boolean>(false);

  // fetch api from database.
  const loadData = async () => {
    try {
      setStatus("loading");
      const res = await getDataHandler();
      await setData(res);
      setStatus("presentation");
    } catch (err) {
      console.log(err);
    }
  };

  // runs every certain time and returns last refresh time in minute e.g '5min ago.'
  const getLastRefereshTime = (time: string) => {
    console.log("time");
  };

  return { data, status, loadData, showMore, setShowMore, getLastRefereshTime };
};

export default Logic;

// getDataHandler()
//   .then((res) => {
//     switch (res.result) {
//       case "GOOD":
//         //TODO ://
//         break;

//       case "BAD":
//         //TODO ://

//         break;
//       case "UGLY":
//       default:
//         //TODO ://

//         break;
//     }
//     setData(res);
//     if (onDataLoaded) {
//       onDataLoaded(res);
//     }
//   })
//   .finally(() => setLoading(false));
