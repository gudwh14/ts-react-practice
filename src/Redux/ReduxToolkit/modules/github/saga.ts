import {getUserProfile, GithubProfile} from "../../../../api/github";
import {call, put , takeEvery} from 'redux-saga/effects';
import {getUserProfileAsync, getUserProfileAsyncSuccess, getUserProfileAsyncError, githubSlice} from './githubSlice';
import {PayloadAction} from "@reduxjs/toolkit";

function* getUserProfileSaga(action : PayloadAction<string>) {
    try {
        const userProfile : GithubProfile = yield call(getUserProfile,action.payload);
        yield put(getUserProfileAsyncSuccess(userProfile));
    }
    catch (e) {
        yield put(getUserProfileAsyncError({error : "해당유저는 존재하지 않습니다."}));
    }
}

export function* githubSaga() {
    yield takeEvery(getUserProfileAsync.type, getUserProfileSaga);
}