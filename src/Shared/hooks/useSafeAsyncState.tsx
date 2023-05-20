import { useEffect, useState, useRef, useCallback } from 'react';

function useSafeAsyncState<T>(initialState: T)
  :[
    state: T,
    setSafeAsyncState: (data: T) => void,
  ] {
  const [state, setState] = useState(initialState);
  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;

    return () => {
      isMounted.current = false;
    };
  }, []);

  const setSafeAsyncState = useCallback((data: T) => {
    if (isMounted.current === true) {
      setState(data);
    }
  }, []);

  return [state, setSafeAsyncState];
}

export default useSafeAsyncState;
