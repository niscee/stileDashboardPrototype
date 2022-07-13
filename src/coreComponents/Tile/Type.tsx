export interface ParameterType {
  payload: { [k: string]: any } | null;
}

export interface ReceivedPropsTypes {
  title: string;
  footerTitle?: string;
  getDataHandler: () => Promise<any>;
  bodyRenderHandler: (payload: ParameterType["payload"]) => JSX.Element;
  modalRenderHandler?: (
    payload: ParameterType["payload"],
    setShowMore: React.Dispatch<React.SetStateAction<boolean>>
  ) => JSX.Element;
}

export interface TimerProps {
  time: string;
}
