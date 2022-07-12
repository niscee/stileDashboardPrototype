import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  smallDiv: {
    width: 200,
    height: 200,
    position: "relative",
    margin: "0.8rem auto",
    padding: "0.1rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderTop: "2.5px solid #00bcd4",
  },
  largeDiv: {
    elevation: 3,
    width: 250,
    height: 400,
    position: "relative",
    margin: "1rem auto",
    padding: "0.6rem",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    borderTop: "3px solid #00bcd4",
    borderRadius: "3%",
  },
  headerContainer: {
    height: "10%",
  },
  subHeader: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    height: "45%",
  },
  headerTitle: {
    fontWeight: "bold",
    fontSize: "0.9rem",
  },
  headerSubTitle: {
    fontSize: "0.7rem",
    fontWeight: "bold",
  },
  bodyContainer: {
    height: "80%",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 0,
    gap: "0.6rem",
    lineHeight: "0.9rem",
    fontSize: "0.8rem",
  },
  footerContainer: {
    height: "5%",
  },
  footerButton: {
    color: "white",
    backgroundColor: "#2962ff",
    border: "none",
    cursor: "pointer",
    borderRadius: "3%",
    padding: "5px",
    width: "35%",
    float: "right",
  },
});

export default useStyles;
