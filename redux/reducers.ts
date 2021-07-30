import { AnyAction } from "redux";
import { ColorScheme, LightScheme } from "@utils/colorSchemes";
import { ActionTypes } from "@redux/actionTypes";
import { Routes } from "@utils/enums";

const initialRoute: Routes = Routes.MAIN;
const initialColorScheme: ColorScheme = LightScheme;

export const routesReducer = (state = initialRoute, action: AnyAction) => {
  switch (action.type) {
    case ActionTypes.SET_SELECTED_ROUTE:
      return action.payload;
    default:
      return state;
  }
};

export const colorSchemeReducer = (
  state = initialColorScheme,
  action: AnyAction
) => {
  switch (action.type) {
    case ActionTypes.CHANGE_COLOR_SCHEME:
      return action.payload;
    default:
      return state;
  }
};
