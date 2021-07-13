import {usePosts} from "./Api";
import {useQueryClient} from "react-query";
import {useCallback} from "react";
import {Link} from "react-router-dom";
import "./Post.css";
/*
    React Query 를 통해 관리하는 쿼리 데이터(Query, useQuery 가 반환하는 객체 속성값)는 4가지 상태를 가진다.

    1. fresh : 새롭게 추가된 쿼리 인스턴스이며, 만료되지 않은 쿼리. 컴포넌트의 mount, update 시에 데이터를 재요청하지 않음.

    2. fetching : 요청 상태인 쿼리.

    3. stale : 데이터 패칭이 완료되어 만료된 쿼리. stale 상태의 같은 쿼리를 useQuery 로 재호출하여 컴포넌트 마운트를 한다면 캐싱된 데이터가 반환됨.

    4. inactive : 비활성 쿼리로써 사용하지 않음. 5분 뒤에 가비지 콜렉터가 캐시에서 제거함.

    5. delete : 가비지 콜렉터에 의하여 캐시에서 제거된 쿼리.

    Important Defaults
    React Query API 의 기본 설정에 대한 내용이다.

    useQuery, useInfiniteQuery 로 가져온 데이터는 stale 상태가 된다.
    Stale 쿼리는 다음과 같은 경우에 백그라운드에서 자동으로 리패칭된다
    새 쿼리 인스턴스가 마운트 된 경우
    브라우저 윈도우가 다시 포커스 된 경우
    네트워크가 재연결 된 경우
    refetchInterval 옵션이 있는 경우
    활성화 상태의 useQuery, useInfiniteQuery 인스턴스가 없는 쿼리 결과는 "inactive" 라벨이 붙고 다음 사용까지 남아있는다.
    백그라운드에서 3회 이상 실패한 쿼리는 에러로써 처리된다
 */

const Posts = () => {
    const queryClient = useQueryClient();
    /*
        반환값
        data : queryFunction 이 반환한 Promise resolve 데이터
        isLoading : 캐시된 데이터가 없는 상태에서 데이터를 요청중일 때 true
        isFetching : 캐시 데이터 유무와 상관없이 데이터를 요청중일 때 true
     */
    const {isLoading , error , data , isFetching, status} = usePosts();

    const renderPosts = useCallback(()=> {
        switch (status) {
            case "loading":
                return <span>로딩중...</span>;
            case "error":
                if (error instanceof Error) {
                    return <span>{error.message}</span>;
                }
                break;
            default :
                return (
                    <div>
                        <h1>게시글 목록</h1>
                        {data?.map((post)=> {
                            return (
                                <div key={post.id}>
                                    <Link className={queryClient.getQueryData(['post',post.id+""]) ? "Link-cached" : "Link"}
                                          to={`/post/${post.id}`}>
                                        {post.id}.{post.title}
                                    </Link>
                                </div>
                            )
                        })}
                    </div>
                )
        }
    },[status]);

    return (
        <>
            {renderPosts()}
        </>
    );
}

export default Posts;