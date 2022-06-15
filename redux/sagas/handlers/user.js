import { call, put } from "redux-saga/effects";
import { requestGetUser } from "../requests/user";
import userSlice from "../../slices/userSlice";
import { setUser } from "../../slices/userSlice";

export function* handleGetUser(action) {
    try {
        const response = yield call(requestGetUser)
        const { data } = response
        console.log("here data");
        console.log(data);
        yield put(setUser(data))
    } catch (error) {
        console.log(error);
    }
}