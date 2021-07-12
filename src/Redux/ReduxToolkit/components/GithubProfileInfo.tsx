
type GithubProfileInfo = {
    name: string;
    thumbnail: string;
    bio: string;
    blog: string;
}

const GithubProfileInfo = ({name,thumbnail,bio,blog} : GithubProfileInfo) : JSX.Element => {
    return (
        <>
            <div>
                <img src={thumbnail}/>
            </div>
            <div>
                <h1>{name}</h1>
                <p>{bio}</p>
                <a href={blog}>BLOG</a>
            </div>
        </>
    )
};

export default GithubProfileInfo;