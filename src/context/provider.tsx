import { ReactNode, useMemo, useState } from "react";
import context, {defaultStateValue} from "./context";

export function Provider({children}: {children: ReactNode}){
  const [nasaImage , setNasaImage]= useState(defaultStateValue);
  return (
    <context.Provider value={{nasaImage, setNasaImage}}>
      {children}
    </context.Provider>
  );
};