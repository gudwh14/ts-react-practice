import {Link, RouteComponentProps} from "react-router-dom";

const Page2 = ({match, location , history} : RouteComponentProps) => {
    console.log("match" , match);
    console.log("location" , location);
    console.log("history" , history);

    return(
        <>
            <h1>Page - 2</h1>
            <Link to={"/page1/1"}>페이지1 이동</Link>
        </>
    )
}

export default Page2;