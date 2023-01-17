import { createContext } from 'react';

export const defaultStateValue = {  title: '', copyright: '', date: '',explanation: '', hdurl: ''}

const defaultValue = {
  nasaImage: defaultStateValue,
  setNasaImage: () => {}
}

type defaultType = {
  nasaImage: {  title: string, copyright: string, date: string, explanation: string, hdurl: string},
  setNasaImage: (newState: typeof defaultStateValue) => void
}

const context = createContext<defaultType>(defaultValue);

export default context;