import {
    CHANGE_SEARCH_FIELD,
    REQUEST_ROBOTS_PENDING,
    REQUEST_ROBOTS_SUCCESS,
    REQUEST_ROBOTS_FAILED
} from "./constants";

const initialStateSearch = {
    searchField: ''
}

export const searchRobots = (state=initialStateSearch,{type, payload}) => {

    switch (type) {
        case CHANGE_SEARCH_FIELD:
            return { ...state, searchField: payload };
        default:
            return state;
    }
}

const initialStateRobots = {
    pending: false,
    robots: [],
    error: ''
}

export const requestRobots = (state=initialStateRobots, action={}) => {
    switch (action.type) {
        case REQUEST_ROBOTS_PENDING:
            return {
                ...state,
                pending: true
            }
        case REQUEST_ROBOTS_SUCCESS:
            return {
                ...state,
                pending: false,
                robots: action.payload
            }
        case REQUEST_ROBOTS_FAILED:
            return {
                ...state,
                pending: false,
                error: action.error
            }
        default:
            return state;
    }
}