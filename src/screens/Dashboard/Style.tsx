import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "20%",
    margin: "10px auto",
    [theme.breakpoints.down("md")]: {
      width: "80%",
    },
  },
  searchbtn: {
    padding: "10px",
    width: "100%",
  },
  tileContainer: {
    width: "100%",
  },
}));

export default useStyles;
