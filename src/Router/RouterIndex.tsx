import {BrowserRouter, Switch ,Route} from "react-router-dom";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";

const RouterIndex = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/page1/:id" component={Page1}/>
                <Route exact path="/page2" component={Page2}/>
            </Switch>
        </BrowserRouter>
    )
}

export default RouterIndex;