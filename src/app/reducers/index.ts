import { ActionReducerMap, createSelector } from "@ngrx/store";
import * as fromUser from "./user-reducer";

export interface RootReducerState {
    users: fromUser.UserReducerState;
}

export const rootReducer : ActionReducerMap<RootReducerState> = {
    users: fromUser.UserReducer
};

export const getUserState = (state: RootReducerState) => state.users;

export const getUserById = (state: RootReducerState, id: number) => {
    const entities = getUserEntities(state);
    return entities[id];
}

export const getUserLoaded = createSelector(getUserState, fromUser.getLoaded);
export const getUserLoading = createSelector(getUserState, fromUser.getLoading);
export const getUserEntities = createSelector(getUserState, fromUser.getUsers);
export const getUsers = createSelector(getUserState, fromUser.getUsers);
export const getUserError = createSelector(getUserState, fromUser.getError);