import { Nasa } from "@/class/Nasa";
import { ReactNode, useMemo, useState } from "react";
import context from "./context";

export function Provider({children}: {children: ReactNode}){
  const [nasaImage , setNasaImage]= useState<Nasa>();
  const contextValue = useMemo(() => {
  const objSate = {nasaImage , setNasaImage}
  return objSate
  }, [nasaImage , setNasaImage])
  return (
    <context.Provider value={contextValue}>
      {children}
    </context.Provider>
  );
};