// Initial component from: https://overreacted.io/making-setinterval-declarative-with-react-hooks/
// Revisions made based on Adam Katz response: https://stackoverflow.com/questions/66043252/react-hooks-useinterval-reset-after-button-click
import { MutableRefObject, useEffect, useRef } from 'react';

const useInterval = (callback: any, delay: number) => {
  const intervalIdRef: MutableRefObject<any> = useRef();

  // handle tick
  useEffect(() => {
    const tick = () => {
      callback();
    };

    if (delay !== null) {
      intervalIdRef.current = setInterval(tick, delay);
    }

    const id = intervalIdRef.current;
    return () => {
      clearInterval(id);
    };
  });

  // handle unmount
  useEffect(() => {
    const id = intervalIdRef.current;
    return () => {
      clearInterval(id);
    };
  }, []);
};

export default useInterval;