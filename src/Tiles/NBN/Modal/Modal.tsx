import useStyles from "./Style";
import { ReceivedPropsTypes } from "./Type";

const Modal = (props: ReceivedPropsTypes) => {
  const { mainContainer }: any = useStyles();
  return (
    <div className={mainContainer}>
      {props.payload}
      <br></br>
      <br></br>
      <button onClick={props.closeModalHandler}>CLOSE</button>
    </div>
  );
};

export default Modal;
