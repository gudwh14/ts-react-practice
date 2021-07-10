import {RouteComponentProps,Link} from 'react-router-dom';

// match 에서 prams 를 읽어오기위해서 사용할 타입을 정의해줍니다
type MatchParams = {
    id : string;
}

// RouteComponentsProps 를 통해서 history , match , location 을 받을 수 있습니다.
// 받을 params 타입을 Generics 에 주입시켜준다.
// http://localhost:3000/page1/1?query=Hello
// query : Hello ( location.search)
// id : 1 ( match.params )
const Page1 =({match, location , history} : RouteComponentProps<MatchParams>) => {
    console.log("match" , match);
    console.log("location" , location);
    console.log("history" , history);

    // location.search 에서 QueryString 가져오기위한 Hook 생성
    const useQuery = () => {
        return new URLSearchParams(location.search);
    }
    // get($name) 을 통해서 가져올 수 있다.
    const query = useQuery().get("query");

    // MatchParams Type 으로 형변환
    const {id} = match.params;

    console.log(id);
    console.log(query);
    return(
        <>
            <h1>Page - 1</h1>
            <Link to={"/page2"}>페이지2 이동</Link>
        </>
    )
}

export default Page1;