
import { GET_ROOM_ACTION, ENABLE_ROOM_ACTION_LOADING, DISABLE_ROOM_ACTION_LOADING } from "../actions/types";

const initialState = {
    roomData: [],
    loading: false,
};

// Named export instead of default export
const roomReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ROOM_ACTION:
            return {
                ...state,
                roomData: action.payload,
            };
        case ENABLE_ROOM_ACTION_LOADING:
            return {
                ...state,
                loading: true,
            };
        case DISABLE_ROOM_ACTION_LOADING:
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
};

export default roomReducer; // Exporting named reducer
