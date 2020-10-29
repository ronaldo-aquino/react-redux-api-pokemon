import { FETCH_USER } from "./HomeActions";

const initialState = {
    user: null,
};

function HomeReducer(state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case FETCH_USER:
            return { user: payload };
        default:
            return state;
    }
}

export default HomeReducer;
