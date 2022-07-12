import { useState } from "react";
import { ReceivedPropsTypes } from "./Type";

const Logic = (getDataHandler: ReceivedPropsTypes["getDataHandler"]) => {
  const [data, setData] = useState<null | object>(null);
  const [status, setStatus] = useState<string>("initial");
  const [showMore, setShowMore] = useState<boolean>(false);

  const loadData = async () => {
    console.log("running");
    try {
      setStatus("loading");
      const res = await getDataHandler();
      await setData(res);
      setStatus("presentation");
    } catch (err) {
      console.log(err);
    }
  };

  return { data, status, loadData, showMore, setShowMore };
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
