import { USER_ADD, USER_DELETE, USER_LIST_ERROR, USER_LIST_REQUEST, USER_LIST_SUCCESS, USER_UPDATE } from "src/app/actions/user-action";
import { Action } from "../actions";
import { User } from "../models/user";


export interface UserReducerState{
    loading: boolean;
    loaded: boolean;
    error: boolean;
    users: User[];
}

const initialState: UserReducerState = {
    loaded: false,
    loading: false,
    error: false,
    users: []
}

export function UserReducer(state = initialState, action: Action) : UserReducerState {
    switch(action.type){
        case USER_LIST_REQUEST: {
            return {...state, loading: true};
        }
        case USER_DELETE: {
            const users = state.users.filter(data => data.id !== action.payload.id)
            return {...state, ...{users}};
        }
        case USER_UPDATE: {
            const users = state.users.filter(data => data.id !== action.payload.data.id)
            const updatedUser = users.concat(action.payload.data)
            return {...state, ...{users: updatedUser}};
        }
        case USER_ADD: {
            const users = state.users.concat(action.payload.data)
            return {...state, ...{users}};
        }
        case USER_LIST_ERROR: {
            return {...state, error: true, loading: false};
        }
        case USER_LIST_SUCCESS: {
            const updatedUsers = state.users.concat(action.payload.data);
            return {...state, loading: false, loaded: true, users: updatedUsers, error: false};
        }
        default: {
            return state;
        }
    }
}

// selectors
export const getLoading = (state: UserReducerState) => state.loading;
export const getLoaded = (state: UserReducerState) => state.loaded;
export const getUsers = (state: UserReducerState) => state.users;
export const getError = (state: UserReducerState) => state.error;