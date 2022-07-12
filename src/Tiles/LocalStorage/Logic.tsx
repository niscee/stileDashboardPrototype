import { getNBN } from "../../data";

const Logic = () => {
  // fetch data from server.
  const getDataHandler = () => {
    return getNBN();
  };

  return { getDataHandler };
};

export default Logic;
