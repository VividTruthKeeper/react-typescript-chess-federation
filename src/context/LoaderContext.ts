import { createContext } from "react";
import { loaderType } from "../types/contextType";

export const EventContext = createContext<loaderType | null>(null);
