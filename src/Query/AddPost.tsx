import {Post, postNewData} from "./Api";
import {useMutation} from "react-query";
import {useCallback} from "react";

const AddPost = () => {
    // 서버 데이터를 가져오는 것은 reactive 하게 동작하는 useQuery 를 사용하면 되겠지만
    // 서버 데이터 업데이트는 그런 방식으로 사용하기에는 적절하지 않다.
    // 데이터 생성/수정/삭제에는 useMutation 훅을 사용하면 된다.
    const usePostNewData = useMutation((data : Post)=> postNewData(data));

    const handleSubmit = useCallback(async (data : Post)=> {
        await usePostNewData.mutateAsync(data);
        // 추가 액션 코드
        // Ex Redux-saga
    },[usePostNewData])
    return (
        <>
            <button onClick={() => handleSubmit({
                id : 1,
                title : "123",
                body : "hi"
            })}>데이터 추가</button>
        </>
    )
};

export default AddPost;