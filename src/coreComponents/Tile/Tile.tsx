import Paper from "@material-ui/core/Paper";
import useStyles from "./Style";
import { ReceivedPropsTypes } from "./Type";
import Logic from "./Logic";
import Box from "@material-ui/core/Box";
import { SpinnerCircularSplit } from "spinners-react";
import LoopIcon from "@material-ui/icons/Loop";
import Dialog from "@material-ui/core/Dialog";

/* Main Base Component, receives props from subcomponent which is in Tiles folder, display UI according to received props. */
const Tile = ({
  title,
  getDataHandler,
  bodyRenderHandler,
  footerTitle,
  modalRenderHandler,
}: ReceivedPropsTypes) => {
  // destructuring classname from style page.
  const {
    headerContainer,
    headerSubTitle,
    headerTitle,
    subHeader,
    largeDiv,
    bodyContainer,
    footerContainer,
    footerButton,
  } = useStyles();

  // destructuring state/function from custom hook(Logic).
  const { data, status, loadData, showMore, setShowMore } =
    Logic(getDataHandler);

  console.log(data);
  return (
    <>
      <button onClick={() => loadData()} style={{ width: "100%" }}>
        SEARCH USER
      </button>

      {/* Receives props from subcomponent which are in Tiles Folder and stucture the layout according to it */}
      <Paper elevation={4} className={largeDiv}>
        {/* Header UI */}
        <Box className={headerContainer}>
          <div className={subHeader}>
            <p className={headerTitle}>{title}</p>
            {status === "presentation" && (
              <>
                {loadData && (
                  <LoopIcon
                    onClick={() => {
                      loadData();
                    }}
                  />
                )}
              </>
            )}
          </div>
          {status === "presentation" && (
            <p className={headerSubTitle}>Status 09.59.41</p>
          )}
        </Box>
        {/* Body UI */}
        <div className={bodyContainer}>
          {status === "presentation" && bodyRenderHandler(data)}
          {status === "loading" && (
            <div
              style={{
                width: "30%",
                margin: "auto",
              }}
            >
              <SpinnerCircularSplit size="70" thickness={40} />
            </div>
          )}
        </div>
        {/* Footer UI */}
        <Box className={footerContainer}>
          {status === "presentation" && (
            <>
              {footerTitle && (
                <button
                  className={footerButton}
                  onClick={() => setShowMore(true)}
                >
                  {footerTitle}
                </button>
              )}
            </>
          )}
        </Box>
      </Paper>
      {/* rendering Modal  */}
      {modalRenderHandler && (
        <Dialog open={showMore} onClose={() => setShowMore(false)}>
          {data && modalRenderHandler(data, setShowMore)}
        </Dialog>
      )}
    </>
  );
};

export default Tile;
