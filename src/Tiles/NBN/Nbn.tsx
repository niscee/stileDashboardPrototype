import Tile from "../../coreComponents/Tile";
import Logic from "./Logic";
import useStyles from "./Style";
import { ModalRenderType, BodyRenderType } from "./Type";
import Modal from "./Modal";

const Nbn = () => {
  // receiving class name from style.
  const { keyText }: any = useStyles();

  // receiving state/function from custom hook(logic).
  const { getDataHandler } = Logic();

  // list of component info keys.
  const credentials: string[] = [
    "AVC",
    "Username",
    "FNN Number",
    "PriNumber",
    "Technology",
    "FNN Number",
    "Technology",
  ];

  // receives component body data from Tile and render those data in body.
  const bodyRenderHandler = (payload: BodyRenderType["payload"]) => {
    return (
      <>
        <div>
          {credentials.map((credit: string, key) => {
            return (
              <p key={key} className={keyText}>
                {credit}
              </p>
            );
          })}
        </div>
        {payload && (
          <div>
            <p>{payload.avc}</p>
            <p>{payload.Username}</p>
            <p>{payload.FNNNumber}</p>
            <p>{payload.TechnologyType}</p>
            <p>{payload.TechnologyType}</p>
            <p>{payload.FNNNumber}</p>
            <p>{payload.TechnologyType}</p>
          </div>
        )}
      </>
    );
  };

  // receives data from Tile and render those data in Modal.
  const modalRenderHandler = (
    payload: any,
    setShowMore: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    return (
      <Modal
        payload={payload.modalInfo}
        closeModalHandler={() => {
          setShowMore(false);
        }}
      />
    );
  };

  return (
    <>
      {/* Making instance of Tile Component which is in Tile Folder, and sending props. */}
      <Tile
        title="Last Modem Reboot"
        footerTitle="More Info"
        getDataHandler={getDataHandler}
        bodyRenderHandler={bodyRenderHandler}
        modalRenderHandler={modalRenderHandler}
      ></Tile>
    </>
  );
};

export default Nbn;
