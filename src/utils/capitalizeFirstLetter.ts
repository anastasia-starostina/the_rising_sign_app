import { ReactNode } from "react";

export function capitalize (word : string) : ReactNode {
return word.charAt(0).toUpperCase() + word.slice(1);
}