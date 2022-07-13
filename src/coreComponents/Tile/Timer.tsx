import { useState, useEffect } from "react";
import { TimerProps } from "./Type";

const Timer = (props: TimerProps) => {
  const [timer, setTimer] = useState(0);

  //gets timestamp as a prop from tiles component[NBN, LocalStorage, etc.] which is fetched from api and calculate the difference with current time and set the state.
  const getCalculatedTime = () => {
    const prevTime = new Date(props.time).getTime();
    const currentTime = new Date().getTime();
    const diff = currentTime - prevTime;
    const diffMins = Math.floor(diff / 1000 / 60);
    setTimer(diffMins);
  };

  useEffect(() => {
    if (timer < 6) {
      const intervalId = setInterval(getCalculatedTime, 1000);
      return () => clearInterval(intervalId);
    } else {
      return () => clearInterval();
    }
  }, []);

  return <>Last Update: {timer <= 5 ? timer : `more than ${timer}`}min ago</>;
};

export default Timer;
