/* eslint-disable react-refresh/only-export-components */
import {
  useState,
  useContext,
  ReactNode,
  SetStateAction,
  Dispatch,
  FC,
  createContext,
} from "react";

type ContextValue = {
  ID: string | null;
  setID: Dispatch<SetStateAction<string | null>>;
};

const IDContext = createContext<null | ContextValue>(null);
const { Provider } = IDContext;

type IDProviderProps = {
  children: ReactNode;
};

const IDProvider: FC<IDProviderProps> = ({ children }) => {
  const [ID, setID] = useState<string | null>(null);

  return <Provider value={{ ID, setID }}>{children}</Provider>;
};

export const useID = () => {
  const context = useContext(IDContext);
  if (!context) throw new Error("useID must be used within a IDProvider");
  return context;
};

export default IDProvider;
