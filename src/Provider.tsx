import { createContext } from 'react';

type TodayHoroscopeType = string | null


export const Context = createContext<TodayHoroscopeType>("");

export default function Provider(props: { children: React.ReactNode }) {
  return <Context.Provider value={""}>{props.children}</Context.Provider>;
}
