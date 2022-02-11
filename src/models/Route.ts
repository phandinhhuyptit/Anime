import React from "react";
import { Icon } from "types"
export interface Route {
  name: string;
  path: string;
  component: React.ComponentType;
  dropdown?: boolean;
  dropdownData?: Array<any>;
  header: boolean;
  dropdownPath?: (data: any) => string;
  listKey?: (data: any) => string;
  navigation?: boolean;
  icon?: React.ComponentType<Icon>;

}
