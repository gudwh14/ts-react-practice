import {createAsyncThunk} from "@reduxjs/toolkit";
import {GithubProfile} from "../../../../api/github";
import axios from "axios";

export interface GithubError {
    error : string;
}

//createAsyncThunk API 로 비동기 액션을 만들면 이 액션에 대해 pending, fulfilled, rejected 상태에 대한 액션이 자동으로 생성된다.
export const fetchTodo = createAsyncThunk<
    GithubProfile, // 성공시 리턴타입 정의
    string, // input 타입 정의
    {rejectValue : GithubError | null}> // thunkApi 정의({dispatch?, state?, extra?, rejectValue?})
    ('github/fetchTodo', async (username : string, thunkAPI) => {
        try {
            const userProfile = await axios.get<GithubProfile>(`https://api.github.com/users/${username}`);
            return userProfile.data;
        }
        catch (e) {
            return thunkAPI.rejectWithValue({error : "해당 유저가 존재하지 않습니다."});
        }
    }
)