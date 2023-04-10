import * as React from "react";
import { useNavigate } from "react-router-dom";

type Path = "/"  | "/playground";

export const useStartTransition = () => {
  const navigate = useNavigate();
  return (path: Path): Promise<void> => {
    return new Promise<void>(resolve => {
      React.startTransition(() => {
        navigate(path);
        resolve();
      });
    });
  }
}
