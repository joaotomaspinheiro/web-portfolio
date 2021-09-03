import { ColorScheme } from "@utils/colorSchemes";
import ActionTypes from "@store/actionTypes";
import { Routes } from "@utils/enums";

export const setSelectedRoute = (route: Routes | null) => {
  return {
    type: ActionTypes.SET_SELECTED_ROUTE,
    payload: route,
  };
};

export const setColorScheme = (colorSheme: ColorScheme) => {
  return {
    type: ActionTypes.CHANGE_COLOR_SCHEME,
    payload: colorSheme,
  };
};
