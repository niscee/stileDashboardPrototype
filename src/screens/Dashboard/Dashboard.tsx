import useStyles from "./Style";
import Nbn from "../../Tiles/NBN";
import LocalStorage from "../../Tiles/LocalStorage";

const Dashboard = () => {
  const { container, tileContainer }: any = useStyles();

  return (
    <div className={container}>
      <div className={tileContainer}>
        <Nbn />
        <LocalStorage />
      </div>
    </div>
  );
};

export default Dashboard;
