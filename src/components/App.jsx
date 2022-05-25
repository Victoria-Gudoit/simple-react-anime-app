import { Switch, Route, Redirect } from "react-router-dom";
import { Header } from "./Header/Header";
import { AnimeList } from "./AnimeList/AnimeList";
import { Anime } from "./Anime/Anime";


export function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/:type" exact>
          <AnimeList />
        </Route>
        <Route path="/:type/:id" exact>
          <Anime />
        </Route>
        <Redirect to="/anime" />
      </Switch>
    </div>
  );
}
