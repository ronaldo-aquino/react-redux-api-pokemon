import { doGetRequest } from "../../Helpers/apiHelper";

export const FETCH_USER = "FETCH_USER";

export const fetchUser = (id) => {
    const payload = doGetRequest(`/people/${id}`);

    return {
        type: FETCH_USER,
        payload,
    };
};
