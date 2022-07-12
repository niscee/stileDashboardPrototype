import { getAVC } from "../../data";

const Logic = () => {
  // fetch data from server.
  const getDataHandler = () => {
    return getAVC();
  };

  return { getDataHandler };
};

export default Logic;
