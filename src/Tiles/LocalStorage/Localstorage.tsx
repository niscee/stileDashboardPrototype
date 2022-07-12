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
    "Title",
    "Time",
    "GHz",
    "HighGHz",
    "Mesh",
    "ConnectedDevice",
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
            <p>{payload.title}</p>
            <p>{payload.time}</p>
            <p>{payload.GHz}</p>
            <p>{payload.HighGHz}</p>
            <p>{payload.Mesh}</p>
            <p>{payload.ConnectedDevice}</p>
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
      {/* Making instance of Tile Component which is in Tile Folder, and sending props. footerTitle and modalRenderHandler are optional, some Tiles doesnt have more info.*/}
      <Tile
        title="Local Storage"
        getDataHandler={getDataHandler}
        bodyRenderHandler={bodyRenderHandler}
        // footerTitle="More Info"
        // modalRenderHandler={modalRenderHandler}
      ></Tile>
    </>
  );
};

export default Nbn;
