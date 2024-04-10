import { BOOKING, DELETE } from "./actionTypes";

const initialState = {
    data: [],
};

const bookingReducer = (state = initialState, action) => {
    switch (action.type) {
        case BOOKING:
            // eslint-disable-next-line no-case-declarations
            const newData = [...state.data];
            newData.push(action.payload);
            return { data: newData };
        case DELETE:
            // eslint-disable-next-line no-case-declarations
            const filteredData = state.data.filter((d) => d.id !== action.payload);
            return { data: filteredData };
        default:
            return state;
    }
};

export default bookingReducer;