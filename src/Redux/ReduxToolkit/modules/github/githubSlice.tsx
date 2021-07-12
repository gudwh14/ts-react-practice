import {GithubProfile} from "../../../../api/github";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fetchTodo, GithubError} from "./githubThunk";


// Github 타입정의
export type GithubState = {
    userProfile : {
        loading : boolean;
        error : GithubError | null | undefined; // 에러는 null 일수도 있다.
        data : GithubProfile | null; // data 는 null 일수도 있다.
    };
};

const initialState : GithubState = {
    userProfile : {
        loading : false,
        error : null,
        data : null
    }
}

export const githubSlice = createSlice({
    name : 'github',
    initialState : initialState,
    reducers : {
    },
    //만들어진 비동기 액션에 대한 리듀서는 아래와 같이 extraReducers 로 작성할 수 있다.
    //extraReducers 로 지정된 reducer 는 외부 작업을 참조하기 위한 것이기 때문에
    // slice.actions 에 생성되지 않는다.
    // 또한, ActionReducerMapBuilder 를 수신하는 콜백으로 작성하는 것이 권장된다.
    extraReducers : (builder) => {
        builder
            .addCase(fetchTodo.pending, (state : GithubState) => {
                state.userProfile.loading = true;
                state.userProfile.data = null;
                state.userProfile.error = null;
            })
            .addCase(fetchTodo.fulfilled, (state : GithubState,action : PayloadAction<GithubProfile>) => {
                state.userProfile.loading = false;
                state.userProfile.data = action.payload;
                state.userProfile.error = null;
            })
            .addCase(fetchTodo.rejected,(state,{payload})=> {
                state.userProfile.loading = false;
                state.userProfile.error = payload;
                state.userProfile.data = null;
            })
    }
})

export default githubSlice.reducer;