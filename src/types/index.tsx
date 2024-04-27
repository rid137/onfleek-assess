import { ReactElement } from "react";

export interface LinkData {
    href: string;
    icon: ReactElement<any, any>;
    pageName: string;
}