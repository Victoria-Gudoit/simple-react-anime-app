import { Switch, Route, Redirect } from "react-router-dom";
import { Header } from "./Header/Header";
import { Items } from "./Items/Items";
import { Item } from "./Item/Item";


export function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/:type" exact>
          <Items />
        </Route>
        <Route path="/:type/:id" exact>
          <Item />
        </Route>
        <Redirect to="/anime" />
      </Switch>
    </div>
  );
}
