import {RouteComponentProps} from "react-router-dom";
import {usePostById} from "./Api";
import {useQueryClient} from "react-query";

type MatchParams = {
    id : string;
}

const Post = ({match} : RouteComponentProps<MatchParams>) : JSX.Element => {
    const {id} = match.params;
    const {data,status} = usePostById(id);
    const queryClient = useQueryClient();

    console.log(queryClient.getQueryCache());
    const queryInvalidation = () => {
        queryClient.invalidateQueries(); // 캐시에 있는 모든 쿼리를 무효화 시킨다.
        queryClient.invalidateQueries('posts') // posts 키를 가진 쿼리를 무효화 시킨다.
        // predicate 옵션을 사용하여 무효화 조건을 설정 할 수 있다.
        queryClient.invalidateQueries({
            predicate : query => query.queryKey[0] === 'posts' && query.queryKey[1] === id,
        })
    }
    return (
        <>
            <h1>{data?.title}</h1>
            <span>{data?.body}</span>
        </>
    )
}

export default Post;