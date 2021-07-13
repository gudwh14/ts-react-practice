import axios from "axios";
import {useQuery} from "react-query";
import Post from "./Post";

export interface Post {
    id: number;
    title : string;
    body : string;
}

const getPosts = async () : Promise<Array<Post>> => {
    const {data} = await axios.get("https://jsonplaceholder.typicode.com/posts");
    return data;
}

export const usePosts = () => {
    // queryKey 값을 바탕으로 데이터를 캐싱함
    // 다른 키로 취급합니다.
    // useQuery(['post', 1], ...)
    // useQuery(['[pst', 2], ...)
    // // 객체 필드의 값이 달라도 다른 키로 취급합니다
    // useQuery(['post', { new: true }], ...)
    // useQuery(['post', { new: false }], ...)
    // 두번째 인자는 Promise 를 반환하는 함수를 넣어 준다.
    // 세번째 인자는 옵션
    return useQuery('posts', getPosts);
    /*
    옵션
    cacheTime : 기본값은 5분으로, unused / inactive 캐시 데이터를 메모리에서 유지시킬 시간.
    Infinity 로 설정하면 쿼리 데이터가 캐시에서 제거되지 않는다.

    staleTime : 기본값은 0으로, 쿼리 데이터가 fresh 에서 stale 로 전환되는데 걸리는 시간이다.
    Infinity 로 설정하면 쿼리 데이터는 직접 캐시를 무효화할 때까지 fresh 상태로 유지된다.
    캐시는 메모리에서 관리되므로 브라우저 새로고침 후에는 다시 가져온다.

    onSuccess : queryFunction 이 성공적으로 데이터를 가져왔을 때 호출되는 함수이다.

    onError : queryFunction 에서 오류가 발생했을 때 호출되는 함수이다.

    onSettled : queryFunction 이 성공, 실패한 경우 모두 실행되는 함수이다.

    enabled - false 값이 전달되면 쿼리가 비활성화된다.
    데이터 요청에 사용할 파라미터가 유효한 값일 때만 true 를 할당하는 식으로 활용할 수 있다.

    keepPreviousData : queryKey 가 변경되어 새로운 데이터를 요청하는 동안에도 마지막 data 값을 유지한다.
    페이지네이션을 구현할 때 유용하다. 캐시되지 않은 페이지를 가져올 때 화면에서 viewing 컴포넌트가 사라지는 현상을 방지할 수 있다.
    isPreviousData 값으로 현재의 queryKey 에 해당하는 값인지 확인할 수 있다.

    initialData : 캐시된 데이터가 없을 때 표시할 초기값이다. placeholder 와는 달리 캐싱이 된다.
    브라우저 로컬 스토리지에 저장해 둔 값으로 데이터를 초기화할 때 사용할 수 있을 것이다.

    refetchOnWindowFocus : 윈도우가 다시 포커스되었을 때 데이터를 호출할 것인지 여부이다. 기본값은 true 이다.
     */
}

const getPostById = async (id : string) : Promise<Post> => {
    const {data} = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return data;
}

export const usePostById = (id : string) => {
    return useQuery(["post",id],()=> getPostById(id), {
        cacheTime : 1000 * 10, // 1000ms 캐시 타임
        onSuccess : data => console.log("useQuery 호출 성공"),
        enabled : !!id // false 이면  쿼리가 비활성화 된다. 파리미터 체크
    });
}

export const postNewData = async (data : Post) => {
    return await axios.post('/posts', data);
}
