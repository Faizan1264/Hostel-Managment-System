
import { GET_STAFF_DETAILS, ENABLE_STAFF_LOADING, DISABLE_STAFF_LOADING } from "../actions/types";

const initialState = {
    staffData: [],
    loading: false,
};

// Named export instead of default export
const staffReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_STAFF_DETAILS:
            return {
                ...state,
                staffData: action.payload,
            };
        case ENABLE_STAFF_LOADING:
            return {
                ...state,
                loading: true,
            };
        case DISABLE_STAFF_LOADING:
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
};

export default staffReducer; // Exporting named reducer
