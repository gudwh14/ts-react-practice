import {FormEvent, useState} from "react";

type GithubUserForm = {
    onSubmitUsername : (username : string) => void;
}

const GithubUserForm = ({onSubmitUsername} : GithubUserForm) : JSX.Element => {
    const [username , setUsername] = useState("");
    const onSubmit = (event : FormEvent) => {
        event.preventDefault();
        onSubmitUsername(username);
        setUsername("");
    }

    return(
        <form onSubmit={onSubmit}>
            <input type='text' value={username} onChange={(event)=>{setUsername(event.target.value)}}/>
            <button type='submit'>์ ์  ์กฐํ</button>
        </form>
    )
};

export default GithubUserForm;