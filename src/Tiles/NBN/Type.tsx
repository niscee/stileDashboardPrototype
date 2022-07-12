// export interface StateType {
//   title: string;
//   avc: string;
//   TechnologyType: string;
//   Username: string;
//   FNNNumber: string;
//   PriNumber: string;
//   cvc: string;
// }

export interface ParameterType {
  payload: { [k: string]: any } | null;
}

export interface NbnType {
  state: ParameterType["payload"];
  status: string;
}

export interface ModalRenderType {
  payload: ParameterType["payload"];
  setShowMore: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface BodyRenderType {
  payload: ParameterType["payload"];
  setShowMore: React.Dispatch<React.SetStateAction<boolean>>;
}
