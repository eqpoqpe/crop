import {
  FunctionComponentElement,
  PropsWithChildren,
  ProviderProps,
  createContext,
  createElement,
  useContext,
  useState
} from "react";

interface ModeContext {
  isDanceMode: boolean;
  setOnDance: () => void;
}

const modeContext = createContext<ModeContext | null>(null);

function ControllerModeProvider(props: PropsWithChildren): FunctionComponentElement<ProviderProps<ModeContext | null>> {
  const { children } = props;
  const [isDanceMode, setIsDanceMode] = useState(false);

  return createElement(modeContext.Provider, {
    value: {
      isDanceMode: isDanceMode,
      setOnDance: () => { setIsDanceMode(!isDanceMode); }
    }
  }, children);
}

function useModeContext(): ModeContext {
  return (useContext(modeContext) as ModeContext);
}

export { ControllerModeProvider, useModeContext };