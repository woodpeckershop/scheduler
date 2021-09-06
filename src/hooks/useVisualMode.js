import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  const transition = (newMode, replace = false) => {
    setMode(newMode);
    if (replace === false) {
      setHistory((prev) => [...prev, newMode]);
    } else {
      setHistory((prev) => [...prev.slice(0, -1), newMode]);
    }
  };

  const back = () => {
    if (history.length > 1) {
      
      const newHistory = [...history].slice(0, -1)
      setHistory( newHistory )
      const lastMode = newHistory[newHistory.length -1];
      setMode(()=>lastMode);
    }
  };

  return { mode, transition, back };
}
