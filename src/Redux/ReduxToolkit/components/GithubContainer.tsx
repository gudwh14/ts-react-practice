import {useDispatch, useSelector} from "react-redux";
import {RootSateRF} from "../modules";
import {fetchTodo} from "../modules/github/githubThunk";
import GithubUserForm from "./GithubUserForm";
import GithubProfileInfo from "./GithubProfileInfo";

const GithubContainer = () => {
    const {loading ,data ,error} = useSelector((state : RootSateRF) => state.githubSlice.userProfile);
    const dispatch = useDispatch();

    const onSubmitUsername = (username : string) => {
        dispatch(fetchTodo(username));
    }

    return (
        <>
            <GithubUserForm onSubmitUsername={onSubmitUsername}/>
            {loading && <p>로딩중...</p>}
            {error && <p>{error.error}</p>}
            {data && <GithubProfileInfo name={data.name} thumbnail={data.avatar_url} bio={data.bio} blog={data.blog}/>}
        </>
    )
}

export default GithubContainer;