import { useEffect, useState } from "react";

function usePersistentObjectData<T>(
  defaultState: T,
  key: string
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [state, setState] = useState<T>(defaultState);

  useEffect(() => {
    const storedValue = sessionStorage.getItem(key);
    if (storedValue) {
      try {
        const obj = JSON.parse(storedValue);
        setState(obj as T);
      } catch (err) {
        throw err;
      }
    }
  }, [key]);

  useEffect(() => {
    sessionStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  return [state, setState];
}

export default usePersistentObjectData;
