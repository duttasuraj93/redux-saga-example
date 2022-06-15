import { call, put, takeEvery } from "redux-saga/effects";
import { setUser, getUser } from "../slices/userSlice";
import {requestGetUser} from '../sagas/requests/user'
import {handleGetUser} from './handlers/user'

// export function* workGetUserFetch() {
//     // const reponse = yield call(requestGetUser)
//     // yield put(setUser(reponse.data))
//     yield(handleGetUser())
// }

export function* rootSaga() {
    yield takeEvery(getUser, handleGetUser)
}

export default rootSaga